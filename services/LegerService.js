import {PrismaClient} from "@prisma/client";

const TransactionService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { supplierId, transaction_type, transaction_method, payment} = req.body;
        const transactionHistory = await prisma.transaction.create({
            data:{
                supplierId,
                transaction_type,
                transaction_method,
                payment,
            }
        })
        return { status: "success", data: transactionHistory };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}

export {TransactionService}