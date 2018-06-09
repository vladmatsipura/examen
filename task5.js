function sumDigits(n) {
	var summ = 0;
	for(var i = 0; i < 3; i++){
		summ += n % 10;
		n = Math.floor(n/10);
	}
	return summ;
}
console.log(sumDigits(247));
console.log(sumDigits(548));
console.log(sumDigits(322));