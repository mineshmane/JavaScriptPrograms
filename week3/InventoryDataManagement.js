
const read = require('readline-sync');
var path = "/home/admin1/inventory.json";

let num = 0;
try {
    var rootNode = mapper.readTree(file);
    do {
        console.log("Enter choice : ");
        console.log("1 for Rice Details" + "\n2 for Wheate Details" + "\n3 for Pulses Details");
        num = read.questionInt();

    } while (num < 0 || num > 4);
    {
        var InventoryProduct = "";
        switch (num) {
            case 1:
                InventoryProduct = "Rice";
                break;
            case 2:
                InventoryProduct = "Wheate";
                break;
            case 3:
                InventoryProduct = "Pulses";
                break;
            default:
                console.log("invalid choice ");
        }

        var inventery = rootNode.get(InventoryProduct);
        for (let node in inventery) {
            var name = node.path("name").asText();
            var price = node.path("price").asDouble();
            var weight = node.path("weight").asDouble();

            System.out.println("Name:" + name + "\nPrice: " + price + "\nWeight: " + weight);
            System.out.println("total: " + price * weight + " Rs" + "\n");
        }

    }
} catch (e) {
    console.log("error");

}