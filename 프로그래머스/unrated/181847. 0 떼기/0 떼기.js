function solution(n_str) {
    while(true) {
        if(n_str.startsWith('0')){
            n_str = n_str.replace('0','');
        } else {
            break;
        }
    }
    return n_str
}