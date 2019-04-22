function countOddEvenNumbers(n) {
	var result = { odd: 0, even: 0 };
	var str = String(n);
	for (var i = 0; i <= str.length - 1; i++) {
		if (!(+str[i] % 2) || str[i] == '0') {
			result.even += 1;
		} else {
			result.odd += 1;
		}
	}
	return result;
}
alert(countOddEvenNumbers(1111111));