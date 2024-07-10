import React, { useEffect, useState } from 'react';
import { Form, Input, Select, Button, Spin } from 'antd';
import toast from 'react-hot-toast';
import ValidationHelper from "../../utilitiy/ValidationUtlity.js";
import axios from "axios";

const { Option } = Select;

const ProductForm = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        productName: '',
        productCategory: '',
        brand: '',
        unit: '',
    });

    useEffect(() => {
        (async () => {
            await getData();
        })()
    }, []);

    const getData = async () => {
        setLoading(true);
        try {
            let categoryres = await axios.get(`/api/v1/category`);
            let brandres = await axios.get(`/api/v1/brands`);
            let unitres = await axios.get(`/api/v1/units`);

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
        console.log("formData :", formData);
        try {
            if (ValidationHelper.isEmpty(formData.productName)) {
                toast.error("Product Name is required");
                return;
            }
            if (ValidationHelper.isEmpty(formData.productCategory)) {
                toast.error("Product Category is required");
                return;
            }
            if (ValidationHelper.isEmpty(formData.brand)) {
                toast.error("Brand is required");
                return;
            }
            if (ValidationHelper.isEmpty(formData.unit)) {
                toast.error("Unit is required");
                return;
            }

            setLoading(true);
            await new Promise(resolve => setTimeout(resolve, 1000));
            toast.success("Product saved successfully");
        } catch (error) {
            console.error("Error submitting form", error);
            toast.error("Error submitting form");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="product-form-container">
            <h2>Add New Product</h2>
            <Spin spinning={loading} size="large" tip="Loading...">
                <Form layout="vertical" onFinish={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Item label="Product Name">
                                <Input name="productName" value={formData.productName} onChange={handleInputChange} placeholder="Product Name" />
                            </Form.Item>
                        </div>
                        <div className="col-md-6">
                            <Form.Item label="Product Category">
                                <Select name="productCategory" value={formData.productCategory}
                                        onChange={(value) => handleSelectChange('productCategory', value)}
                                        placeholder="Select Category">
                                    <Option value="category1">Category 1</Option>
                                    <Option value="category2">Category 2</Option>
                                </Select>
                            </Form.Item>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <Form.Item label="Brand">
                                <Select name="brand" value={formData.brand} onChange={(value) => handleSelectChange('brand', value)}
                                        placeholder="Select Brand">
                                    <Option value="brand1">Brand 1</Option>
                                    <Option value="brand2">Brand 2</Option>
                                </Select>
                            </Form.Item>
                        </div>
                        <div className="col-md-6">
                            <Form.Item label="Unit">
                                <Select name="unit" value={formData.unit}
                                        onChange={(value) => handleSelectChange('unit', value)}
                                        placeholder="Select Unit">
                                    <Option value="unit1">Unit 1</Option>
                                    <Option value="unit2">Unit 2</Option>
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

export default ProductForm;
