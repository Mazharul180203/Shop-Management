import React, { useEffect, useState } from 'react';
import { Button, Form, Select, Spin, Input, Table } from "antd";
import axios from "axios";
import { BASE_URL } from "../../../../config/config.js";
import toast from "react-hot-toast";

const { Option } = Select;

const AddNewPurchasePage = () => {
    const [loading, setLoading] = useState(false);
    const [supplierList, setSupplierList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [formData, setFormData] = useState({
        itemId: '',
        itemName: '',
        supplierId: '',
        categoryId: '',
        purchaseQuantity: '',
        purchasePerUnit: '',
        priceAvg: '',
        discount: '',
        totalCost: '',
        transport_cost: '',
        taxId: 323,
    });
    const [transportCost, setTransportCost] = useState(0);

    useEffect(() => {
        (async () => {
            await getData();
        })();
    }, []);

    const getData = async () => {
        try {
            setLoading(true);
            const [supplierResponse, categoryResponse] = await Promise.all([
                axios.get(`${BASE_URL}/api/v1/dropdown/supplier`, { withCredentials: true }),
                axios.get(`${BASE_URL}/api/v1/dropdown/category`, { withCredentials: true }),
            ]);
            setSupplierList(supplierResponse.data.data);
            setCategoryList(categoryResponse.data.data);
        } catch (error) {
            console.error("Error fetching data", error);
            toast.error("Error fetching data");
        } finally {
            setLoading(false);
        }
    }

    const handleInputChange = (index, e) => {
        const { name, value } = e.target;
        const updatedProducts = [...selectedProducts];
        updatedProducts[index] = {
            ...updatedProducts[index],
            [name]: value,
        };

        updateTotalCost(updatedProducts);
    };

    const handleTransportCostChange = (e) => {
        const cost = parseFloat(e.target.value) || 0;
        setTransportCost(cost);
        updateTotalCost(selectedProducts, cost);
    };

    const updateTotalCost = (products, newTransportCost = transportCost) => {
        const updatedProducts = [...products];
        const transportShare = (newTransportCost / selectedProducts.length) || 0;

        updatedProducts.forEach(product => {
            const purchaseQuantity = parseFloat(product.purchaseQuantity) || 0;
            const purchasePerUnit = parseFloat(product.purchasePerUnit) || 0;
            const discount = parseFloat(product.discount) || 0;

            let totalCost = purchaseQuantity * purchasePerUnit - discount;
            totalCost += transportShare;

            product.totalCost = totalCost.toFixed(2);
            product.transportShare = transportShare.toFixed(2);
        });

        setSelectedProducts(updatedProducts);
    };

    const handleSelectChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleProductSelect = async (value) => {
        if (value) {
            try {
                setLoading(true);
                let res = await axios.post(`${BASE_URL}/api/v1/itemDetail/${value}`, {}, { withCredentials: true });
                const itemData = res.data.data;
                const newProduct = {
                    itemId: value,
                    itemName: itemData['items_name'],
                    purchaseQuantity: '',
                    purchasePerUnit: '',
                    categoryId: '',
                    supplierId: formData.supplierId,
                    discount: '',
                    totalCost: '',
                    transportShare: '',
                };
                const updatedProducts = [...selectedProducts, newProduct];
                setSelectedProducts(updatedProducts);
                updateTotalCost(updatedProducts);
            } catch (error) {
                console.error("Error fetching product details", error);
                toast.error("Error fetching product details");
            } finally {
                setLoading(false);
            }
        }
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            console.log("array :", selectedProducts);
            //await axios.post(`${BASE_URL}/api/v1/purchase`, { ...formData, products: selectedProducts }, { withCredentials: true });
            //toast.success("Form submitted successfully");
        } catch (error) {
            console.error("Error submitting form", error);
            toast.error("Error submitting form");
        } finally {
            setLoading(false);
        }
    }

    const columns = [
        {
            title: 'SL',
            dataIndex: 'sl',
            key: 'sl',
            render: (text, record, index) => index + 1,
        },
        {
            title: 'Name',
            dataIndex: 'itemName',
            key: 'itemName',
        },
        {
            title: 'Quantity',
            dataIndex: 'purchaseQuantity',
            key: 'purchaseQuantity',
            render: (text, record, index) => (
                <Input name="purchaseQuantity" value={text} onChange={(e) => handleInputChange(index, e)} />
            ),
        },
        {
            title: 'Unit Price',
            dataIndex: 'purchasePerUnit',
            key: 'purchasePerUnit',
            render: (text, record, index) => (
                <Input name="purchasePerUnit" value={text} onChange={(e) => handleInputChange(index, e)} />
            ),
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
            render: (text, record, index) => (
                <Input name="discount" value={text} onChange={(e) => handleInputChange(index, e)} />
            ),
        },
        {
            title: 'Transport Share',
            dataIndex: 'transportShare',
            key: 'transportShare',
        },
        {
            title: 'Total',
            dataIndex: 'totalCost',
            key: 'totalCost',
        },
    ];

    const calculateGrandTotal = () => {
        return selectedProducts.reduce((total, product) => {
            const cost = parseFloat(product.totalCost) || 0;
            return total + cost;
        }, 0).toFixed(2);
    };

    return (
        <div className="product-form-container">
            <h2>New Purchase Product</h2>
            <Spin spinning={loading} size="large" tip="Loading...">
                <Form layout="vertical" onFinish={handleSubmit}>
                    <div className="row">
                        <div className="col-md-4">
                            <Form.Item label="Supplier Name">
                                <Select name="supplierId" value={formData.supplierId}
                                        onChange={(value) => handleSelectChange('supplierId', value)}
                                        placeholder="Select Supplier">
                                    <Option value="">Select Supplier</Option>
                                    {
                                        supplierList?.map((item) => (
                                            <Option key={item?.id} value={item?.id}>{item?.supplier_name}</Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="col-md-4">
                            <Form.Item label="Product Category">
                                <Select name="categoryId" value={formData.categoryId}
                                        onChange={async (value) => {
                                            handleSelectChange('categoryId', value);
                                            if (value) {
                                                let res = await axios.post(`${BASE_URL}/api/v1/categoryItem/${value}`, {}, { withCredentials: true });
                                                setProductList(res.data.data);
                                            } else {
                                                setProductList([]);
                                            }
                                            setFormData({ ...formData, categoryId: value, productId: '', });
                                        }}
                                        placeholder="Select Category">
                                    <Option value="">Select the category</Option>
                                    {
                                        categoryList?.map((item) => (
                                            <Option key={item?.id} value={item?.id}>{item?.category_name}</Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="col-md-4">
                            <Form.Item label="Product Name">
                                <Select name="productId" value={formData.itemId}
                                        onChange={async (value) => {
                                            handleSelectChange('itemId', value);
                                            handleProductSelect(value);
                                        }}
                                        placeholder="Select Product">
                                    <Option value="">Select the product</Option>
                                    {
                                        productList?.map((item) => (
                                            <Option key={item?.id} value={item?.id}>{item?.items_name}</Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                        </div>
                    </div>

                    <Table
                        dataSource={selectedProducts}
                        columns={columns}
                        pagination={false}
                        rowKey="itemId"
                        summary={() => (
                            <Table.Summary.Row>
                                <Table.Summary.Cell colSpan={6}>Grand Total</Table.Summary.Cell>
                                <Table.Summary.Cell>
                                    <span>{calculateGrandTotal()}</span>
                                </Table.Summary.Cell>
                            </Table.Summary.Row>
                        )}
                    />

                    <div className="row">
                        <div className="col-md-4">
                            <Form.Item label="Transport And Labour Cost">
                                <Input name="transportCost" value={transportCost} onChange={handleTransportCostChange} />
                            </Form.Item>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-12">
                            <Form.Item>
                                <Button type="primary" htmlType="submit" disabled={loading}>
                                    {loading ? 'Saving...' : 'Save'}
                                </Button>
                            </Form.Item>
                        </div>
                    </div>
                </Form>
            </Spin>
        </div>
    );
};

export default AddNewPurchasePage;
