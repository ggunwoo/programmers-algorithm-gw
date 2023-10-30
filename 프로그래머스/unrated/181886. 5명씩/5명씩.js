function solution(names) {
    var answer = [];
    for(let group = 0; group<names.length; group+=5){
       answer.push(names[group]); 
    }
    return answer;
}