/************************************************************************************************
* Execution : 1. default node cmd> node StockDetail.js 
* 
* @Purpose : Write program for Write and read program fo stock etails add by user and store in json file 
* @file : StockDetail.js 
* @version : 1.0
* @author : Minesh Mane <mineshmane94@gmail.com>
* @since : 28-05-2019
*    
**********************************/


const read = require('readline-sync');
const util = require('./Stock');
const fs = require('fs')


console.log("Enter N Number of Stocks.. ");
var n_NumberOf_stock = read.questionInt();


var liststocks = [];
try {
	for (var i = 1; i <= n_NumberOf_stock; i++) {
		//take input  user name from user
		console.log(i, " Stock Enter  User-Name ");
		var name = read.question();
		//take input company name
		console.log("Enter Company Name ");
		var company = read.question();

		console.log("Enter Company Symbol ");
		var symbol = read.question();

		console.log("Enter Number of Shares");
		var shares = read.questionInt();

		console.log("Enter Price ");
		var price = read.questionInt();

		var totalPrice = price * shares;
		console.log("The total price is:" + totalPrice);

		console.log("Done");
		console.log();

		var stock = new util.Stock;
		console.log(i);

		stock.setName(name);
		stock.setCompany(company);
		stock.setSymbol(symbol);
		stock.setShares(shares);
		stock.setPrice(price);
		stock.setTotalprice(totalPrice);
		liststocks.push(stock);
	}



	const jsonString = JSON.stringify(liststocks);
	fs.writeFile('/home/admin1/JavaScriptPrograms-master/week3/jsonFile/stockRepo.json', jsonString, err => {
		if (err) {
			console.log('Error writing file', err);
		} else {
			console.log('Successfully wrote file');
		}
	});

	for (s in liststocks) {
		console.log(stock)
	}


} catch (error) {
	// TODO Auto-generated catch block
	console.log(" error ocuured");
}