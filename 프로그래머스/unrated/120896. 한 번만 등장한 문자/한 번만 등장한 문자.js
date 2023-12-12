function solution(s) {
    let answer = [];
    let frequency = [...s].reduce((a, b) => { a[b] = (a[b] || 0)+1; return a }, {});
    for(const [k, v] of Object.entries(frequency)){
        v === 1 ? answer.push(k) : null
    }
    return answer.sort().join('')
}