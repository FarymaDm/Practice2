function shuffleArray(names) {
	if (names.length == 1) {
		return names;
	} else {
		var oldArray = names;
		var newArray = [];
		while (oldArray.length >= 1) {
			var randomVar = Math.floor(Math.random() * oldArray.length);
			newArray.push(oldArray[randomVar]);
			oldArray.splice(randomVar, 1);
		}
	}
	return newArray;
}
alert(shuffleArray([ 'Андрій', 'Марія', 'Василь', 'Петро' ]));