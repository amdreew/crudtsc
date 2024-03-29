import {Request, Response} from 'express'
import pool from '../database'
import { promises } from 'fs';

class GamesController{
    public async getList (req:Request, res:Response): Promise<void>{
        const games = await pool.query('SELECT * FROM games');
        res.json(games);
    }
    public async getOne (req: Request,  res: Response): Promise<any>{
        const { id } = req.params;
        const game = await pool.query('SELECT * FROM games WHERE id = ?', [id]);
        if(game.length > 0){
            return res.json(game[0]);
        }
        res.status(404).json({text: "the game doesn't exists"});
    }
    public async create (req: Request, res: Response): Promise<void>{
        await pool.query('INSERT INTO games SET ?', [req.body]);
        res.json({message: 'juego Guardado'});
    }
    public async update (req: Request,  res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('UPDATE games SET ? WHERE id = ?', [req.body, id]);
        res.json({message: 'juego '+ [id] + ' ha sido actualizado'});
    }
    public async delete (req: Request, res: Response): Promise<void>{
        const { id } = req.params;
        await pool.query('DELETE FROM games WHERE id = ?', [id]);
        res.json({message: 'juego '+ [id] + ' ha sido eliminado'});
    }
}

const gamesControllers = new GamesController();
export default gamesControllers;