reader.on('close', () => {
    const N = parseInt(lines[0])
    const employees = []
    for (var i = 1; i <= N; i++) {
        const temp = lines[i].split(' ')
        if (temp[0] === 'make') {
            const emp = new employee(parseInt(temp[1]), temp[2])
            employees.push(emp)
        }
        else if (temp[0] === 'change_num') {
            employees[parseInt(temp[1]) - 1].setNum(parseInt(temp[2]))
        }
        else if (temp[0] === 'change_name') {
            employees[parseInt(temp[1]) - 1].setName(temp[2])
        }
        else if (temp[0] === 'getnum') {
            console.log(employees[parseInt(temp[1]) - 1].getNum())
        }
        else if (temp[0] === 'getname') {
            console.log(employees[parseInt(temp[1]) - 1].getName())
        }
    }
   
});




class employee {
    constructor(num, name) {
        this.num = num;
        this.name = name;
    }
    
    getNum() {
        return this.num;
    }
    
    getName() {
        return this.name;
    }
    
    setNum(num) {
        this.num = num
    }
    
    setName(name) {
        this.name = name
    }
}






//================================================================



reader.on('close', () => {
    const NK = lines[0].split(' ')
    const N = parseInt(NK[0])
    const K = parseInt(NK[1])
    const customerList = []
    
    for (var i = 1; i <= N; i++) {
        const newCustome = parseInt(lines[i]) >= 20 
                            ? new Customer(i, parseInt(lines[i]))
                            : new YoungCustomer(i, parseInt(lines[i]))
        customerList.push(newCustome)
    }
    
    for (var j = N + 1; j < N + 1 + K; j++) {
        const temp = lines[j].split(' ')
        customerList[parseInt(temp[0]) - 1].addOrder(temp[1], parseInt(temp[2]))
    }
    
    customerList.forEach(x => console.log(x.calculateTotalPayment()))
    
});





class YoungCustomer {
    constructor(num, age){
        this.num = num
        this.age = age;
        this.orders = [];
    }
    
    addOrder(item, price) {
        if (item.toLowerCase() === "alcohol") return
        this.orders.push({ item, price });
    }

    calculateTotalPayment() {
        return this.orders.reduce((total, order) => total + order.price, 0);
    }
}

class Customer extends YoungCustomer {
    constructor(num, age) {
        super(num, age);
        this.isEligibleForDiscount = false;
    }
    
    addOrder(item, price) {
        if (item.toLowerCase() === "alcohol") {
            if (!this.isEligibleForDiscount) {
                // If the customer orders alcohol for the first time, set the discount flag
                this.isEligibleForDiscount = true;
            }
        }
        else if (item.toLowerCase() === "food") {
            if (this.isEligibleForDiscount) price -= 200
        }
        this.orders.push({ item, price });
    }
}


//============================================================================


reader.on('close', () => {
    const NK = lines[0].split(' ')
    const N = parseInt(NK[0])
    const K = parseInt(NK[1])
    const customerList = []
   
    
    for (var i = 1; i <= N; i++) {
        const newCustome = new Customer(i, parseInt(lines[i]))
        customerList.push(newCustome)
    }
    
    for (var j = N + 1; j < N + 1 + K; j++) {
        const temp = lines[j].split(' ')
        
        if (temp[1] == 'A') {
            //console.log(customerList[parseInt(temp[0]) - 1])
            console.log(customerList[parseInt(temp[0]) - 1].calculateBill())
            Customer.outCustomer++
        }
        
        if (temp[1] == '0') customerList[parseInt(temp[0]) - 1].addOrder(temp[1])
        else customerList[parseInt(temp[0]) - 1].addOrder(temp[1], parseInt(temp[2]))

    }    
    console.log(Customer.outCustomer);
});



class Customer2 {
    static outCustomer = 0

    constructor(number, age) {
        this.number = number
        this.age = age
        this.orders = []
        this.isEligibleForDiscount = false
    }
    
    addOrder(item, price = 0) {
        if (this.age < 20 && (item === 'alcohol' || item == '0')) {
            return
        }
        
        if ((item === 'alcohol' || item == '0') && this.isEligibleForDiscount == false) {
            this.isEligibleForDiscount = true
        }
        if (item === 'food' && this.isEligibleForDiscount) {
            price -= 200
        }
        
        this.orders.push({item, price})
    }
    
    calculateBill() {
        return this.orders.reduce((total, order) => total + order.price, 0)
    }
    
}

//============================================================================================



class Point {
    constructor(alphabet, route1, route2) {
        this.alphabet = alphabet
        this.route1 = route1
        this.route2 = route2
    }
    
    Move(route) {
        return route == '1' ? this.route1 : this.route2
    }
}

