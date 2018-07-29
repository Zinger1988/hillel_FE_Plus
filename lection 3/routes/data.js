let fs = require('fs');
let path = '.';

function pathConcat(pathname) {
	return path + '/' + pathname;
}

function filereader(fsRef, path) {
	return new Promise(function (resolve, reject) {
		fsRef.readFile(path, 'utf8', function (e, d) {
			
			if (e) reject(e);
			
			else resolve(JSON.parse(d));
		});
	});
}

function dirreader(fsRef, path, req, order) {
	let currentDir = fs.readdirSync(path),
		userArr = [];
	return new Promise(function (resolve, reject) {
		currentDir.forEach((item) => {
			var target = fsRef.readFileSync(path + '/' + item + '/' + req.method.toLowerCase() + '.json', 'utf8');
			target = JSON.parse(target)
			userArr = userArr.concat(target)
		})

		switch(order){
			case "first":
				resolve(userArr[0]);
			break;

			case "last":
				resolve(userArr[userArr.length - 1]);
			break;
		}
		resolve(userArr);
		reject('error');
	});
}


function getUser(req, res) {
	let getAction = req.url.split('/');
	switch(getAction[getAction.length-1]){
		case "last":
			usersOrder(req, res, "last")
		break;
		
		case "first":
			usersOrder(req, res, "first")
		break;
		
		case "all":
			usersOrder(req, res, "all")
		break;
		
		default:
		(function(){
			let path = pathConcat('api' + req.url + '/' + req.method.toLowerCase() + '.json'),
			servicePromise = filereader(fs, path);
			
			servicePromise
			.then((response) => {
				res.json(response);
			});
		})();
	}
	
}

function usersOrder(req, res, order = order || undefined) {

	let path = pathConcat('api' + req.url);		
		console.log(path)
	if(order){
		getAction = path.split('/');
		getAction.splice(-1,1);
		path = getAction.join('/');
		console.log(path)
	}

	console.log(path)
	
	servicePromise = dirreader(fs, path, req, order);
	
	servicePromise
	.then((response) => {
		res.json(response);
	});
}

module.exports = { getUser, usersOrder };