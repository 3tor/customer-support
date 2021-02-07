import mongoose from "mongoose";
import { db } from '../config';

// const DATABASE_URL = `mongodb://${db.user}:${encodeURIComponent(db.password)}@${db.host}:${db.port}/${db.name}`;
const DATABASE_URL = `mongodb+srv://admin:${db.password}@cluster0.drcmi.mongodb.net/${db.name}?retryWrites=true&w=majority`;

const connectionParams = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
}

mongoose
  .connect(DATABASE_URL, connectionParams)
  .then(() => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.log('MongoDB connection error. Please make sure MongoDB is runnin. ' + err);
    // process.exit();
  });