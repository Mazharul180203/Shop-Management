import {PrismaClient} from "@prisma/client";
import {EncodeToken} from "../utility/TokenHelper.js";
const RegistrationService = async (req) =>{
    try {
        let prisma = new PrismaClient();
        const { email, password, role } = req.body;
        const existingUser= await prisma.user.findUnique({
            where:{
                email:email
            }
        });
        if (existingUser) {
            return { status: "fail", data: "User already exists with this email !" };
        }
        const newUser = await prisma.user.create({
            data:{
                email:email,
                password:password,
                role:role
            }
        });
        return { status: "success", data: newUser};

    }catch (e) {
        return { status: "fail", data: e.message };
    }
}

const VerifyLoginService = async (req) => {
    try {
        const { email, password } = req.body;
        console.log("fsd",req.body)
        let prisma = new PrismaClient();
        const user = await prisma.user.findUnique({
            where: {
                email: email
            }
        });
        if (user && user.password === password) {

            console.log("userId :",user.id);
            const token = await EncodeToken(email,user.id);
            console.log(token);
            return { status: "success"};
        } else {
            return { status: "fail", message: "Invalid email or password" };
        }
    } catch (error) {
        return { status: "fail", message: error.message };
    }
}

export {RegistrationService,VerifyLoginService}