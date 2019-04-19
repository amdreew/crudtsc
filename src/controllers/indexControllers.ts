import {Request, Response} from 'express'

class IndexController{
    public index(req:Request, res:Response){
        res.send('RUTA PRINCIPAL');
    }
}

export const indexControllers = new IndexController();