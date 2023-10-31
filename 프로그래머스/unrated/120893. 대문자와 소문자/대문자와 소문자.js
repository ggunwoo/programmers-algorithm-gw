function solution(my_string) {
    console.log( 'c' > 'C')
    return [...my_string].map( a => a.toUpperCase() < a ? a.toUpperCase() : a.toLowerCase() ).join('')
}