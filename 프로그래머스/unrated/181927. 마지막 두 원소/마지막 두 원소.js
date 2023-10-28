function solution(num_list) {
    const curr = num_list[num_list.length-1]
    const prev = num_list[num_list.length-2]
    
    if(curr > prev) num_list.push(curr - prev);
    if(curr <= prev) num_list.push(curr * 2);

    return num_list
}