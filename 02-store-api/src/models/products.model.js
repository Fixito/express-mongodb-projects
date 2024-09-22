import mongoose from 'mongoose';

const productsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'le nom du produit doit être indiqué'],
  },
  price: {
    type: Number,
    required: [true, 'le prix du produit doit être indiqué'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    enum: {
      values: ['ikea', 'liddy', 'caressa', 'marcos'],
      message: "{VALUE} n'est pas supporté",
    },
  },
});

export default mongoose.model('Products', productsSchema);
