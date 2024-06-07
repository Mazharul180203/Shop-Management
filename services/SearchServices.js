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

const ItemDetailService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { itemId } = req.params;

        const result = await prisma.$transaction(async (prisma)=>{
            const itemPurchase = await prisma.purchaseitems.findMany({
                where: {
                    itemId: parseInt(itemId),
                },
                select: {
                    itemId:true,
                    purchase_qty: true,
                    price_per_unit:true,
                    tax_Id: true,
                    purchase_total:true,
                    subtotal_amount:true,
                    purchaseitems_items:{
                        select:{
                            items_name: true,
                        }
                    }
                }
            });
            const related_unit = await prisma.items.findMany({
                where:{
                   id:parseInt(itemId)
                },
                select:{
                    items_units:{
                        select:{
                            units_name:true,
                            relation:true
                        }
                    }
                }
            })
            return {itemPurchase,related_unit}
        })

        return { status: "success", data: result };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}
export { CategoryItemService, ItemDetailService }
