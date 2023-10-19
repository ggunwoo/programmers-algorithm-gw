function solution(n) {
    // n명이 주문한 피자
    // 피자는 6조각
    // 똑같이 배분
    // 최소 판수
    for(let i=1; i<=n; i++){
        if(6*i%n===0){
            return i
        }
    }
}