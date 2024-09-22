import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'The name is required'],
    trim: true,
    maxlength: [20, 'The name cannot exceed 20 characters'],
  },
  completed: { type: Boolean, default: false },
});

export default mongoose.model('Tasks', taskSchema);
