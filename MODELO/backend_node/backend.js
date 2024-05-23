const validacoes = require('./service.js')

const express = require('express');
const app = express();
const cors = require('cors')
const path = require('path')
const https = require('https');

const options = {
  hostname: 'www.lymtech.com.br',
  path: '/app/v1/create_lead',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

app.use(cors())
app.use(express.static(path.join(__dirname, "js")));
app.use(express.json());

app.post('/call-btn', (req, res) => {
  console.log(JSON.stringify(req.body));
  res.header("Access-Control-Allow-Origin", "*");
  const requestApi = https.request(options, (responseApi) => {
    console.log(`statusCode: ${responseApi.statusCode}`);
    if (responseApi.statusCode == 200) {
      res.status(200).send({"status": 200})
    }
    responseApi.on('data', (d) => {
      process.stdout.write(d)
    })
    responseApi.on('end', ()=> {
      if (validacoes.nameValidation(req.body.name) == true && validacoes.emailValidation(req.body.email) == true && validacoes.phoneValidation(req.body.phone) == true) {
        res.send(req.body)
      }
    })
  })
  requestApi.on('error', (error) => {
    console.error(error)
  })
  requestApi.write(JSON.stringify(req.body));
  requestApi.end();
});

app.listen(3000, () => console.log('Server started'));
