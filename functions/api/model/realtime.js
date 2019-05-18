const admin = require('firebase-admin');
const serviceAccount = require('../.secret/serviceAccountKey')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://timetravel-5ebe0.firebaseio.com/'
})

const database = admin.database();

module.exports = database