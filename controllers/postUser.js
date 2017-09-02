var request = require('request')
var pcl = require("pretty-console.log")


console.log(JSON.parse(req.body));
uriCall = 'http://api.fernandopiza.xyz/usuarios'
//console.log(uriCall);
request(
    { method: 'post',
      uri: uriCall,
      form:
        {
          usuario: {
            nombre: req.body.nombre,
            correo: req.body.correo,
            numero: req.body.numero,
            direccion: req.body.direccion
          }
        }
    },
    function (error, response, body) {
      console.log(body);
      if(!error && response.statusCode == 201){
        user = JSON.parse(body);
        pcl.enable()
        console.log(user);
      }
      else {
        pcl.enable()
        console.log('Lo sentimos, el usuario no ha sido registrado. Vuelva a intentarlo más tarde.')
        console.log(body + 'error: '+ response.statusCode)
      }
    }
)
