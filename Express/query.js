import express from 'express';
const app = express();
const port = 3000;
app.get('/product', (req,res) =>{
    console.log(req.query.category);
    console.log(req.query.brand);
    res.send(`Category : ${req.query.category} and Brand : ${req.query.brand}`);
});
app.listen(port, () =>{
    console.log("Running");
})