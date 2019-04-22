function fib(n) {
	var f = [1, 1];

	if (n == 0) {
		return null;
	}
		
	else if (n == 1) {
		return 1;
	}

	else {
		for (i = 2; i < n ; i++) { 
        f.push(f[f.length - 1] + f[f.length - 2]); 
    }
    var result = f; 
}
return f;
}
alert(fib(7));
alert(fib(10));
alert(fib(2));
alert(fib(1));
alert(fib(0));