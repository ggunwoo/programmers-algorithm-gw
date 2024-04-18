function solution(s) {
    var answer = s.split(' ').map(v => Number(v))
    return (Math.min(...answer) + " " + Math.max(...answer));
}