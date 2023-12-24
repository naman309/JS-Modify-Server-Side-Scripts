//STUDENT NAME: Naman Sharma
//STUDENT ID: 8837689

//using the required API
const fs = require('fs').promises;

const script = process.argv[1]
const FileName = process.argv[2];

//Printing file path and file name
console.log("Script: " + script);
console.log("Filename: " + FileName);

console.log("------------------------")

fs.readFile(FileName, "utf8")
    .then(list => console.log(list))
    .catch(error => console.log(error));