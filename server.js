var os = require('os');
var fs = require('fs');
var _ = require('lodash')

// console.log("server is not  lllllhot run running")
// using core modules fs and os


// const user = os.userInfo();
// console.log(user)

// creating file saving data
// const file = fs.appendFile('file.txt', 'hi my name i ' + user.username,  ()=> console.log("file is created"))


// reading file from data
// fs.readFile('file.txt', 'utf8', (err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log(data)
//     }
// })


// lodash

let repeatingArray = [
    "Alice", "Bob", "Alice", 3, 4, 3, 5, "Bob", "Charlie", 4, "Alice"
];

let unique = _.uniq(repeatingArray);
console.log(unique)

console.log(_.isString(3))