function solution(numLog) {
    return numLog.map((a, i) => { 
        return a+1 === numLog[i+1] ? 'w' 
        : a-1 === numLog[i+1] ? 's'
        : a+10 === numLog[i+1] ? 'd'
        : a-10 === numLog[i+1] ? 'a'
        : null
    }).join('')
}