import { Request, Response } from "express";


class FilesController{
  main(req: Request, res: Response){
    const url = req.firebaseUrl;

    res.send({url})
  }
}

export default new FilesController();