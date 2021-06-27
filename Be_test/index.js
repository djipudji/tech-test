const express = require('express'); // Import express
const bodyParser = require('body-parser'); // Import body-parser
const articleRoutes = require ('./routes/articleRouter'); // Import articleRoutes
const commentRoutes = require ('./routes/commentRouter'); // Import articleRoutes
const cors = require('cors');

const app = express() // Make express app

//Set body parser 
app.use(bodyParser.json()); // SUPPORT JSON ENCODED BODIES
app.use(bodyParser.urlencoded({
  extended: true
})); // SUPPORT ENCODED BODIES

//set static assets to public directory
app.use(express.static('public'));

app.use(cors());


app.use('/article', articleRoutes);// If access localhost:3000, it will be go to articleRoutes
app.use('/comment', commentRoutes);// If access localhost:3000, it will be go to articleRoutes


// Server running on port 3000
app.listen(3000, ()=>{
    console.log('server running on http://localhost:3000')
})