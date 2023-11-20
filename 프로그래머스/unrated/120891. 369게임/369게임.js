function solution(order) {
    var answer = 0;
    String(order).split('').map( a => ['3','6','9'].includes(a) ? answer++ : null)
    return answer;
}