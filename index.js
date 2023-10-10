require('dotenv').config()
const express = require('express');
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json("Servidor ativo!")
})

app.listen(process.env.PORT || 3000
    //, () => { console.log(`Servidor iniciado na porta ${process.env.PORT}`)}
);