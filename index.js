

const check = (List, target) => {
	for (let i = 0; i < List.length; i++) {
		let first = List[i];
		for (let j = 0; j < List.length; j++) {
			if (first + List[j] === target) {
				return `${first} ${List[j]}`;
			}
		}
	}
};


// only change the elements and the target when calling the function

console.log(check([1,2,3,4,5,6,7,8,9,10], 9))
