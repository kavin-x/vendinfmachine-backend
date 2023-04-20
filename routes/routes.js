import pkg from "express";
import sendProduct from "../config/mqtt.js";
import senddata from "../Controller/add.js";

const Routes = pkg.Router();
Routes.get("/add",senddata);
export default Routes;
