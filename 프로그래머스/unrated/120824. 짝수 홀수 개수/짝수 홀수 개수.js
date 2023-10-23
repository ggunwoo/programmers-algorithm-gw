function solution(num_list) {
    let answar = [0, 0];
    num_list.map( a => {
        if(a%2===0){ answar[0]++ } else { answar[1] ++}
    })
    return answar
}