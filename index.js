const express = require('express');
const app = express();
app.get('/', (req, res) => res.send('Hola Mundo juan'));
app.listen(8000);


