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
        res.cookie('token',result['token'],cookieOption, { httpOnly: true, sameSite: 'strict'});
        return res.status(200).json(result);
    }else if(result['status'] === "invalid"){
        return res.status(200).json(result);
    }
    else {
        return res.status(401).json(result);
    }

}

export const AuthDestroy=async(req,res)=>{
    try {
        let cookieOptions = {
            expires: new Date(Date.now()-2*24*60*60*1000), // Set the expiration date to a past date
            httpOnly: false
        };
        console.log("fsdfasdf");
        res.cookie('token', '', cookieOptions,{ httpOnly: true, sameSite: 'strict'});
        return res.status(200).json({ status: "success" });
    } catch (error) {
        return res.json({ status: "fail", error: error.message || 'Internal Server Error' });
    }
}