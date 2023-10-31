function solution(arr, n) {
    if(arr.length%2===0){
        // 짝수
        for(let i=1; i<=arr.length; i+=2){
            arr[i]+=n
        }
    } else {
        // 홀수
        for(let i=0; i<arr.length; i+=2){
            arr[i]+=n
        }
    }
    
    return arr
        
}