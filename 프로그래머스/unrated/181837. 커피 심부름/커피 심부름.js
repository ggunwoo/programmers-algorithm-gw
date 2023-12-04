function solution(order) {
    var answer = 0;
    order.map( a => a.includes('cafelatte') ? answer+=5000 : answer+=4500)
    return answer
}