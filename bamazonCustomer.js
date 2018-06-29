var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table");
var purchased = [];

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.query("SELECT * FROM products");
    
});

connection.query('SELECT id, product_name, department_name, price FROM products', function (err, res) {
    if (err) console.log(err);

    var table = new Table({
        head: ['ITEM #', 'ITEM NAME', 'DEPARTMENT', 'PRICE'],

    });

    for (var i=0; i<res.length; i++) {
        table.push([res[i].id, res[i].product_name, res[i].department_name, res[i].price]);       
    }
    console.log(table.toString());
    initiate();

});

function initiate() {

    inquirer.prompt([
        {
            type: 'input',
            name: 'id',
            message: 'Please enter the ITEM # of product you would like to purchase.',
            // validate: validation,
            filter: Number
        },
        {
            type: 'input',
            name: 'stock_quantity',
            message: 'Enter the quantity that you would like to purchase',
            // validate: validation,
            filter: Number
        }
    ]).then(function(input) {

        var purchase = {
            ID: input.id,
            Quantity: input.stock_quantity
        };
        
        // console.log(purchase);
        purchased.push(purchase);
        console.log(purchased[0].ID);

        // LOG OUT THE PURCHASED ITEM
        connection.query('SELECT * FROM products WHERE id=?', purchased[0].ID, function(err, res) {
            if(err) console.log(err, 'That is not a valid ID');
            // console.log(res);

            if(res[0].stock_quantity < purchased[0].Quantity) {
                console.log('Sorry, we do not have enough of that item in stock!!');
                connection.end();
            } else if(res[0].stock_quantity >= purchased[0].Quantity) {
                console.log('Awesome, you just purchased quantity of ' + purchased[0].Quantity + ' ' + res[0].product_name + ' for ' + res[0].price + ' dollars!');
                var sale = res[0].price * purchased[0].Quantity;
                console.log('The total for your purchased today is: $' + sale);
                var newQuantity = res[0].stock_quantity - purchased[0].Quantity;
                // CONNECT TO DATABASE AND UPDATE INVENTORY
                connection.query('UPDATE products SET stock_quantity= ' + newQuantity + ' WHERE id = ' + purchased[0].ID, function(err, res) {
                    if (err) throw err;
                    
                    console.log('Congratulations, your order has been processed and will drop in 60mins via our Bam-Drone, THANK YOU!');
                    connection.end();
                });

                
            }

            
    
        });
        

    });

    

}