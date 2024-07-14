import React, {useEffect, useState} from 'react';
import {Button, Form, Input, Select, Spin} from "antd";
import axios from "axios";
import {BASE_URL} from "../../../../config/config.js";
import toast from "react-hot-toast";

const AddNewPurchasePage = () => {
    const [loading, setLoading] = useState(false);
    const [supplierList, setSupplierList] = useState([]);
    const [categoryList,setCategoryList] = useState([]);
    const [productList,setProductList] = useState([]);
    const [itemList,setItemList] = useState([]);
    const [formData, setFormData] = useState({
        itemId:'',
        supplierId: '',
        categoryId: '',
        productId: '',
        purchaseQuantity:'',
        purchasePerUnit:'',
        priceAvg:'',
        purchaseTotal:'',
        subtotalAmount:'',
        taxId:323,
    });


    useEffect(() => {
        (async ()=>{
            await getData();
        })()
    }, []);


    const getData = async () => {
        try{
            setLoading(true);
            const [supplierResponse, categoryResponse ] = await Promise.all([
                axios.get(`${BASE_URL}/api/v1/dropdown/supplier`,{withCredentials:true}),
                axios.get(`${BASE_URL}/api/v1/dropdown/category`, { withCredentials: true }),
            ]);
            setSupplierList(supplierResponse.data.data);
            setCategoryList(categoryResponse.data.data);
        }catch (error) {
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

    const handleSubmit = () => {

    }

    return (
        <div className="product-form-container">
            <h2>Add New Product</h2>
            <Spin spinning={loading} size="large" tip="Loading...">
                <Form layout="vertical" onFinish={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Item label="Suplier Name">
                                <Select name="supplierId" value={formData.supplierId}
                                        onChange={(value) => handleSelectChange('supplierId', value)}
                                        placeholder="Select Supplier">
                                    <Option value="">Select Supplier</Option>
                                    {
                                        supplierList?.map((item, i) => (
                                            <option key={item?.id} value={item?.id}>{item?.supplier_name}</option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="col-md-6">
                            <Form.Item label="Product Category">
                                <Select name="categoryId" value={formData.categoryId}
                                        onChange={async (value) => {
                                            handleSelectChange('categoryId', value)
                                            let res = await axios.post(`${BASE_URL}/api/categoryItem/value`);
                                            setProductList(res.data.data);
                                        }}

                                        placeholder="Select Category">
                                    <Option value="">Select the category</Option>
                                    {
                                        categoryList?.map((item, i) => (
                                            <option key={item?.id} value={item?.id}>{item?.category_name}</option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="col-md-6">
                            <Form.Item label="Product Name">
                                <Select name="productId" value={formData.productId}
                                        onChange={async (value) => {
                                            handleSelectChange('categoryId', value)
                                            let res = await axios.post(`${BASE_URL}/api/itemDetail/value`);
                                            setItemList(res.data.data);
                                        }}

                                        placeholder="Select Category">
                                    <Option value="">Select the category</Option>
                                    {
                                        productList?.map((item, i) => (
                                            <option key={item?.id} value={item?.id}>{item?.items_name}</option>
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