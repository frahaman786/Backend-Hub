import express from 'express';
const app = express();
const port = 3000;
app.get('/info', (req, res) =>{
    console.log(req.method);
    console.log(req.url);
    res.send('Information Recieved');
});
app.listen(port, () => {
    console.log("Server Running");
})