function solution(n) {
    let res = Array(n).fill(1).map((a,i)=> a+i).filter(a=>n%a===0);
    
    return res.length!=0 ? res.reduce((a,b)=>a+b) : 0
}