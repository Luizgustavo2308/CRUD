const express = require('express');

const server = express()

server.use(express.json());

const filmes = ['harry potter', 'Jogos vorazes', 'Avengers', 'chuck', 'Godzilla', 'Senhor dos anéis']


//retorna apenas um filme
server.get('/filmes/:index', (req, res) => {
    const { index } = req.params;
    return res.json(filmes[index]);
});


//apresenta  todos
server.get('/filmes', (req, res) => {
    return res.json(filmes);
});

//coloca um novo filme
server.post('/filmes', (req, res) => {
    const { name } = req.body;
    filmes.push(name);

    return res.json(filmes);
});

//atualizar
server.put('/filmes/:index', (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    filmes[index] = name;
    return res.json(filmes);
});

server.delete('/filmes/:index', (req, res) => {
    const { index } = req.params;

    filmes.splice(index, 1);
    return res.json({ message: "o curso foi apagado" });
});
//kk
server.listen(3000);