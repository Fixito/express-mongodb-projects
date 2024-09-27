import mongoose from 'mongoose';

const connectDB = () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once('open', () => console.log('Database connected'));

  dbConnection.on('error', (err) =>
    console.error(`Connection error: ${err}`)
  );
};

export default connectDB;
