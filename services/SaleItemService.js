import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const SaleItemService = async (req,res) => {
    try {
        const { items } = req.body; // Assuming the input is an array of items
        console.log("Received items:", items);

        for (const item of items) {
            const { itemId, total_qty, sales_qty, sales_price, dis_per, dis, total } = item;

            await prisma.sales.create({
                data: { itemId, total_qty, sales_qty, sales_price, dis_per, dis, total }
            });
            const purchaseItem = await prisma.purchaseitems.findFirst({
                where: {
                    itemId: itemId,
                },
                select: {
                    id: true,
                    purchase_update_qty: true,
                }
            });

            if (purchaseItem) {
                const modifiedTotalQty = purchaseItem.purchase_update_qty - sales_qty;
                console.log("modifiedTotalQty:", modifiedTotalQty);
                await prisma.purchaseitems.update({
                    where: { id: purchaseItem.id },
                    data: { purchase_update_qty: modifiedTotalQty }
                });
            } else {
                console.log(`No purchase item found for itemId: ${itemId}`);
            }
        }

        return { status: "success", data: "Purchase totals updated successfully" };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
};

const SalesCustomerTrackerService = async (req,res) =>{
    try{
        const {customerId, totalCost, paid, curr_balance, payment_type} = req.body;
        const result = await prisma.$transaction(async prisma => {
            const existingCustomer = await prisma.salescustomertracker.findMany({
                where:{customerId}
            });

            await prisma.customerledger.create({
                data:{
                    customerId,
                    payment_type,
                    credit: totalCost,
                    debit:paid,
                    balance:curr_balance
                }
            });

            if(!existingCustomer){
                return await prisma.salescustomertracker.create({
                    customerId,
                    curr_balance,
                    payment_type
                });
            } else{
                await prisma.salescustomertracker.updateMany({
                    where:{customerId},
                    data: {curr_balance}
                });
                return existingCustomer
            }
        })
        return { status: "success", data: result };

    }catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}
export {SaleItemService,SalesCustomerTrackerService}