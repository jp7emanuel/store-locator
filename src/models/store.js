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

storeSchema.path('name').required(true, 'O campo Nome é obrigatório.');
storeSchema.path('address').required(true, 'O campo Endereço é obrigatório.');
storeSchema.path('telephone').required(true, 'O Telefone nome é obrigatório.');
storeSchema.path('type').required(true, 'O campo Tipo é obrigatório.');
storeSchema.path('description').required(true, 'O campo Descrição é obrigatório.');

export default mongoose.model('Store', storeSchema);
