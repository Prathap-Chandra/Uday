const express = require('express')
const router = express.Router();
const validate = require("../helpers/validateInput");
router.post("/", (req,res) => {
    let isValidRequest = validate(req.body);
    if(isValidRequest){
        res.status(200).json({
            message: isValidRequest
        })
    }else{
        res.status(400).json({
            message: "Looks like your request is not correct"
        })
    }    
})

module.exports = router;


// {
// 	"input": {
// 		"questions": 1,
// 		"digits": {
// 			"minuend": 0,
// 			"subtrahend": 0
// 		},
// 		"borrow": true
// 	}
// }