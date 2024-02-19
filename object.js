let user2 = new Object () 

let user = {
    name : "David" ,  // properties -> key : value
    greet() {  // functtion dalam object di sebut method
        console.log("Hello!");
    }
}

// console.log(user.name)
// user.greet()


let person = {
    name : " Franky",
    age : 26
}

person.hobby = "coding"

delete person.hobby  // menghapus property

// console.log(person);
// console.log(person.name);
// console.log(person["name"]);

let person2 = {
    name : " Budi",
    age : 25,
    address : {
        city : "Bandung",
        country : "Indonesia"
    }
}

//console.log(person2);
// console.log(person2.address?.city);  //optional chainning

// console.log(Object.keys(person2));

for (let key in person2) {
    console.log(person2[key]);
}

