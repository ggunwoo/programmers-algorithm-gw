function solution(arr) {
    let res = 1;
    // 이중 for문    
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j]!=arr[j][i]){
                res = 0
            }
        }
        
    }
    return res
}