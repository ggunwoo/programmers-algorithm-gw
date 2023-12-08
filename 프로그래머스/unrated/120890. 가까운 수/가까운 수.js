function solution(array, n) {
    array = array.sort((a, b)=> a-b)
    
    let difference = array.map(a => Math.abs(a-n));
    return array[difference.indexOf(Math.min(...difference))]
}
