import { PrismaClient } from '@prisma/client';

const CategoryItemService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { categoryId } = req.params;
        const categoryItem = await prisma.items.findMany({
            where: {
                categoryId: parseInt(categoryId),
            },
            select: {
                id:true,
                items_name: true,
            }
        });
        return { status: "success", data: categoryItem };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}

const ItemPurchaseService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { itemId } = req.params;
        const itemPurchase = await prisma.purchaseitems.findMany({
            where: {
                itemId: parseInt(itemId),
            },
            select: {
                purchase_qty: true,
                price_per_unit:true,
                tax_Id: true
            }
        });
        return { status: "success", data: itemPurchase };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}
export { CategoryItemService,ItemPurchaseService }
