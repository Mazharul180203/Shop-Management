import {PrismaClient} from "@prisma/client";

const TransactionService = async (req) => {
    // for the transaction supplier must be purchase something otherwise they are not
    // included into transaction
    try {
        const prisma = new PrismaClient();
        const { supplierId, balance, transaction_type, transaction_method, payment,curr_balance} = req.body;

        const result = await prisma.$transaction(async (prisma)=>{
            await prisma.supplierledger.create({
                data:{
                    supplierId,
                    payment_type:transaction_method,
                    credit:balance,
                    debit:payment,
                    balance:curr_balance
                }
            })

            await prisma.purchasesuppliertrack.updateMany({
                where:{supplierId},
                data:{
                    curr_balance:curr_balance,
                    payment_type:transaction_method,
                }
            })
            const transactionHistory = await prisma.transaction.create({
                data:{
                    supplierId,
                    transaction_type,
                    transaction_method,
                    balance,
                    curr_balance,
                    payment
                }
            })

            return transactionHistory;
        })

        return { status: "success", data: result };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}

export {TransactionService}