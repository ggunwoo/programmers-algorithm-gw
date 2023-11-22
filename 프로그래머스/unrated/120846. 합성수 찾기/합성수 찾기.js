function solution(n) {
    let fill = Array.from({length:n},(a, i)=>i+1);
    return fill.map( a => { 
        let arr = [];
        for(let i=1; i<=a; i++){
            a%i===0 ? arr.push(i) : null;
        }
        return a = arr
    }).filter( e => e.length >= 3).length
}