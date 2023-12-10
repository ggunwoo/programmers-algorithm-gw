function solution(emergency) {
    let sort = emergency.slice().sort((a,b)=>b-a);
    console.log( sort )
    console.log(emergency)
    
    return emergency.map(a=> sort.indexOf(a)+1)
}