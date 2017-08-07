var request = require('request');
request('http://Api.fernandopiza.xyz/flores/', function (error, response, body) {
    if (!error && response.statusCode == 200) {
				//console.log(body);
				menu = JSON.parse(body);
        console.log(menu[0].id) // Print the google web page.
     }
})
