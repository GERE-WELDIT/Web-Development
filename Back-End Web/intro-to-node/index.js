
// node.js libraries : ex - superheroes
const sh = require('superheroes');

var nameArray = [];

// generating 100 superhero names 

function getSuperHeroesNames(){
	for (var i = 0 ; i< 100; i++){
		nameArray.push(sh.random());
	}
	return nameArray;
}

// print the superheroes name list
console.log(getSuperHeroesNames());