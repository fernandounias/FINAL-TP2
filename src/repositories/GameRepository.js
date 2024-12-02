import Game from '../models/Game.js'

class GameRepository {
    constructor() {
      this.games = [];
      this.sales = [];
      this.currentId = 1;
    }
  
    addGame(name, category, price, stock) {
      const newGame = new Game(this.currentId++, name, category, price, stock);
      this.games.push(newGame);
      return newGame;
    }
    
    getAllGames() {
        return this.games;
    }

    registerSale(gameId, numSold) {
      const game = this.games.find(g => g.id === gameId);
      if (!game || game.stock < numSold) {
        return null;
      }
      game.stock -= numSold;
      this.sales.push({ gameId, numSold });
      return game;
    }

    getTotalUnitsSold() {
      return this.sales.reduce((accumulator, sale) => accumulator + sale.numSold, 0);
    }
  
    getUnitsSoldByCategory() {
      return this.sales.reduce((accumulator, sale) => {
        const game = this.games.find(g => g.id === sale.gameId);
        if (game) {
            accumulator[game.category] = (accumulator[game.category] || 0) + sale.numSold;
        }
        return accumulator;
      }, {});
    }
  }
  
  export default new GameRepository();