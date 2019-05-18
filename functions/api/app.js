const express = require('express');
const app = express();

const database = require('./model/realtime')



app.get('/list', ( request, response ) => {
  database.ref('issues').once('value', snapshot => {
    response.status(200).json({
      data: snapshot
    })
  })
})

app.get('/list/:year', ( request, response ) => {
  response.status(200).json({

  })
})

app.post('/list', ( request, response ) => {
  let { date, title, type, link, image, caption } = request.body
  let year = date.split('-')[0]

  ref = database.ref(`issue/${year}`).push({
    "title": title,
    "date": date,
    "type": type,
    "link": link,
    "image": image,
    "caption": caption
  })
  
  response.status(200).json({
    data: "success"
  })
})




module.exports = app