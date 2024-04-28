import express from "express";
import * as AuthController from "../controllers/AuthController.js"
import * as UpdateController from "../controllers/UpdateController.js"
import * as ItemController from "../controllers/ItemController.js"
import AuthVarification from "../middlewares/AuthVarification.js";
import {customer, customertype, supplier} from "../controllers/ItemController.js";

const router = express.Router();

//Authentication
router.post('/Registration', AuthController.Registration);
router.post('/VerifyLogin',AuthController.VerifyLogin);
router.post('/AuthDestroy',AuthController.AuthDestroy);



router.post('/Update',AuthVarification,UpdateController.Update)


//item
router.post('/category',AuthVarification,ItemController.category)
router.post('/brands',AuthVarification,ItemController.brands)
router.post('/items',AuthVarification,ItemController.items)
router.post('/units',AuthVarification,ItemController.units)
router.post('/supplier',AuthVarification,ItemController.supplier)
router.post('/purchaseitems',AuthVarification,ItemController.purchaseitems)
router.post('/customertype',AuthVarification,ItemController.customertype)
router.post('/customer',AuthVarification,ItemController.customer)


export default router;