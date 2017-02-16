import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  address: {
    type: String,
    required: true
  },
  place: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  type: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'StoreType',
    required: true
  },
  description: {
    type: String,
    required: true
  },
  location: {
    lat: {
      type: Number,
      required: true
    },
    lng: {
      type: Number,
      required: true
    }
  }
});

export default mongoose.model('Store', storeSchema);
