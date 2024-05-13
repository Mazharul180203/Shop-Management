import {PrismaClient} from "@prisma/client";

const SaleItemService = async (req, res) => {
    const prisma = new PrismaClient();
    try {
        const { items } = req.body; // Assuming the input is an array of items
        console.log("Received items:", items);

        // if (!Array.isArray(items)) {
        //     throw new TypeError('items is not an array');
        // }

        for (const item of items) {
            const { itemId, total_qty, sales_qty, sales_price, dis_per, dis, total } = item;

            // Create a sales record for each item
            await prisma.sales.create({
                data: { itemId, total_qty, sales_qty, sales_price, dis_per, dis, total }
            });

            // Find the purchase item related to the current itemId
            const purchaseItem = await prisma.purchaseitems.findFirst({
                where: {
                    itemId: itemId,
                },
                select: {
                    id: true, // Assuming there is an id field to identify each purchase item
                    purchase_total: true,
                }
            });

            // Check if purchaseItem is found
            if (purchaseItem) {
                // Calculate the new purchase total
                const modifiedTotalQty = purchaseItem.purchase_total - sales_qty;
                console.log("purchase_total:", purchaseItem.purchase_total);
                console.log("modifiedTotalQty:", modifiedTotalQty);

                // Update the purchase_total in the database
                await prisma.purchaseitems.update({
                    where: { id: purchaseItem.id }, // Use the unique id field
                    data: { purchase_total: modifiedTotalQty }
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