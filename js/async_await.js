/**
 * TIME sec
 * 
 * Place order          2
 * Cut the fruits       2
 * Add water n ice      1
 * Start the machine    1
 * Select container     2
 * Select toppings      3
 * Serve the ice cream  2
 */

let stocks = {
    fruits : ["strawberry", "grapes", "banana", "apple"],
    liquide : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"]
}

let is_shop_open = true



function time (ms) {
    return new Promise ( (resolve, reject) => {
        if (is_shop_open) {
            setTimeout(resolve, ms) 
        } else {
            reject( console.log("shop is closed") )
        }
    } )
}

async function kitchen () {
    try {
        await time(2000)
        console.log(`${stocks.fruits[0]} was selected`)

        await time(0000)
        console.log("start the production")

        await time(2000)
        console.log("cut the fruit")

        await time(1000)
        console.log(`Add ${stocks.liquide[0]} n ${stocks.liquide[1]}`)

        await time(1000)
        console.log("Start the machine")

        await time(2000)
        console.log(`Select container: ${stocks.holder[0]}`)

        await time(3000)
        console.log(`Select toppings: ${stocks.toppings[0]}`)

        await time(2000)
        console.log("Serve the ice cream")

    } catch (error) {
        console.log("me customer left!", error);
    } finally {
        console.log("day ended, shop is closed")
    }
}

kitchen();



/**
let topping_choice = () => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            resolve( console.log("which topping would you like?") );
        }, 3000)
    } )
}

async function kitchen () {
    console.log("  A  ")
    console.log("  B  ")
    console.log("  C  ")

    // the chief go out to aks customer
    await topping_choice()

    console.log("  D  ")
    console.log("  E  ")
}

kitchen()

console.log("do the dishes")
console.log("cleaning the tables")
console.log("taking the other orders")
 */


/**
let order = () => {

    return new Promise( (resolve, reject) => {

        if (is_shop_open) {
            resolve()
        } else {
            reject()
        }
    } )
}

 * order()
 * .then()
 * .then()
 * .then()
 * .catch()
 * .finally()
 * 
 */

/*
async function order (){
    try {
        await abc; // abs fake function
    } 
    catch (error) {
        console.log("me abc doesn't exits", error);
    } 

    finally {
        console.log("anyways runs")
    }
}

order()
.then( () => {
    console.log("then do sthg 1")
} );
*/





