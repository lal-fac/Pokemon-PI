const { Router } = require('express');

const pokemonRoute = require('./pokemonRoute.js');
const typesRoute = require('./typesRoute.js');


const router = Router();

router.use('/pokemon', pokemonRoute);
router.use('/types', typesRoute);

router.get('/', (req, res) => {
    res.json('ruta / (home)')
});

module.exports = router;
