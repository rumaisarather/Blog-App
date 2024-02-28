const  router = require("express").Router();
const category = require("../models/category");

router.post("/", async(req,res) => {
    const newCat = new category(req.body);
    try{
const savedCat = await newCat.save();
res.status(200).json(savedCat);
    } catch(err) {
        res.status(500).json(err);
    }
});
router.get("/", async(req,res) => {
    try{
    const Cats = await category.find();
    res.status(200).json(Cats);
    } catch(err) {
        res.status(500).json(err);
    }
});
module.exports = router;