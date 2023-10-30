function solution(my_string, is_suffix) {
    var answer = 0;
    let n = 0;
    
    while(true) {
        if( my_string.slice(n, my_string.length) === is_suffix ){
            answer = 1;
            break;
        } else if(n === my_string.length){
            break;
        }
        n++
    }
    console.log(my_string.slice(3, my_string.length), is_suffix)
    
    console.log(n)
    
    return answer;
}