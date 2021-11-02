const express = require('express');

const app = express();
app.use(express.static('public'));


function portlistening() {
 console.log('Server is running on port 80');
}
app.listen(80,portlistening);