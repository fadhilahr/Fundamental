class Employee {
    name = ""
    type = ""
    hour = 0

    constructor (name , type) {
        this.name = name
        this.type = type
    }

    addWorkingHour(hour) {
        this.hour = hour
    }
    
}


class FulltimeEmployee extends Employee{
    constructor (name ) {
        super (name, "Fulltime")
    }
    getSalary() {
        if (this.hour <= 6) {
            console.log(100000 * this.hour);
        } else {
            console.log((600000 + (this.hour - 6 ) * 75000));
        }

    }
}

const fulltime1 = new FulltimeEmployee ("Andi")
fulltime1.addWorkingHour(7)
fulltime1.getSalary()
console.log(fulltime1);

class ParttimeEmployee extends Employee {
    constructor (name) {
        super (name, "Parttime")
    
    }
    getSalary() {
        if (this.hour <= 6) {
            console.log(50000 * this.hour);
        } else {
            console.log((300000 + (this.hour - 6 ) * 30000));
        }

    }
    
}

const parttime1 = new ParttimeEmployee ("Doni")
parttime1.addWorkingHour(8)
parttime1.getSalary()
console.log(parttime1);


