import mongoose from "mongoose";
import { db } from '../config';
// import { RoleCode,RoleModel } from "../database/model/Role";

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

// const roleData = [
//     {
//         code: RoleCode.CUSTOMER,
//         status: true,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     },
//     {
//         code: RoleCode.AGENT,
//         status: true,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     },
//     {
//         code: RoleCode.ADMIN,
//         status: true,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     }
// ];
// RoleModel.collection.insertMany(roleData);