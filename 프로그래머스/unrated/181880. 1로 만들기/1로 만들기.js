function solution(num) {
    var answer = 0;
    for(let i=0; i<num.length; i++){
        if(num[i]!=1){
            do {
                if(num[i]%2===0){
                    num[i] = num[i]/2
                    answer++
                } else {
                    num[i] = (num[i]-1)/2
                    answer++
                }
            } while(num[i]!=1)
        }
    }
    return answer;
}