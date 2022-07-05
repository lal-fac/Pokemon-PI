const express = require('express');
const router = express.Router();

const routeModels = require('./routeModels/routeModels.js');

router.get('', async (req, res) => {
    try{
        res.json(await routeModels.saveTypes());
    } catch(err){
        res.json({"error": err});
    }
});

module.exports = router;