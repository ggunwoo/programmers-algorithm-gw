function solution(rsp) {
    return [...rsp].map( a => a==2 ? a=0 : a==0 ? a=5 : a==5 ? a=2 : a='X').join('')
}
