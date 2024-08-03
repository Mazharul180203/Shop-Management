import {CustomerPaymentService, SaleItemService, SalesCustomerTrackerService,GetSalesCustomerTrackerService,CustomerDetailsService} from "../services/SaleItemService.js";


export const saleItem = async (req,res) =>{
    let result = await SaleItemService(req,res);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}

export const salesCustomerTracker =  async (req,res) =>{
    let result = await SalesCustomerTrackerService(req,res);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}

export const customerPayment =  async (req,res) =>{
    let result = await CustomerPaymentService(req,res);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}
export const getsalescustomertracker =  async (req,res) =>{
    let result = await GetSalesCustomerTrackerService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}
export const customerDetails =  async (req,res) =>{
    let result = await CustomerDetailsService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}