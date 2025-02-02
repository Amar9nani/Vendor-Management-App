import Vendor from "../Model/vendorModel.js";

export const addVendor = async (req, res) => {
  try {
    const vendorData = req.body; 
    const newVendor = new Vendor(vendorData);
    console.log(vendorData)
    const savedVendor = await newVendor.save();
    res.status(200).json(savedVendor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getAllVendor = async (req, res) => {
  try {
    const vendors = await Vendor.find();
    console.log(vendors)
    res.json(vendors);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getVendorById = async (req, res) => {
  try {
    const vendor = await Vendor.findById(req.params.id);
    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }
    res.json(vendor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateVendorData = async (req, res) => {
  try {
    const updatedVendor = await Vendor.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedVendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }
    res.json(updatedVendor);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteVendor = async (req, res) => {
  try {
    const deletedVendor = await Vendor.findByIdAndDelete(req.params.id);
    if (!deletedVendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }
    res.json(deletedVendor);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
