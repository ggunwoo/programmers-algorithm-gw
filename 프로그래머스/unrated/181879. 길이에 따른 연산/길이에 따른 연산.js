function solution(num_list) {
    let sum = 0;
    if(num_list.length >= 11){
        sum = num_list.reduce((a,b)=> a+b)
    } else {
        sum = num_list.reduce((a,b)=> a*b)
    }
    return sum
}