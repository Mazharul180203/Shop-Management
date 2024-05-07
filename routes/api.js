import express from "express";
import * as AuthController from "../controllers/AuthController.js"
import * as ItemController from "../controllers/ItemController.js"
import * as ItemStockController from "../controllers/ItemStockController.js"
import * as SearchController from "../controllers/SearchController.js"
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


//stock
router.get('/itemstock',AuthVarification,ItemStockController.itemstock)

//category-item_name
router.post('/categoryItem/:categoryId',AuthVarification,SearchController.categoryItem)
router.post('/itemPurchase/:itemId',AuthVarification,SearchController.itemPurchase)
export default router;