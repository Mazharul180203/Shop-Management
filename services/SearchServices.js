import { PrismaClient } from '@prisma/client';

const CategoryItemService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { categoryId } = req.params
        console.log("catedf :", categoryId);
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
    try {
        const prisma = new PrismaClient();
        const { itemId } = req.params;
        const itemPurchase = await prisma.items.findUnique({
            where: {
                id: parseInt(itemId),
            },
            select: {
                items_name: true,
            },
        });
        return { status: "success", data: itemPurchase };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
};
export { CategoryItemService, ItemDetailService }
