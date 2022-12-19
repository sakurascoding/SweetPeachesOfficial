const app = require('express')();

app.get('/', (req, res) => res.send('Server is up.'));

const ping = new Date();

module.exports = () => {
  app.listen(3000);
}