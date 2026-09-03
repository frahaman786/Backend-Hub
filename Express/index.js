/*import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
}); */

import express from 'express';
const app = express();
const port = 5000;
//client are requesting something /about client aasking about section so it will enter and res will send
app.get('/',(req, res) => { 
  res.send('Home Page');
});
app.get('/about', (req,res) => {
  res.send('About page')
});
app.get('/contact', (req, res) =>{
  res.send("Contact Page");
});
app.listen(port, () => {
  console.log("Server is running");
});