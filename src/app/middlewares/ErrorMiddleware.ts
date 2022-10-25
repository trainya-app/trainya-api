import { NextFunction, Request, Response } from "express";

export default function ErrorMiddleware(error: any, req: Request, res: Response, next: NextFunction){ // We need to take these 4 params for Express get that this is a handle error
    console.log('Error Handler', error);
    res.sendStatus(500);
};