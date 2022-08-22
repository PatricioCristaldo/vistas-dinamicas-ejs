const express = require('express');
const router = express.Router();
const {home,menu,detalleMenu} = require('../controllers/indexController');

router.get('/', home);
router.get('/menu', menu);
router.get('/detalleMenu/:id', detalleMenu);
module.exports = router;