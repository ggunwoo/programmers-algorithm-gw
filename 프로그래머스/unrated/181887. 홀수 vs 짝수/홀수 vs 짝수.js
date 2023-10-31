function solution(num_list) {
    let [eve, odd] = [0, 0];
    
    for(let i=0; i<num_list.length; i+=2){
        eve += num_list[i];
    }
    for(let i=1; i<num_list.length; i+=2){
        odd += num_list[i];
    }
    
    return eve==odd ? eve : Math.max(eve, odd);
}