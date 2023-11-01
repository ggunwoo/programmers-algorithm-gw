function solution(my_string) {
    
    return my_string.replace(/[^0-9]/g, "").split('').map( a => Number(a)).sort((a,b)=> a-b)
}