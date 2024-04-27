import {RegistrationService, VerifyLoginService} from '../services/AuthServices.js'
export const Registration = async (req,res) =>{
    let result = await RegistrationService(req);
    if(result['status']==="success"){
        return res.status(200).json(result);
    }else {
        return res.status(401).json(result);
    }

}
export const VerifyLogin = async (req,res) =>{
    let result = await VerifyLoginService(req);
    if (result['status'] === "success") {
        let cookieOption={expires:new Date(Date.now()+2*24*60*60*1000), httpOnly:false}
        res.cookie('admin-token',result['token'],cookieOption)
        return res.status(200).json(result);
    } else {
        return res.status(401).json(result);
    }

}

export const AuthDestroy=async(req,res)=>{
    let cookieOption={expires:new Date(Date.now()-30*24*60*60*1000), httpOnly:false}
    res.cookie('admin-token',"",cookieOption)
    res.send('Logout !');
}