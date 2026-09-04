import express from 'express';
const app = express();
const port = 3000;
app.get('/product/:id' , (req, res) => {
    console.log(req.params.id);
    res.send(`Your Producr id: ${req.params.id}`);

});
app.listen (port, () =>{
    console.log("Server Running");
})