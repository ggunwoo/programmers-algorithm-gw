const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    let res = [];
    for(let i=1; i<=line; i++){
        res.push('*')
        console.log(res.join(''))
    }
})