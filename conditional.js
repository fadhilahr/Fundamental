let age = 21 ;

if (age >= 17) {
    console.log("You can now create an ID Card");
} else {
    console.log("You are not old enough to create an ID Card");
}

let grade = "C"

 if (grade === " A") {
     console.log("Excelent Grade");
 } else if (grade === "B") {
     console.log("Great Result !");
 } else {
     console.log("Good Result")
 }


 let date = new Date ("2024-02-29")
 let day = date.getDay()
 
 if (day === 0  ) {
     console.log("hari minggu");
 } else if (day === 1) {
     console.log("hari senin");
 
 } else if (day === 2) {
     console.log("hari selasa");
 
 } else if (day === 3) {
     console.log("hari rabu");
 
 } else if (day === 4) {
     console.log("hari kamis");
 
 } else if (day === 5) {
     console.log("hari jumat");
 } else {
     console.log("hari sabtu")
 }


 switch (day) {
     case 0:
         console.log("Hari Minggu");
         break;
 
     case 1:
         console.log("Hari Senin");
         break;
 
     case 2:
         console.log("Hari Selasa");
         break;
 
     case 3:
         console.log("Hari Rabu");
         break;
 
     case 4:
         console.log("Hari Kamis");
         break;
 
     case 5:
         console.log("Hari Jum'at");
         break;
 
     case 6:
         console.log("Hari Sabtu");
         break;
 
 }


 let car = "BMW" 

 if (car === "BMW"  || car === "Toyota") {
     console.log("This car is Awsome");
 }

 let str = "Javascript"

 if (str === "Javascript") {
     console.log("Javascript");    
 } else {
     console.log("not Javascript");
 }

 //ternary operator
 console.log(str === "Javascript" ? "Javascript" : "not Javascript");