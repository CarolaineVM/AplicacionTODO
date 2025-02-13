import e from "express";

const app = e();

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.listen(3000);
console.log("El server esta escuchando en el puerto:", 3000);
