function solution(num, k) {
    return [null].concat(String(num).split('')).indexOf(String(k))
}