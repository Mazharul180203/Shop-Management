import {PrismaClient} from "@prisma/client";

const SaleItemService = async (req, res) => {
    const prisma = new PrismaClient();
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
export {SaleItemService}