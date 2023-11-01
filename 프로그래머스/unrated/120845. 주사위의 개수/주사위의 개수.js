function solution(box, n) {    
    return box.map( a => Math.trunc(a/n)).reduce((a,b)=> a*b)
}