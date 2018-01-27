var mysql = require("mysql");
var inquirer = require("inquirer");
require("dotenv").config();
const keys = require("./keys.js");

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
                message: "What would you like to purchase? Please type the ID of the item below.",
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
            if (productQuantity <= 0 && res[product].price - productQuantity <=0) {
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
                        var itemPrice = res[product].price * productQuantity;
                        var stock = res[product].stock_quantity - productQuantity;
                        product += 1;
                        console.log(`Your total is ${itemPrice}`);
                        updateDb(product, stock);
                    } else {
                        console.log("Have a great day");
                    }
                })

            }
        })
        
    })
};

function updateDb(id, qty){
    connection.query("UPDATE products SET ? WHERE ?",[{
        
        stock_quantity: qty
    },
    {
        item_id: id
    }
    ])
    connection.end();
}