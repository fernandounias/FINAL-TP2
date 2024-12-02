import gameRepository from '../repositories/GameRepository.js';
import { validateGameData, validateSaleData } from '../utils/validators.js';

class GameService {
    addGame(gameData) {
      const validation = validateGameData(gameData);
      if (!validation.isValid) {
        return { errorMsg: validation.errorMsg };
      }
      return gameRepository.addGame(
        gameData.name,
        gameData.category,
        gameData.price,
        gameData.stock
      );
    }
  
    registerSale(saleData) {
      const validation = validateSaleData(saleData);
      if (!validation.isValid) {
        return { errorMsg: validation.errorMsg };
      } else {
        const sale = gameRepository.registerSale(saleData.gameId, saleData.quantitySold);
        if(sale != null){
           return sale 
          }else{
            return { errorMsg: 'no hay stock'}
          }
       }
      
    }
  
    getInventory() {
      return gameRepository.getAllGames();
    }
  
    getStatistics() {
      return {
        totalUnitsSold: gameRepository.getTotalUnitsSold(),
        unitsSoldByCategory: gameRepository.getUnitsSoldByCategory()
      };
    }
  }

export default new GameService();