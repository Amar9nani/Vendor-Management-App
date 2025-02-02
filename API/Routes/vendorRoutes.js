import express from "express";
import { addVendor, getAllVendor, getVendorById, updateVendorData, deleteVendor } from "../Controller/vendorController.js";

const vendorRouter = express.Router();

vendorRouter.post("/add", addVendor);
vendorRouter.get("/get", getAllVendor);
vendorRouter.get("/get/:id", getVendorById);
vendorRouter.patch("/update/:id", updateVendorData);
vendorRouter.delete("/delete/:id", deleteVendor);

export default vendorRouter;
