var sides, value;


class Die {
	constructor(sides, probabilities){
		this.sides = sides;
		this.probabilities = probabilities; //array of integers[]

	}

roll(){

	let value =  Math.ceil(Math.random() * this.sides);
	console.log(value);

}
}

let dieDodgy6 = new Die(6,[1,1,1,1,1,10])
let die6 = new Die(6,);
let die20 = new Die(20);


dieDodgy6.roll();
die6.roll();
die20.roll();





