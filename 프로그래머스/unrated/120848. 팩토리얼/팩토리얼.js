function solution(n) {
    const sum =(i)=> Array(i+1).fill(1).map((a,b) => a+b).reduce((a,b)=> a*b);
    let j = 0;
    while(true){
        if(n<sum(j)) break;
        j++
    }
    return j
}
