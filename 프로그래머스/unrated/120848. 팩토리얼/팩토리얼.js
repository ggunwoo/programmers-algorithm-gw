function solution(n) {
    const sum =(i)=> Array(i).fill(1).map((a,b) => a+b).reduce((a,b)=> a*b);
    let j = 1;
    while(true){
        if(n<sum(j)) break;
        j++
    }
    return j-1
}