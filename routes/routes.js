import pkg from "express";
import sendProduct from "../Controller/sendProduct.js";

const Routes = pkg.Router();
Routes.get("/send",sendProduct);
export default Routes;
