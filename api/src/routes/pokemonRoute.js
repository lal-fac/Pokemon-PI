const express = require('express');
const router = express.Router();
// const multer = require('multer');
// const upload = multer();

const routeModels = require('./routeModels/routeModels.js');


router.get('', async (req, res) => {
    const { name } = req.query;
    
    if(name){
        try{
            const data = await routeModels.getPokemonDetailName(name);
            return res.json(data);
        } catch(err) {
            return res.status(404).json({"error": err.message});
        }
    } else {
        try{
            const data = await routeModels.getPokemon();
            return res.json(data)
        } catch(err) {
            res.status(400).json({"error": err.message})
        }
    }
});

router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try{
        const data = await routeModels.getPokemonDetailId(id);
        return res.json(data);
    } catch(err) {
        return res.status(404).json({"error": err.message});
    }
});

router.post('', async (req, res) => {
    try {
        const newPokemon = await routeModels.addPokemon(req.body);
        return res.json(newPokemon);
    } catch(err) {
        return res.status(400).json({"error": err.message});
    }
});


module.exports = router;