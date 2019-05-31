var read = require('readline-sync');
var fs = require('fs');
//var prompt = require('prompt-sync')();
module.exports = {
    addPerson(object, wg) {


        var liststocks = [];
        try {
            for (var i = 1; i <= n_NumberOf_stock; i++) {
                //take input  user name from user
                console.log(i, " Enter name");
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

                var stock = new book.Person;
                console.log(i);

                stock.setName(name);
                stock.setFullName(fullName);
                stock.getAddress(address);
                stock.getCity(city);
                stock.getZip(zip);
                stock.getMobile(mobile)

                liststocks.push(stock);
            }
        } catch (error) {
            console.log("eror");

        }


    }
}