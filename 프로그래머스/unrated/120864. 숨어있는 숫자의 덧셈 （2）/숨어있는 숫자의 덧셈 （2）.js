function solution(my_string) {
    return my_string.split(/[a-zA-Z]/).map(a=>Number(a)).reduce((a,b)=> a+b)
}