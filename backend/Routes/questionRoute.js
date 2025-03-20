const express=require("express")

const router=express.Router();


router.post("/1",(req,res)=>{
    res.send("Que 1")
})
router.post("/2",(req,res)=>{
    res.send("Que 2")
})


//check user
router.get("/3",(req,res)=>{
    res.send("Que 3")
})

module.exports=router

