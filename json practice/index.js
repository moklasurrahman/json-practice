const data = require('./friends.json');
const data2 = require('./friends_data.json')

// console.log(data);
// console.log(data.friends[0]);
// console.log(data.friends[0].name);
// console.log(data.friends[1]);
// console.log(data.friends[1].name);

// data.friends[0].name = "Taj"
// console.log(data.friends[0].name);

//Friends data

console.log(data2.students[0].languages[1]);
console.log(data2.students[1].friends[1]);
console.log(data2.students[1].friends);


for (x in data2) {
    console.log(x);
    console.log(data2[x])
}


//conversion
const data3 = {
    name: "Taj",
    age: 23
};

console.log("convert javaScript to JSON")
console.log(JSON.stringify(data3))


console.log("convert JSON to javaScript")
// console.log(JSON.parse(data))



