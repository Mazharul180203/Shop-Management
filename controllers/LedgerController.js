import {TransactionService} from "../services/LegerService.js";

export const transaction = async (req,res) =>{
    let result = await TransactionService(req,res);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}