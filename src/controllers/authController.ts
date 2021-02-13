import { Request, Response} from "express";
import bcrypt from 'bcrypt';
import UserRepo from '../database/repository/UserRepo';
import { BadRequestError } from "../util/error";
import User from '../database/model/User';
import { RoleCode } from '../database/model/Role';


export const signup = async (req: Request, res: Response) => {
    const user = await UserRepo.findByEmail(req.body.email);
    console.log("user", user);
    if (user) throw new BadRequestError('User already registered');
    const passwordHash = await bcrypt.hash(req.body.password, 10);

    const { new_user, error } = await UserRepo.create(
      {
        name: req.body.name,
        email: req.body.email,
        password: passwordHash,
      } as User,
      RoleCode.CUSTOMER,
    );
    if (error) {
        return res.status(200).json({error});
    }
    return new_user;
    // console.log("created user",createdUser);
    // console.log("hashed password",passwordHash);
    // console.log("in authcontroller",req.body);
    // return res.send('over');
}