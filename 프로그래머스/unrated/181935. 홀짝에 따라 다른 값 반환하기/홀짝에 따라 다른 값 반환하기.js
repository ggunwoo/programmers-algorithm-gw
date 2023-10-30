function solution(n) {
    var [even, odd] = [0, 0];
    
    // 짝수
    for(let i=2; i<=n; i+=2) even+=Math.pow(i, 2)
    // 홀수
    for(let i=1; i<=n; i+=2) odd+=i
    
    return n%2===0 ? even : odd
}