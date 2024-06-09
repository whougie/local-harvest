const express = require('express');
const path = require('path');
const db = require('./config/connection');
const routes = require("./routes")
const cookieParser = require('cookie-parser');
const cors = require('cors')
// const { User, Product, ProductsPurchase, Bag } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser())
app.use(routes)
app.use(cors())

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, "..", 'client/dist')));

  app.get('/*', (req, res) => {
    res.sendFile(path.resolve( __dirname, "..", 'client/dist/index.html'))
  })
}

db.once('open', () => {
  app.listen(PORT, () => console.log(`API server for running on port ${PORT}!`) );
});

