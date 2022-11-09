const express = require('express');
const mongoose = require('mongoose');
const UserFilter = require('./models/userFilter');

mongoose
  .connect('mongodb://localhost:27017/meetcheendb', { useNewUrlParser: true })
  .then(() => {
    console.log('MONGO CONNECTION OPEN!!');
  })
  .catch((err) => {
    console.log('OH NO MONGO CONNECTION ERROR!!!!');
    console.log(err);
  });

const userFilter = new UserFilter();

// userFilter.userEmail = 'qkralstjd02';
// userFilter.filterInterest = [];
// userFilter.filterHobby = [];
// userFilter.save().catch((e) => {
//   console.log(e);
// });

async function startServer() {
  const app = express();
  app.set('port', process.env.PORT || 5000);

  await require('./loaders')(app);

  app
    .listen(app.get('port'), () => {
      console.log(`
      ################################################
      🛡️  Server listening on port: ${app.get('port')} 🛡️
      ################################################
    `);
    })
    .on('error', (err) => {
      console.error(err);
      process.exit(1);
    });
}

startServer();
