function solution(n, k) {
    var answer = [];
    for(let i=0; i<=n; i+=k){answer.push(i)}
    return answer.sort((a, b)=> a-b).slice(1);
}