const express = require('express');

const app = express();

app.get("/contents", (req, res, next)=>{
    res.json({msg : "Api index"})
})

app.get("/contents/:id", (req,res)=>{
    const { id } = req.params;
    res.json({msg : `Contents Single ${id}`});
})

app.listen(8080, ()=>{
    console.log('api running at 8080')
})
