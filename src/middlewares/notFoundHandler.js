export default function notFoundHandler (req, res) {
    const availableRoutes = [
      { method: 'GET', path: '/api/' }
    ];
  
    res.status(404).json({
      error: 'endpoint no definido',
      message: 'El endpoint usado no es valido. Porfavor utilice estos:',
      availableRoutes,
    });
  };