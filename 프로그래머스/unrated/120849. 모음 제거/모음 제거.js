function solution(my_string) {
    const answer = [];
    const vowel = ["a","e","i","o","u"]
    
    my_string.split('').map((a, i)=>{ vowel.some(e => e == a ) ? null : answer.push(a) })
    
    return answer.join('')
}