function solution(n) {
    let answer = new Array(n).fill(new Array(n).fill(0))
    return answer.map((a, i) => a.map((e, j)=> i == j ? 1 : 0 ))
}