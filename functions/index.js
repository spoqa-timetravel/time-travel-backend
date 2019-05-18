const functions = require('firebase-functions');



const app = require('./api/app');



exports.app = functions.https.onRequest(app);
