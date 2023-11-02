function solution(my_string, num1, num2) {
    let answer = [];
    [...my_string].map((a, i) => i==num1 ? answer.push(my_string[num2]) : i==num2 ? answer.push(my_string[num1]) : answer.push(a))
    
    return answer.join('')
    
}