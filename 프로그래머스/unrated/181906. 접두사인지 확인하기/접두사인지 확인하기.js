function solution(my_string, is_prefix) {
    let answer = [];
    for(let i=1; i<=[...my_string].length; i++){
        if(my_string.slice(0, i) == is_prefix){
            answer.push(true)
        } else {
            answer.push(false)
        }
    }
    return answer.some(e => e ===true)?1:0
}