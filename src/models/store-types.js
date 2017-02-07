import mongoose from 'mongoose';

const storeTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    index: true,
  }
});

storeTypeSchema.path('name').required(true, 'O campo Nome é obrigatório.');

export default mongoose.model('StoreType', storeTypeSchema);
