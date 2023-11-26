function solution(my_string, indices) {
    let copy = [...my_string]
    for(let i=0; i < indices.length; i++){
        copy[indices[i]] = ""
    }
    return copy.join('')
}