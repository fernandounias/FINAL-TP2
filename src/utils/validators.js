export const validateGameData = ({ name, category, price, stock }) => {
    if (!name || !category || price <= 0 || stock < 0) {
      return { isValid: false, errorMsg: 'Los datos ingresados no son válidos' };
    }
    return { isValid: true };
  };
  
  export const validateSaleData = ({ gameId, numSold }) => {
    if (!gameId || numSold <= 0) {
      return { isValid: false, errorMsg: 'Los datos ingresados no son válidos' };
    }
    return { isValid: true };
  };