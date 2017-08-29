var express = require('express')
var request = require('request');

function putFlores(id) {
  var id = 2
  request(
      { method: 'get'
      , uri: 'http://api.fernandopiza.xyz/flores/'+id
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

  request(
      { method: 'put',
        uri: 'http://api.fernandopiza.xyz/flores/1',
        form:
          {
            flor:
              {
                //
                clasificacion_id: "2",
                //
                thc: "17.53",
                //
                cbd: "1.14",
                //
                cbn:"0.08",
                //
                cnc: "0.17",

                "humeleneo": '1.01',
                "terpileno": '0.75',
                "nerolidol1" : '0.08',
                "limonene":'0.11',
                "myrcene": '0.04',
                "beta_pinene" : '0.01',
                "alpha_pinene": '0.05',
                "geraniol": '1.69',
                "beta_caryophyllene": '0.51',
                //
                stock: "1"
              }
          }
      }, function (error, response, body) {
        if(!error && response.statusCode == 200){
          membresias = JSON.parse(body);
          //console.log(membresias);
        } else {
          console.log('error: '+ response.statusCode)
          console.log(body)
        }
      })
}
 putFlores()
