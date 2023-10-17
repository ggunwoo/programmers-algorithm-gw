function solution(n, k) {
    // 양꼬치 1인분 12000원, 음료수 2000원
    // 양꼬치 10인분 시키면 음료수1개 서비스
    // 양꼬치 n인분, 음료수 k개
    
    // 전체 가격
    const total = n*12000+k*2000;
    // 할인된 금액
    const dc = () => {
        let int = 0;
        for(let i=1; i<=n; i++){
            if(i%10 === 0){
                int += 2000
            }
        }
        return int
    };
    return total-dc()
}