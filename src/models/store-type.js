import mongoose from 'mongoose';

const storeTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
    required: true
  }
});

export default mongoose.model('StoreType', storeTypeSchema);
