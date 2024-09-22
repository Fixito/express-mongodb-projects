import jsonProducts from './products.json' assert { type: 'json' };
import connectDB from './src/config/db.config.js';
import Products from './src/models/products.model.js';

const start = async () => {
  connectDB(process.env.MONGO_URI);

  try {
    await Products.deleteMany();
    await Products.create(jsonProducts);
    console.log('Success! Added products to the database.');
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
