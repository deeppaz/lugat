
var fs = require("fs");
var utf8 = require("utf8");
var readline = require("readline");

var myInterface = readline.createInterface({
    input: fs.createReadStream('../src/data/lugat.txt')
});
var lineno = 0;
var lugat = {};
var kelime = "";
var anlami = "";
myInterface.on('line', function (line) {
    lineno++;
    let index = 0;
    if (line[0] == " ") {
        lugat[kelime] += " " + line.trim();
        return;
    }


    //if (lineno == 15) {
    for (let i = 0; i < line.length; i++) {
        if (line[i] == " " && line[i + 1] == " ") {
            break;
        } else index++;
    }

    kelime = line.slice(0, index).trim();
    anlami = line.slice(index, line.length).trim();
    lugat[kelime] = anlami;
    // console.log(kelime);
    // console.log(anlami);
    console.log(kelime + " : " + anlami);
    //}
    if (lineno == 10000) myInterface.close();
});


myInterface.on('close', () => {
    //console.log(JSON.stringify(lugat));
    fs.writeFile('../src/data/lugat.json', JSON.stringify(lugat), (err, data) => {
        if (err) throw err;
        console.log('Saved!');
    })
    
});


fs.readFile('../src/data/lugat.txt', 'utf8', (err, data) => {
    console.log(data[0]);
});
console.log("hello");