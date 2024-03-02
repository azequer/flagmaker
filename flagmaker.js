const fs = require('fs');
// parse json
const args = process.argv.slice(2);
var jsonObj = require("./fflags.json").applicationSettings;
// stringify JSON Object
var override = require("./override.json");
for(var key in override) {
jsonObj[key] = override[key];
}
if (args[1] == "yes") {
fs.writeFile(args[0], JSON.stringify(override), 'utf8', function (err) {
    if (err) {
		console.log("An error occured while writing FFlags");
        return console.log(err);
    }

    console.log("FFlag generator successfully generated fflags");
});
} else {
fs.writeFile(args[0], JSON.stringify(jsonObj), 'utf8', function (err) {
    if (err) {
		console.log("An error occured while writing FFlags");
        return console.log(err);
    }

    console.log("FFlag generator successfully generated fflags");
});
}