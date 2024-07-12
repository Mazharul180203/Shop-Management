import {
    BrandService,
    CategoryService,
    ItemService,
    UnitService,
    PurchaseItemService,
    SupplierService,
    CustomertypeService,
    CustomerService,
    PurchaseSupplierTrackerService,
    DropdownService
} from "../services/ItemService.js";

export const category =  async (req,res) =>{
    let result = await CategoryService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}
export const brands =  async (req,res) =>{
    let result = await BrandService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}

export const units =  async (req,res) =>{
    let result = await UnitService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}
export const items =  async (req,res) =>{
    let result = await ItemService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}

export const purchaseitems =  async (req,res) =>{
    let result = await PurchaseItemService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}

export const purchasesuppliertracker =  async (req,res) =>{
    let result = await PurchaseSupplierTrackerService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}
export const supplier =  async (req,res) =>{
    let result = await SupplierService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}
export const  customertype =  async (req,res) =>{
    let result = await CustomertypeService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}
export const customer =  async (req,res) =>{
    let result = await CustomerService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}

export const dropdown =  async (req,res) =>{
    let result = await DropdownService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}