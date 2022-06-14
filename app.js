const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('Bienvenidos a mi web'))
app.get('/contacto', (req,res) => res.send ('1161370000'))




app.listen(3030,() => console.log ('servidor corriendo en el puerto 3030'))