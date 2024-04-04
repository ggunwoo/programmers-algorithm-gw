function solution(left, right) {
    var answer = 0;
    var res = 0;
    
    for(let i=left; i<=right; i++){
        for(let j=1; j<=i; j++){
            i%j===0 ? res+=1 : null
        }
        res%2===0 ? answer+=i : answer-=i
        res=0
    }
    return answer;
}