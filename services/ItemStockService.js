import { PrismaClient } from "@prisma/client";

const ItemStockService = async () => {
    const prisma = new PrismaClient();

    try {
        const ItemStock = await prisma.items.findMany({
            include: {
                items_category: true,
                items_brands: true,
            },
        });

        const formattedData = ItemStock.map(item => ({
            id: item.id,
            items_name: item.items_name,
            description: item.description,
            category: item.items_category,
            brands: item.items_brands
        }));

        return { status: "success", data: formattedData };
    } catch (e) {
        return { status: "fail", message: e.message };
    }
};



export { ItemStockService }
