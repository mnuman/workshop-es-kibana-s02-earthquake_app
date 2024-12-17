const { Client } = require('@elastic/elasticsearch');
const config = require('config');
const fs = require('fs');

const elasticConfig = config.get('elastic');

const client = new Client({
  node: elasticConfig.node,
  auth: {
    apiKey: elasticConfig.apiKey
},
    tls: {
        rejectUnauthorized: false,
        ca: fs.readFileSync('./http_ca.crt')
  }
});
console.log(elasticConfig.node)
client.ping()
  .then(response => console.log("You are connected to Elasticsearch!"))
  .catch(error => console.error("Elasticsearch is not connected.", error))

module.exports = client; 