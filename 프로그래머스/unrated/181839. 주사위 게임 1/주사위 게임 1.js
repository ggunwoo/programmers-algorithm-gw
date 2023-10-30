function solution(a, b) {
    let score = 0;
    if(a%2!=0 && b%2!=0){
        score = Math.pow(a, 2) + Math.pow(b, 2);
    } else if(a%2!=0 || b%2!=0){
        score = 2*(a+b);
    } else if(a%2==0 && b%2==0) {
        score = Math.abs(a-b)
    }
    
    return score
}