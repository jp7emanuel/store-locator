import mongoose from 'mongoose';

const storeSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true
  },
  country: String,
  state:   String,
  city:   String,
  telephone: String,
  image: String,
  type: String,
  description: String,
  time: {
    open: Date,
    close: Date
  }
  location: {
    lat: Number,
    lng: Number
  }
});

export default mongoose.model('Store', storeSchema);
