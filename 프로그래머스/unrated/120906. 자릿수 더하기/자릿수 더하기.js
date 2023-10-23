function solution(n) {
    
    const strN = n.toString().split('');
    const numN = strN.map((v)=> Number(v))
    
    
    return numN.reduce((acc, cur)=> acc + cur);
}