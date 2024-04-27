import {UpdateService} from '../services/UpdateServices.js'

export const Update = async (req,res) =>{
    let result = await UpdateService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }
}