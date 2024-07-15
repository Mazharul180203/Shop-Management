import React, { useEffect, useState } from 'react';
import { Button, Form, Select, Spin } from "antd";
import axios from "axios";
import { BASE_URL } from "../../../../config/config.js";
import toast from "react-hot-toast";

const { Option } = Select;

const AddNewPurchasePage = () => {
    const [loading, setLoading] = useState(false);
    const [supplierList, setSupplierList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    const [productList, setProductList] = useState([]);
    const [itemList, setItemList] = useState([]);
    const [formData, setFormData] = useState({
        itemId: '',
        supplierId: '',
        categoryId: '',
        productId: '',
        purchaseQuantity: '',
        purchasePerUnit: '',
        priceAvg: '',
        purchaseTotal: '',
        subtotalAmount: '',
        taxId: 323,
    });

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

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSelectChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async () => {
        try {
            setLoading(true);
            // Your submit logic here
            toast.success("Form submitted successfully");
        } catch (error) {
            console.error("Error submitting form", error);
            toast.error("Error submitting form");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="product-form-container">
            <h2>New Purchase Items</h2>
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
                                            setFormData({...formData, categoryId: value, productId: '',});
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
                                <Select name="productId" value={formData.productId}
                                        onChange={async (value) => {
                                            handleSelectChange('productId', value);
                                            if (value) {
                                                let res = await axios.post(`${BASE_URL}/api/v1/itemDetail/${value}`, {}, { withCredentials: true });
                                                setItemList(res.data.data);
                                            } else {
                                                setItemList([]);
                                            }
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
