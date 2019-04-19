import {Router} from 'express';
import  gamesControllers  from '../controllers/gamesControllers'


class GamesRoutes{
    public router: Router = Router();

    constructor(){
        this.config();
    }
    config():void{
      this.router.get('/', gamesControllers.getList);
      this.router.get('/:id', gamesControllers.getOne);
      this.router.post('/', gamesControllers.create);
      this.router.put('/:id', gamesControllers.update);
      this.router.delete('/:id', gamesControllers.delete);  
    }
}

const gamesRouter =  new GamesRoutes();
export default gamesRouter.router;