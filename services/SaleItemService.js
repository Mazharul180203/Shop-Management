import {PrismaClient} from "@prisma/client";
const prisma = new PrismaClient();

const SaleItemService = async (req, res) => {
    const { selectedProducts: items } = req.body;
    const prisma = new PrismaClient();

    try {
        const results = await prisma.$transaction(async prisma => {
            const responses = [];
            for (const item of items) {
                const { itemId, customerId, sale_qty, price_per_unit, discount, transport_cost } = item;
                const saleQuantity = parseFloat(sale_qty);
                const pricePerUnit = parseFloat(price_per_unit);
                const subtotalAmount = ((saleQuantity * pricePerUnit).toFixed(2)) - parseFloat(discount) + parseFloat(transport_cost);

                const sellItem = await prisma.sales.create({
                    data: {
                        itemId,
                        customerId,
                        sale_qty: saleQuantity,
                        discount: parseFloat(discount),
                        transport_cost: parseFloat(transport_cost),
                        sales_price: parseFloat(subtotalAmount)
                    }
                });

                const purchaseUpdate = await prisma.purchaseitems.updateMany({
                    where: { itemId },
                    data: {
                        purchase_update_qty: { decrement: saleQuantity }
                    }
                });

                responses.push({ sellItem, purchaseUpdate });
            }
            return responses;
        });

        return { status: "success", data: results };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
};


const SalesCustomerTrackerService = async (req, res) => {
    const prisma = new PrismaClient();
    try {
        const { customerId, totalCost, paid, curr_balance, payment_type,voucher_no } = req.body;
        console.log("CustomerTracker: ", req.body);

        const result = await prisma.$transaction(async (prisma) => {
            const existingCustomer = await prisma.salescustomertracker.findMany({
                where: { customerId }
            });

            await prisma.customerledger.create({
                data: {
                    customerId,
                    payment_type,
                    credit: totalCost,
                    debit: paid,
                    balance: curr_balance,
                    voucher_no
                }
            });
            let customerTrackerResult;
            if (existingCustomer.length === 0) {
                customerTrackerResult = await prisma.salescustomertracker.create({
                    data: {
                        customerId,
                        curr_balance,
                        payment_type
                    }
                });
            } else {
                await prisma.salescustomertracker.updateMany({
                    where: { customerId },
                    data: {
                        curr_balance,
                        payment_type
                    }
                });
                customerTrackerResult = existingCustomer;
            }
            return customerTrackerResult;
        });
        return { status: "success", data: result };
    } catch (e) {
        console.error(e);
        return { status: "fail", data: e.message };
    }
};

const CustomerPaymentService = async (req, res) => {
    try {
        const { customertypeId, customerId, balance, transaction_type, collection_method, paid, remission, curr_balance } = req.body;
        const result = await prisma.$transaction(async prisma => {
            try {
                const ledgerEntry = await prisma.customerledger.create({
                    data: {
                        customerId,
                        payment_type: collection_method,
                        credit: balance,
                        debit: paid,
                        balance: curr_balance
                    }
                });
                const trackerUpdate = await prisma.salescustomertracker.updateMany({
                    where: { customerId },
                    data: { curr_balance }
                });
                const paymentRecord = await prisma.customerpayment.create({
                    data: {
                        customertypeId, customerId, balance, transaction_type, collection_method, paid, remission, curr_balance
                    }
                });

                return { ledgerEntry, trackerUpdate, paymentRecord };
            } catch (error) {
                console.error('Transaction error:', error);
            }
        });

        return res.json({ status: "success", data: result });
    } catch (error) {
        console.error('Service error:', error);
        return res.status(500).json({ status: "fail", data: error.message });
    }
};


const GetSalesCustomerTrackerService = async (req,res) =>{
    const customerId = parseInt(req.params.customerId);
    try{
        const existingCustomerInfo = await prisma.salescustomertracker.findMany({
            where:{customerId},
            select:{
                curr_balance: true,
                payment_type: true
            }
        });
        return { status:"success", data: existingCustomerInfo }
    }catch (e){
        console.error(e);
        return { status: "fail", data: e.message };
    }
}

export {SaleItemService,SalesCustomerTrackerService,CustomerPaymentService,GetSalesCustomerTrackerService}