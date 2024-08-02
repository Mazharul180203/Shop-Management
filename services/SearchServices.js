import { PrismaClient } from '@prisma/client';

const CategoryItemService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { categoryId } = req.params
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

const ItemDetailService = async (req) => {
    const prisma = new PrismaClient();
    try {
        const { itemId } = req.params;
        const itemIdInt = parseInt(itemId);  // Ensure itemId is an integer

        if (isNaN(itemIdInt)) {
            throw new Error("Invalid itemId");
        }

        const result = await prisma.$transaction(async (prisma) => {
            const itemPurchase = await prisma.items.findUnique({
                where: {
                    id: itemIdInt,
                },
                select: {
                    id: true,
                    items_name: true,
                },
            });

            if (!itemPurchase) {
                throw new Error("Item not found");
            }

            const itemQuantity = await prisma.purchaseitems.findMany({
                where: { itemId: itemIdInt },
                select: {
                    purchase_update_qty: true
                }
            });

            return { itemPurchase, itemQuantity };
        });

        return { status: "success", data: result };
    } catch (e) {
        console.error(e);
        return {status: "fail", data: e.message};
    }
};


export { CategoryItemService, ItemDetailService }
