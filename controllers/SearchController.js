import {CategoryItemService, ItemDetailService} from "../services/SearchServices.js";

export const categoryItem = async (req,res) =>{
    let result = await CategoryItemService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}
export const itemDetail = async (req,res) =>{
    let result = await ItemDetailService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}