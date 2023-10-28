function solution(num_list) {
    let odd = [];
    let eve = [];
    num_list.map((a, i)=> a%2===0 ? eve.push(a) : odd.push(a))
    
    return +odd.join('') + +eve.join('')
}