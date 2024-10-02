import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Le nom est requies'],
    trim: true,
    maxlength: [20, 'TLe nom ne peut pas dépasser 20 caractères'],
  },
  completed: { type: Boolean, default: false },
});

export default mongoose.model('Tasks', taskSchema);
