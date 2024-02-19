class Product {
    name = ""
    price = 0

    constructor(name, price) {
        this.name = name 
        this.price = price
    }
}

const product1 = new Product("apple" , 4000)
const product2 = new Product("orange" , 2000)
const product3 = new Product("melon" , 10000)
const product4 = new Product("banana" , 20000)

//console.log(product1,product2,product3,product4);


class Transaction {
    #total = 0
    products = []

    addToCart(item, qty) {
        item.qty = qty
        this.products.push(item)
    }

    getTotal() {
        this.products.forEach((item) => {
            this.#total += item.price * item.qty
            console.log(`${item.name} x ${item.qty} = ${item.price * item.qty}`);
        })
        console.log("====================");
        console.log(`Total : ${this.#total}`);
    }

    checkout(money) {
        if (money < this.#total) {
            throw new Error ("Uang anda tidak cukup")
        } else {
            console.log(`Cash : ${money}`)
            console.log(`Return : ${money - this.#total}`);
            console.log(`--- thank you :)---`);
        }

    }
}

const transaction1 = new Transaction()
transaction1.addToCart(product1, 2)
transaction1.addToCart(product3, 3)
transaction1.getTotal()
transaction1.checkout(50000)

//console.log(transaction1);