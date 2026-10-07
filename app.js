const express = require('express');
const path = require('path');

const portfolioRoutes = require('./routes/portfolio.routes');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para leer datos enviados desde formularios
app.use(express.urlencoded({ extended: true }));

// Archivos estáticos: CSS, JavaScript, imágenes, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Rutas principales
app.use('/', portfolioRoutes);

// Ruta para páginas no encontradas
app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});
