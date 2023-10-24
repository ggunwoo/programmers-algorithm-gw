function solution(my_string) {
    var answer = 0;
    [...my_string].map((a,i)=>{
        if(!isNaN(a)){
            answer+=Number(a)
        }
    })
    return answer;
}