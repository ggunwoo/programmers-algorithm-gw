function solution(arr1, arr2) {
    return arr1.length > arr2.length ? 1
    : arr1.length < arr2.length ? -1
    : arr1.reduce((a, b)=> a+b) > arr2.reduce((a, b)=> a+b) ? 1
    : arr1.reduce((a, b)=> a+b) < arr2.reduce((a, b)=> a+b) ? -1
    : 0
}