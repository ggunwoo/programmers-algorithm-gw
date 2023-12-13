function solution(x, n) {
    return Array(n).fill(x).map((a, i)=>a+(x*i));
}