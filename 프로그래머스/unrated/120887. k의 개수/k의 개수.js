function solution(i, j, k) {
    return Array(j-i+1).fill(i).map((v,i)=>v+i).join('').split('').filter(a => a.includes(k)).length
}