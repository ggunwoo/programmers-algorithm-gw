function solution(arr) {
    while(true){
        for(let j=0; j<=10; j++){
            if(arr.length === Math.pow(2, j)){
                return arr
            }
        }
        arr.push(0)
    }
    
}