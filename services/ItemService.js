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
        const { units_name, units_label, relation} = req.body;
        const newUnit = await prisma.units.create({
            data: {
                units_name,
                units_label,
                relation  /// calculate the value from the frontend
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
    const { items } = req.body;
    try {
        const prisma = new PrismaClient();
        const results = await prisma.$transaction(async prisma => {
            const responses = [];
            for (const item of items) {
                const { itemId, supplierId, purchase_qty, price_per_unit, discount, transport_cost, tax_Id } = item;
                const purchaseQuantity = parseFloat(purchase_qty);
                const pricePerUnit = parseFloat(price_per_unit);
                const subtotalAmount = ((purchaseQuantity * pricePerUnit).toFixed(2)) - discount + transport_cost;

                const existingPurchases = await prisma.purchaseitems.findMany({
                    where: { itemId },
                    select: {
                        purchase_total: true,
                        subtotal_amount: true
                    }
                });

                const existingQuantity = existingPurchases.reduce((acc, cur) => acc + parseFloat(cur.purchase_total), 0);
                const existingSubtotal = existingPurchases.reduce((acc, cur) => acc + parseFloat(cur.subtotal_amount), 0);

                let transactionResponse,newPurchaseItem;
                if (existingPurchases.length === 0) {
                    newPurchaseItem = await prisma.purchaseitems.create({
                        data: {
                            itemId,
                            supplierId,
                            purchase_qty: purchaseQuantity,
                            price_per_unit: pricePerUnit,
                            subtotal_amount: subtotalAmount,
                            purchase_total: purchaseQuantity,
                            purchase_update_qty: purchaseQuantity,
                            tax_Id,
                            price_avg: pricePerUnit
                        }
                    });
                    transactionResponse = await prisma.purchase.create({
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
                } else {
                    const newTotalQuantity = existingQuantity + purchaseQuantity;
                    const newTotalSubtotal = existingSubtotal + subtotalAmount;
                    const newPriceAvg = newTotalSubtotal / newTotalQuantity;

                    newPurchaseItem = await prisma.purchaseitems.updateMany({
                        where: { itemId },
                        data: {
                            supplierId,
                            purchase_qty: purchaseQuantity,
                            price_per_unit: pricePerUnit,
                            subtotal_amount: { increment: subtotalAmount },
                            purchase_total: { increment: purchaseQuantity },
                            purchase_update_qty: { increment: purchaseQuantity },
                            price_avg: newPriceAvg,
                            tax_Id
                        }
                    });
                    transactionResponse = await prisma.purchase.create({
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
                }
                responses.push(newPurchaseItem);
            }
            return responses;
        });

        return { status: "success", data: results };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
};


//this api must call when the purchaseitems table is call or modified because it is related to total debit or credit
//according to their paid money
const PurchaseSupplierTrackerService = async (req) => {
    const { supplierId, totalCost, paid, curr_balance, payment_type } = req.body; //totalCost = GrandTotal
    try {
        const prisma = new PrismaClient();
        const result = await prisma.$transaction(async prisma => {
            const existingSupplier = await prisma.purchasesuppliertrack.findMany({
                where: { supplierId }
            });

            await prisma.supplierledger.create({
                data: {
                    supplierId,
                    payment_type,
                    credit: totalCost,
                    debit: paid,
                    balance: curr_balance
                }
            });

            if (existingSupplier.length === 0) {
                return await prisma.purchasesuppliertrack.create({
                    data: {
                        supplierId,
                        curr_balance: curr_balance,
                        payment_type: payment_type,
                    }
                });
            } else {
                await prisma.purchasesuppliertrack.updateMany({
                    where: { supplierId },
                    data: {
                        curr_balance: curr_balance
                    }
                });
                return existingSupplier;  // If updating, returning the existing data might be more appropriate
            }
        });

        return { status: "success", data: result };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}


const GetPurchaseSupplierTrackerService = async (req) => {
    const supplierId = parseInt(req.params.supplierId);
    console.log("supplierId :",supplierId)
    try{
        const prisma = new PrismaClient();
        const existingSupplierInfo = await prisma.purchasesuppliertrack.findMany({
            where: { supplierId },
            select:{
                curr_balance:true,
                payment_type:true,
            }
        });
        return {status:"success", data: existingSupplierInfo}
    }catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
}



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

const DropdownService = async (req) => {
    const prisma = new PrismaClient();
    const {type} = req.params;
    try {
        let data, typeName;

        if (type === "category") {
            data = await prisma.category.findMany({
                select: {
                    id: true,
                    category_name: true,
                }
            });
            typeName = 'category';
        } else if (type === "brands") {
            data = await prisma.brands.findMany({
                select: {
                    id: true,
                    brands_name: true,
                }
            });
            typeName = 'brands';
        } else if (type === "unit") {
            data = await prisma.units.findMany({
                select: {
                    id: true,
                    units_name: true,
                    units_label: true,
                    relation: true,
                }
            });
            typeName = 'unit';
        } else if(type === "supplier"){
            data = await prisma.supplier.findMany({
                select: {
                    id: true,
                   supplier_name:true
                }
            });
            typeName = 'supplier';
        }
        else {
            return { status: "fail", data: "Invalid type parameter" };
        }

        return { status: "success", type: typeName, data: data };

    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }

};


export {CategoryService,BrandService,ItemService,UnitService,PurchaseItemService,SupplierService,CustomertypeService,CustomerService,PurchaseSupplierTrackerService,DropdownService,GetPurchaseSupplierTrackerService}