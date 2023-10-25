function solution(arr, k) {
    
    return arr.map( a =>{
        if(k%2==0) {
            return a + k
        }
        if(k%2!=0) {
            return a * k
        }
    })
    
}