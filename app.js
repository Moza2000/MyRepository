// Fehler bewusst eingebaut 
// Test 
const express = require('express');
const app = express();
const path = require('path');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.get('/', (req, res) => {
    res.render('index');


});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});