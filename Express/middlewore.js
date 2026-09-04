import express from 'express';
const app = express();
const port = 3000;
app.use((req, res, next) =>{
    console.log('request Recieved');
    next();
})
app.get('/hello', (req, res) => {
    res.send('You are allowed to enter');
});
app.listen(port, () =>{
    console.log('Running.....');
})

/* Your coding challenge 🚀

Create an Express server on port 3000.

Create a middleware that:

Prints "Request received" in the terminal.
Uses next() so the request can continue.

Then create:

/hello

When /hello is requested, it should send:

Hello Express

Your flow should be:

GET /hello
    ↓
Middleware
    ↓
"Request received"
    ↓
next()
    ↓
/hello route
    ↓
"Hello Express"

Write the code yourself and send it. */