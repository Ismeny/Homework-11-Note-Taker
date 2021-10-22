// created express server
const express = require('express');
const path = require('path');
const api = require('./routes/index.js');

// created app variable to set the value of express
const app = express();


// port where request will be hosted
const PORT = process.env.PORT || 3001;

// middleware to serve static files from `/public`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.use(express.static('public'));


// GET Route for homepage
app.get('/', (req, res) => {
    console.log('index route')
    res.sendFile(path.join(__dirname, '/public/index.html'))
})

//GET Route for notes page 
app.get('/notes', (req, res) => {
    console.log('notes route')
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});



app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);