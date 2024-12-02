import gameService from '../services/GameService.js';
import {successResponse, errorResponse} from '../utils/responseUtils.js'

class GameController {

    addGame(req, res) {
      const result = gameService.addGame(req.body);
      if (result.errorMsg) {
        errorResponse(res, { message: 'el juego no se pudo agregar' }, 400);
      } else {
          successResponse(res, { message: 'juego agrado', result });
      }
    }
  
    registerSale(req, res) {
      const result = gameService.registerSale(req.body);
      if (result.errorMsg) {
        errorResponse(res, { message: result.errorMsg }, 400);
      } else {
        successResponse(res, { message: 'la venta pudo ser registrada', result });
      }
    }
  
    getInventory(req, res) {
      const inventory = gameService.getInventory();
      successResponse(res, { inventory });
    }
  
    getStatistics(req, res) {
      const stats = gameService.getStatistics();
      successResponse(res, { stats });
    }
  }
  
export default new GameController();
// export const gameController = new GameController();