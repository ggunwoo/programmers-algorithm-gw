function solution(n) {
    let sq = Math.pow(Math.sqrt(n)+1, 2)
    return Number.isInteger(sq) ? sq : -1
}