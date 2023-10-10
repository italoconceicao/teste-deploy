require('dotenv').config()
const express = require('express');
const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    return res.json("Servidor ativo!")
})

// const port = process.env.PORT || 3001

app.listen(3000
    //, () => { console.log(`Servidor iniciado na porta ${process.env.PORT}`)}
);