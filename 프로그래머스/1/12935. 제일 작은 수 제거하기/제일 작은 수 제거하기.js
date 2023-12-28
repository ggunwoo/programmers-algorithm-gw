function solution(arr) {
    let filter = arr.filter( a => a != Math.min(...arr));
    
    return filter.length ? filter : [-1]
}