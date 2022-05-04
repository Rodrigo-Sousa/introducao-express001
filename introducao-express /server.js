const express = require ("express");

const app = express();

const port = 3000;

app.get("/", (request, response)=>{
    response.send("Hello world")});

// Outra rota, HTTP
app.get("/ola", (request, response) => {
    response.send("URL, Olá, Mundo!!!");
});

// Usando o POST
app.post("/frutas", (request, response)=>{
    response.send("Frutas, pelo POST");
});
    // * Local host
    // * 127.0.0.1
app.listen(port, () => {
    console.log("Nosso servidor está rodando na porta " + port)
});

