const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controlers/stuff');

router.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

router.post('/', stuffCtrl.createThing );

router.get('/', stuffCtrl.findAllThings);

router.get('/:id', stuffCtrl.findOneThing)

router.put('/:id', stuffCtrl.updateThing)

router.delete('/:id', stuffCtrl.deleteThing)

module.exports = router;