import express from "express";
import * as AuthController from "../controllers/AuthController.js"
import * as ItemController from "../controllers/ItemController.js"
import * as ItemStockController from "../controllers/ItemStockController.js"
import * as SearchController from "../controllers/SearchController.js"
import * as SaleItemController from "../controllers/SaleItemController.js"
import * as LedgerController from '../controllers/LedgerController.js'
import AuthVarification from "../middlewares/AuthVarification.js";



const router = express.Router();

//Authentication
router.post('/Registration', AuthController.Registration);
router.post('/VerifyLogin',AuthController.VerifyLogin);
router.post('/AuthDestroy',AuthController.AuthDestroy);


//item
router.post('/category',AuthVarification,ItemController.category)
router.post('/brands',AuthVarification,ItemController.brands)
router.post('/items',AuthVarification,ItemController.items)
router.post('/units',AuthVarification,ItemController.units)
router.post('/supplier',AuthVarification,ItemController.supplier)
router.post('/purchaseitems',AuthVarification,ItemController.purchaseitems)
router.post('/customertype',AuthVarification,ItemController.customertype)
router.post('/customer',AuthVarification,ItemController.customer)
router.post('/purchasesuppliertracker',AuthVarification,ItemController.purchasesuppliertracker)
router.get('/dropdown/:type',AuthVarification,ItemController.dropdown)

//stock
router.get('/itemstock',AuthVarification,ItemStockController.itemstock)

//category-item_name
router.post('/categoryItem/:categoryId',AuthVarification,SearchController.categoryItem)
router.post('/itemDetail/:itemId',AuthVarification,SearchController.itemDetail)

//item-sale
router.post('/saleItem',AuthVarification,SaleItemController.saleItem)
router.post('/salesCustomerTracker',AuthVarification,SaleItemController.salesCustomerTracker)
router.post('/customerPayment',AuthVarification,SaleItemController.customerPayment)
//ledger
router.post('/transaction',AuthVarification,LedgerController.transaction)

export default router;