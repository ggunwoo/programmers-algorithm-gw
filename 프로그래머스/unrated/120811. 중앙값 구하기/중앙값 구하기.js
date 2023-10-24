function solution(array) {
    const sort_arr = array.sort((a, b)=> a-b)
    return sort_arr[Math.floor(sort_arr.length/2)]
}