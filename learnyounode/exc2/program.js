function sum() {
     var total = 0;
     process.argv.map(function(arg) {
    	if (!isNaN(arg)) {
             total += Number(arg);
	}
     });
     return total;
}

console.log(sum());
