class Employee {
    constructor() {
        this.employeeName
    }

    setEmployeeName(newName) {
        if (typeof newName !== 'string'){
            throw new Error ("Name should be a string")
        }
        this.employeeName = newName
    }
    getEmployeeName() {
        return this.employeeName
    }

}


let employee1 = new Employee()
employee1.setEmployeeName("John")

console.log(employee1);