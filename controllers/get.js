var express = require('express')
var request = require('request');
var router = express.Router()

request(
    { method: 'get'
    , uri: 'http://api.fernandopiza.xyz/flores/1'
    /*, multipart:
      [ { 'content-type': 'application/json'
        ,  body: JSON.stringify({foo: 'bar', _attachments: {'message.txt': {follows: true, length: 18, 'content_type': 'text/plain' }}})
        }
      , { body: 'I am an attachment' }
    ]*/
    }
  , function (error, response, body) {
      if(response.statusCode == 200){
        var response = JSON.parse(body)
        console.log(response)
      } else {
        console.log('error: '+ response.statusCode)
        console.log(body)
      }
    }
  )
