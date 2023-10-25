function solution(arr) {
    // const로 할당하면 재할당이 불가능해져서 x의 값을 증가 시킬수 없음
    let x = 0;
    
    // arr, arr2가 참조하는 배열값이 같을 때 까지 반복몬을 계속 돌려주기 위해 while문을 사용
    while (true) {
        // 수열 변환 1번 문제에서 나온 배열의 각 요소값을 변환하는 로직
        const arr2 = arr.map((a, i)=>{
            if(a>=50 && a%2===0){
                return a/2
            }
            else if(a<50 && a%2!=0){
                return a*2+1
            } else {
                return a
            }
        })
        // 두 배열에 참조값이 같을 때 true 반환
        const disc = arr.every((e, i) => e === arr2[i]);
        
        if(disc){
            // 두 배열에 참조값이 같을 때(true) while문 루프를 종료(break;)
            break;
        } 
        else {
            // 같이 않으면(false) x의 값이 증가하면서 다시 반복~
            // arr에 arr2을 할당
            x++;
            arr = arr2;
        }
    }
    // 루프 종료, 종료 시 증가되었던 x값을 반환
    return x
    
    // arr2=map은 6번째 순회했지만 x값이 증가하기전에 루프가 종료되므로 x는 5를 반환 (x중 가장 작은 값을 return)
}