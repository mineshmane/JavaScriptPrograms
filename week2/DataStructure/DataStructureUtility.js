module.exports = {

    writeFile(fileName, data) {
        const fs = require('fs');
        fs.writeFile(fileName, data, function (err) {
            if (err) {
                return console.log(err);
            }

        });
    },

    
}