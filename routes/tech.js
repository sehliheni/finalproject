const express = require('express');
const techRouter = express.Router();
const osstedh = require('../models/Tech');

// add ostedh
techRouter.post('/add', async (req, res) => {
    try {
        let tech = new tech(req.body);
        let result = await osstedh.save();
        res.status(200).json({ jdid: result, msg: "osstedh done" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while adding eleve" });
    }
});
techRouter.get('/get',async(req,res)=>{
    try {
        let result = await osstedh.find()
        res.send({ list:result,msg:"hedha osstedh"})
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while findding eleve" });
    }
})
//get all ostedh

module.exports = techRouter;


