let fs = require('fs');

try {
	fs.readFile(process.argv[2], 'utf8', (error, data) => {
		newData = data.split(' ').map(Number);
		checkNumbers(newData);
	});
}
catch (error) {
  if (!process.argv[2]) {
  console.log("Echec loading array");
  return;
  }
  console.error(error);
  return;
}

const checkNumbers = (x) => {

	let k = 17
	let n = 0

	for (let i = 1; i < (x.length); i++){

			console.log(x[n])
			console.log(x[i])

		if (x[n] + x[i] == k){
		 return console.log(true);
		}

		if (i === x.length - 1){
			console.log("x.length = " + x.length)
			console.log("i = " + i)
			console.log("n = " + n)
			i = n;
			console.log("i = " + i)
			console.log("n = " + n)
			i++;
			n++;
			console.log("i = " + i)
			console.log("n = " + n)
		}
	}
	return console.log(false);
};

//node k2.js list.txt