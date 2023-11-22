function solution(number) {
    return number.split('').map( a => Number(a)).reduce((a,b)=>a+b)%9
}