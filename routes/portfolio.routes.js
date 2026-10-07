const express = require('express');
const path = require('path');

const router = express.Router();

const viewsPath = path.join(__dirname, '..', 'views');

// Página principal
router.get('/', (req, res) => {
  res.sendFile(path.join(viewsPath, 'index.html'));
});

// Procesar formulario de contacto
router.post('/contacto', (req, res) => {
  const { nombre, correo, mensaje } = req.body;

  if (!nombre || !correo || !mensaje) {
    return res.status(400).send('Todos los campos son obligatorios.');
  }

  console.log('Nuevo mensaje recibido:', {
    nombre,
    correo,
    mensaje
  });

  res.redirect('/confirmacion');
});

// Página de confirmación
router.get('/confirmacion', (req, res) => {
  res.sendFile(path.join(viewsPath, 'confirmacion.html'));
});

module.exports = router;
