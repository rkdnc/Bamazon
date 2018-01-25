var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "!AB0hU$V",
    database: "bamazon"
});
//Conecting to the database
connection.connect(err => {
    if (err) throw (err);
    console.log("Welcome to Bamazon!");
    getItems();
});

// function interface() {
//     inquirer.prompt([
//     {
//         type: "input",
//         message: "What would you like to buy?",
//         name: "itemId"
//     }
// ]).then(inquirerResponse => {
//     var item = parseInt(inquirerResponse.itemId);
//     getItems();
// })
//A function query that displays all items
function getItems() {
    connection.query("SELECT * FROM products", (err, res) => {
        if (err) throw err;
        //prints all items
        for (var i = 0; i < res.length; i++) {
            console.log(`${res[i].item_id} | ${res[i].product_name} | ${res[i].price}`);
            console.log("------");
        };
        inquirer.prompt([{
                type: "input",
                message: "What would you like to purchase?",
                name: "productId"
            },
            {
                type: "input",
                message: "How many would you like?",
                name: "productQuantity"
            }
        ]).then(inquirerResponse => {
            var product = parseInt(inquirerResponse.productId) -1;
            var productQuantity = parseInt(inquirerResponse.productQuantity);
            if (productQuantity <= 0) {
                console.log("Sorry! We are currently sold out of that item.");
            } else {
                console.log(`You would like to purchase ${res[product].product_name}?`);
                inquirer.prompt([{
                    type: "confirm",
                    message: " ",
                    name: "confirm",
                    default: "Yes"
                }]).then(inquirerResponse => {
                    if (inquirerResponse.confirm) {
                        var itemPrice = res[product].price * productQuantity
                        console.log(`Your total is ${itemPrice}`);
                    } else {
                        console.log("Have a great day");
                    }
                })

            }
        })
        connection.end();
    })
};