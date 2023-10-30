function solution(myString) {
    // 'l' = 108
    return [...myString].map( a => a.charCodeAt() < 108 ? a = 'l' : a).join('')
}