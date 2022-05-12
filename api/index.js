const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const axios = require('axios');
// breed,temperament relaciones en la base de datos
//const { breed,temperament } = require('./src/db.js');
//

//! LOGGING SERVER RUNNING
server.listen(3001, () => {
  console.log('Backend server running at port :3001');
});
