let foods = new Map();
foods.set('italian', 'gelato');
foods.set('mexican', 'torta');
foods.set('canadian', 'poutine');

let southernUSStates = ['Tennesesee', 'Kentucky', 'Texas'];
foods.set(southernUSStates, 'hot chicken');

console.log(
	foods.get('italian'),
	foods.get(southernUSStates),
	foods.size
);