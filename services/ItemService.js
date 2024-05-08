import {PrismaClient} from "@prisma/client";

const CategoryService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { category_name } = req.body;
        const newCategory = await prisma.category.create({
            data: {
                category_name: category_name
            }
        });
        return { status: "success", data: newCategory };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}

const BrandService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { brands_name } = req.body;
        const newBrand = await prisma.brands.create({
            data: {
                brands_name: brands_name
            }
        });
        return { status: "success", data: newBrand };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}


const UnitService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { units_name } = req.body;
        const newUnit = await prisma.units.create({
            data: {
                units_name: units_name
            }
        });
        return { status: "success", data: newUnit };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}
const ItemService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { items_name, categoryId, description,brandsId,unitsId} = req.body;
        const newItem = await prisma.items.create({
            data: {
                items_name: items_name,
                categoryId: categoryId,
                description: description,
                brandsId: brandsId,
                unitsId: unitsId
            }
        });
        return { status: "success", data: newItem };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}

const PurchaseItemService = async (req) => {
    const prisma = new PrismaClient();
    try {
        const {itemId, supplierId, purchase_qty, price_per_unit, tax_Id} = req.body;
        const purchaseQuantity = parseFloat(purchase_qty);
        const pricePerUnit = parseFloat(price_per_unit);
        const subtotalAmount = purchaseQuantity * pricePerUnit;

        const existingPurchase = await prisma.purchaseitems.count({
            where: {
                itemId: itemId,
            }
        });

        if (existingPurchase === 0) {
            const purchaseItem = await prisma.purchaseitems.create({
                data: {
                    itemId,
                    supplierId,
                    purchase_qty: purchaseQuantity,
                    price_per_unit: pricePerUnit,
                    subtotal_amount: subtotalAmount,
                    purchase_total: purchaseQuantity,
                    tax_Id
                }
            });
            return { status: "success", data: purchaseItem };
        } else {
            const purchaseItem = await prisma.purchaseitems.updateMany({
                where: { itemId },
                data: {
                    supplierId,
                    purchase_qty: purchaseQuantity,
                    price_per_unit: pricePerUnit,
                    subtotal_amount: { increment: subtotalAmount },
                    purchase_total: { increment: purchaseQuantity },
                    tax_Id
                }
            });
            return { status: "success", data: purchaseItem };
        }
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
};


const SupplierService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { supplier_name, contact_person, mobile_number, address} = req.body;
        const SupplierItem = await prisma.supplier.create({
            data: {
                supplier_name: supplier_name,
                contact_person: contact_person,
                mobile_number: mobile_number,
                address: address
            }
        });
        return { status: "success", data: SupplierItem };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}

const CustomertypeService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { type_name} = req.body;
        const Customertype = await prisma.customertype.create({
            data: {
                type_name: type_name
            }
        });
        return { status: "success", data: Customertype };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}
const CustomerService = async (req) => {
    try {
        const prisma = new PrismaClient();
        const { customer_name,customertypeId } = req.body;
        const Customer = await prisma.customer.create({
            data: {
                customer_name: customer_name,
                customertypeId: customertypeId
            }
        });
        return { status: "success", data: Customer };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}



export {CategoryService,BrandService,ItemService,UnitService,PurchaseItemService,SupplierService,CustomertypeService,CustomerService}