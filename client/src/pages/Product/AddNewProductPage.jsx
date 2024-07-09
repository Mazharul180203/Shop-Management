import React, { useState } from 'react';
import { Form, Input, Select, Button } from 'antd';
import toast from 'react-hot-toast';
import ValidationHelper from "../../utilitiy/ValidationUtlity.js";

const { Option } = Select;

const ProductForm = () => {
    const [formData, setFormData] = useState({
        productName: '',
        productCategory: '',
        brand: '',
        unit: '',
    });

    const [loading, setLoading] = useState(false);

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

    const isEmpty = (value) => {
        return value.trim() === '';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (ValidationHelper.isEmpty(formData.productName)) {
                toast.error("Product Name is required");
            }
            if (ValidationHelper.isEmpty(formData.productCategory)) {
                toast.error("Product Category is required");
            }if (ValidationHelper.isEmpty(formData.brand)) {
                toast.error("Brand is required");
            }if (ValidationHelper.isEmpty(formData.unit)) {
                toast.error("Unit is required");
            }
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
            <Form
                layout="vertical"
                onSubmit={handleSubmit}
            >
                <div className="row">
                    <div className="col-md-6">
                        <Form.Item
                            label="Product Name"

                        >
                            <Input
                                name="productName"
                                value={formData.productName}
                                onChange={handleInputChange}
                                placeholder="Product Name"

                            />
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item
                            label="Product Category"

                        >
                            <Select
                                name="productCategory"
                                value={formData.productCategory}
                                onChange={(value) => handleSelectChange('productCategory', value)}
                                placeholder="Select Category"

                            >
                                <Option value="category1">Category 1</Option>
                                <Option value="category2">Category 2</Option>
                            </Select>
                        </Form.Item>
                    </div>
                </div>
                <div className="row">

                    <div className="col-md-6">
                        <Form.Item
                            label="Brand"

                        >
                            <Select
                                name="brand"
                                value={formData.brand}
                                onChange={(value) => handleSelectChange('brand', value)}
                                placeholder="Select Brand"

                            >
                                <Option value="brand1">Brand 1</Option>
                                <Option value="brand2">Brand 2</Option>
                            </Select>
                        </Form.Item>
                    </div>
                    <div className="col-md-6">
                        <Form.Item
                            label="Unit"

                        >
                            <Select
                                name="unit"
                                value={formData.unit}
                                onChange={(value) => handleSelectChange('unit', value)}
                                placeholder="Select Unit"

                            >
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
        </div>
    );
};

export default ProductForm;
