import mongoose from 'mongoose';
import { JOB_STATUS } from '../../utils/constants.js';

const JobsSchema = new mongoose.Schema(
  {
    company: {
      type: String,
      required: [true, 'Veuillez fournir une entreprise'],
      maxlength: 50,
    },
    position: {
      type: String,
      required: [true, 'Veuillez fournir une position'],
      maxlength: 100,
    },
    status: {
      type: String,
      enum: [
        JOB_STATUS.DECLINED,
        JOB_STATUS.INTERVIEW,
        JOB_STATUS.PENDING,
      ],
      default: JOB_STATUS.PENDING,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [true, 'Veuillez fournir un utilisateur'],
    },
  },
  { timestamps: true }
);

export default mongoose.model('Job', JobsSchema);
