import {SaleItemService} from "../services/SaleItemService.js";

export const saleItem = async (req,res) =>{
    let result = await SaleItemService(req,res);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}