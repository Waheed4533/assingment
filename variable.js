// let person="Raja waheed";
// console.log(`Hello ${person}, would you like to learn some Python today?`)
// let person1="Raja waheed";
// console.log(person1.toLowerCase())
// console.log(person1.toUpperCase())
// console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.”`)
// let famous_person="Albert Einstein"
// let message="A person who never made a mistake never tried anything new."
// console.log(`${famous_person}:"${message}"`)
// let name1=`    Raja Waheed     `
// console.log(name1)
// console.log(name1.trim())
// let addition=5+3;// leting variable to 2 numbers
// console.log(addition);// printing result of additon
// let multiplication=2*4;
// console.log(multiplication);
// let subtraction=16-8;
// console.log(subtraction);
// let division=16/2;
// console.log(division)
// console.log(5+3);
// console.log(16-8);
// console.log(4*2);
// console.log(16/2);
// let favorite_number= 5;
// console.log(`My favorite number is ${favorite_number}`);
// let friends=["usama","sultan","sarmad"]
// console.log(friends[0])
// console.log(friends[1])
// console.log(friends[2])
// let friends=["usama","sultan","sarmad"]
// console.log(`hello g ${friends[0]}`)
// console.log(`hello g ${friends[1]}`)
// console.log(`hello g ${friends[2]}`)
// let favorite_transport=["Bike","Car","bus"];
// console.log(`I like to travel on ${favorite_transport[0]}`)
// console.log(`I like to travel on ${favorite_transport[1]}`)
// console.log(`I like to travel on ${favorite_transport[2]}`)
var Guest = ["Usman", "yaseen", "Qazi"];
// console.log(`Aoa kia hal ha aj raat dinner meri trf ha ${Guest[0]}`)
// console.log(`Aoa kia hal ha aj raat dinner meri trf ha ${Guest[1]}`)
// console.log(`Aoa kia hal ha aj raat dinner meri trf ha ${Guest[2]}`)
// console.log(`G to ${Guest[0]} ap aj na ayn ma kahi ja raha`)
// console.log(`ap aa skty hayn ${Guest[1]}`)
// console.log(`ap aa skty hayn ${Guest[2]}`)
// console.log(`I found a bigger table space so i am deciding to invite 3 more guests ${Guest[1]},${Guest[2]}`)
Guest.shift();
console.log(Guest);
Guest.unshift("sultan");
Guest.splice(2, 0, "usama");
console.log(Guest);
Guest.push("arsal");
console.log(Guest);
console.log("I found a big table so you Mr. ".concat(Guest[0], " are invited to dinner"));
console.log("I found a big table so you Mr. ".concat(Guest[2], " are invited to dinner"));
console.log("I found a big table so you Mr. ".concat(Guest[4], " are invited to dinner"));
