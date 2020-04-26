const express = require('express')
const router = express.Router();
const validate = require("../helpers/validateInput");
router.post("/", (req,res) => {
    let response = validate(req.body);
    if(response){
        res.status(200).json({
            questions: response
        })
    }else{
        res.status(400).json({
            error: "Looks like your request is not correct"
        })
    }    
})

module.exports = router;
