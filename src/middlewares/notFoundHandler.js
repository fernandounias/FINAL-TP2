export default function notFoundHandler (req, res) {
    const availableRoutes = [
      { method: 'POST', path: '/api/games/newGame' },
      { method: 'POST', path: '/api/games/sellGame' },
      { method: 'GET', path: '/api/games/inventory' },
      { method: 'GET', path: '/api/games/statistics' }
    ];
  
    res.status(404).json({
      error: 'endpoint no definido',
      message: 'El endpoint usado no es valido. Porfavor utilice estos:',
      availableRoutes,
    });
  };