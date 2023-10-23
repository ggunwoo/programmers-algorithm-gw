function solution(sides) {
    let sum = sides.sort((a, b)=> b-a)
    return sum[0] < sum[1]+sum[2] ? 1 : 2
}