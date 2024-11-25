import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';

let mongod;

export default async function connectDB() {
  let uri;

  if (process.env.NODE_ENV === 'test') {
    mongod = await MongoMemoryServer.create();
    uri = mongod.getUri();
  } else {
    uri = process.env.MONGODB_URI_TEST || process.env.MONGODB_URI;
  }

  try {
    mongoose.connect(uri);
  } catch (err) {
    console.log(err.message);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;

  dbConnection.once('open', () => {
    console.log(`Database connected using ${process.env.NODE_ENV} environment`);
  });

  dbConnection.on('error', (err) => {
    console.error(`Connection error: ${err}`);
  });
}
