const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let arr = []
    for(let i=0; i<input[1]; i++){
        arr.push(input[0])
    }
    console.log(arr.join(''))
});