import {PrismaClient} from "@prisma/client";

const SaleItemService = async (req) => {
    try {
        const prisma = new PrismaClient()
        const {itemsId,total_qty,sales_qty,sales_price,dis_per,dis,total} = req.body;
        const saleItem = await prisma.sales.create({
            data:{itemsId,total_qty, sales_qty, sales_price, dis_per, dis, total}
        })
        const purchaseItemUpdate = prisma.purchaseitems.updateMany({

        })

        return { status: "success", data: saleItem };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}

export {SaleItemService}