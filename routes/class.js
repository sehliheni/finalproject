const express = require('express');
const classRouter = express.Router();
const telmidh = require('../models/Class');

// add eleve
classRouter.post('/add', async (req, res) => {
    try {
        let eleve = new eleve(req.body);
        let result = await telmidh.save();
        res.status(200).json({ jdid: result, msg: "eleve done" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while adding eleve" });
    }
});
classRouter.get('/get',async(req,res)=>{
    try {
        let result = await telmidh.find()
        res.send({ list:result,msg:"hedha telmidh"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while findding eleve" });
    }
})
//get all eleve

module.exports = classRouter;


