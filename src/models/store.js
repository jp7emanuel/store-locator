import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  address: String,
  telephone: String,
  image: String,
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StoreType'
  },
  description: String,
  location: {
    lat: Number,
    lng: Number
  }
});

export default mongoose.model('Store', storeSchema);
