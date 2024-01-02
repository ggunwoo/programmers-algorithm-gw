function solution(s) {
    const arrS = s.split(' ')
    return arrS.reduce((acc,cur,idx)=> arrS[idx]!="Z" ? acc+Number(arrS[idx]) : acc-(Number(arrS[idx-1])), 0)
}