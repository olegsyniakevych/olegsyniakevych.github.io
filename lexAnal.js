var alphabet = "Syniakevych"

var types = {
	divisors: /\s/g,
	number: /^[+-]?\d\.\d+e[+-]?\d+$/,
	word: /^[SYNIAKEVCH][syniakevch]*$/,
	identifier: /^[syniakevch\-]+$/,
	email: /^[SYNIAKEVCHsyniakevch][\.SYNIAKEVCHsyniakevch0-9]*@gmail\.com$/,
};

function mergeArraysSoThatOneElementIsFromTheFirstArrayAndTheOtherFromTheSecondAndTheThirdIsFromTheFirstArrayAndSoOn(arr1, arr2) {
	var res = [];
	for (var b = true; arr1.length || arr2.length; b = !b) {
		res.push((b ? arr1 : arr2).shift());
	}
	return res.filter(x => x != undefined);
}

function lexicosanalysis(str) {
	var divisors = str.match(types.divisors) || [];
	var tokens = str.split(types.divisors) || [];
	var vseRazom = mergeArraysSoThatOneElementIsFromTheFirstArrayAndTheOtherFromTheSecondAndTheThirdIsFromTheFirstArrayAndSoOn(tokens, divisors);
	vseRazom = vseRazom.filter(s => s.length > 0);
	var res = [];
	outer:
	for (var i = 0; i < vseRazom.length; ++i) {
		var token = vseRazom[i];
		for (var key in types) {
			if (types[key].test(token)) {
				res.push({
					type: key,
					val: token
				});
				continue outer;
			}
		}
		res.push({
			type: "other",
			val: token
		});
	}
	return res;
}

console.log(lexicosanalysis("Olejka 1.73e1 syniy-3@gmail.com Syniy"));
