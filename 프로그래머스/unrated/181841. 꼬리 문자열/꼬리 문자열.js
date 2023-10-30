function solution(str_list, ex) {
    var answer = [];
    
    str_list.map((a, i )=>{
        a.includes(ex) ? null : answer.push(a)
    })
    
    return answer.join('');
}