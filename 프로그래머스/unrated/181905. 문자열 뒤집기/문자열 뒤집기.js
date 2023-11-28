function solution(my_string, s, e) {
    let arr = [];
    for(let i=0; i<s; i++){
        arr.push(my_string[i])
    }
    if(s!=e){
        let sliceArr = [...my_string].slice(s, e+1).reverse();
        console.log(sliceArr)
        for(let i=0; i<sliceArr.length; i++){
            arr.push(sliceArr[i])
        }
        for(let i=e+1; i<my_string.length; i++){
            arr.push(my_string[i])
        }
    } else {
        for(let i=e; i<my_string.length; i++){
            arr.push(my_string[i])
        }
    }
    return arr.join('')
}