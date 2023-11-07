function solution(strArr) {
    let answer = []
    strArr.map(a => a.includes('ad') ? null : answer.push(a))
    return answer
}