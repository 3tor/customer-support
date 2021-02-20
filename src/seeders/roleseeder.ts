import { RoleCode } from "../database/model/Role";

const roleData = [
    {
        code: RoleCode.CUSTOMER,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        code: RoleCode.CUSTOMER,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
    }
];
console.log("role data",roleData);
// export default () => RoleModel.collection.insertMany(roleData);
// console.log("response",res);

//import role model
//create sample data
//insert data