import mongoose from 'mongoose';

const vendorSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true
  },
  bankAccountNo: {
    type: String,
    required: true
  },
  bankName: {
    type: String,
    required: true
  },
  addressLine1: {
    type: String
  },
  addressLine2: {
    type: String,
    required: true
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  zipCode: {
    type: String
  }
});

const Vendor = mongoose.model('Vendor', vendorSchema);

export default Vendor;
