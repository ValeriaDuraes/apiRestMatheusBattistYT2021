// Configuração inicial
const mongoose = require('mongoose');
const express = require('express');
const app = express();

const Person = require('./models/Person')

// Forma de ler JSON / Middlewares: são recursos que são executados entre as nossas requisições e respostas, no express a gente configura várias coisas como middlewares, e essa é uma delas
app.use(
  express.urlencoded({
    extended: true // Aqui iniciamos a configuração de leitura de JSON
  })
) 

app.use(express.json()) // Aqui finalizamos a configuração de leitura de JSON
// À partir de agora se eu enviar JSON o express vai conseguir trazer a resp também em JSON

// Rota inicial | Endpoint
app.get('/', (req, res) => { // Aqui estamos dando ao express a possibilidade de ler tudo o que vem da requisição, ou seja se o usuário enviar algo seja pela URL ou pelo body, nós vamos conseguir extrair isso, e também demos a possibilidade de utilizar a resposta, ou seja, me comunicar de volta com a pessoa que acessou a API, enviando algo pra ela...

    // message = Chave // Valor = Olá express
  res.json({message: 'Olá express!'})
})

// Entregar uma porta, para disponibilizar o express para ser "escutado" pelo navegador ou pelo postman
const DB_USER = "ValeriaDuraes"
const DB_PASSWORD = encodeURIComponent("deVeloper@1992")

mongoose
  .connect(
  `mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.zo061ts.mongodb.net/bancodaapi?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Conectamos ao MongoDB!")
    app.listen(3000)
  })
  .catch((err) => console.log(err))

