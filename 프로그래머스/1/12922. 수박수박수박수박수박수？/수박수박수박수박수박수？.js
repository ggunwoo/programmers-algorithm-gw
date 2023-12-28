function solution(n) {
    return Array(n).fill('수').map((v,i)=> (i+1)%2===0 ? v='박' : v).join('')
}