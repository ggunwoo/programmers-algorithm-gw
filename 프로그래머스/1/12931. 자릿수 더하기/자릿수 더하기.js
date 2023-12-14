function solution(n){
    return [...String(n)].length === 1 ? n : [...String(n)].reduce((a,b)=>Number(a)+Number(b))
}