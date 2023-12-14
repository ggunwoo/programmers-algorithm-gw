function solution(x) {
    return x%String(x).split('').reduce((a,c)=>a + Number(c), 0)===0
}