import {ItemStockService} from '../services/ItemStockService.js'

export const itemstock = async (req,res) =>{
    let result = await ItemStockService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}