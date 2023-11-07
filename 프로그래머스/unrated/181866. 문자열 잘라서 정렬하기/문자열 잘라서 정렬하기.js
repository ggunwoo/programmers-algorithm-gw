function solution(myString) {
    return myString.replace(/x/g, ' ').split(' ').sort().filter( e => e != "")
}