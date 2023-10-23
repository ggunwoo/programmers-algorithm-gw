function solution(s1, s2) {
    let count = 0;
    s1.map(a1 => {
        s2.map( a2 => { a1===a2 ? count++ : undefined} )
    })
    return count
}