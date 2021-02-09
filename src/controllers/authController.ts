import { Request, Response} from "express";

export const signup = async (req: Request, res: Response) => {
    console.log("in authcontroller",req.body);
    return res.send('over');
}