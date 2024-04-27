import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const UpdateService = async (req) => {
    try {
        const email = req.headers['email'];
        const reqBody = req.body;
        const updatedUser = await prisma.user.update({
            where: {
                email: email
            },
            data: reqBody
        });
        return { status: "success", data: updatedUser };
    } catch (e) {
        return { status: "fail", message: e.message };
    }
}

export { UpdateService }
