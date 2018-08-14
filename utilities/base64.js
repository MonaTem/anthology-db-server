var fs = require('file-system');
var imageAsBase64 = fs.readFileSync('./Gene Bellinger.jpg', 'base64');
console.log(imageAsBase64);
//
//
// var imageAsHex = fs.readFileSync('./Mona.jpg', 'hex');
// console.log(imageAsHex);
