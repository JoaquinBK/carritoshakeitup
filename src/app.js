const express = require('express');
const app = express();
const path = require("path");
const PORT= process.env.PORT || 3002
app.use(express.static('public'));

app.get("/src/html/carrito",(req, res)=>{
    res.sendFile(path.join(__dirname, "html","carrito.html"))
})

app.get("/src/html/listado",(req, res)=>{
    res.sendFile(path.join(__dirname,"html","listado.html"))
})

// app.get("/prueba", function(req, res){
//     res.send("soy prueba")
    
// })

app.listen (PORT,() => console.log(`Servidor escuchando en ${PORT}`))