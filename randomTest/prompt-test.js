// using npm prompt commaand
// does it work in web browser?

var prompt = require('prompt');
prompt.start();
prompt.get(['number'], function(err, result){
	if (result.number > 10){
		console.log("over 10!!")
	} else {
		console.log("under 10 :( ")
	}
});










