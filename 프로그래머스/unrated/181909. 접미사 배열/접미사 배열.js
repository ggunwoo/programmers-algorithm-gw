function solution(my_string) {
    var answer = my_string.split('').map((a, i) => a = my_string.slice(i, my_string.length));
    return answer.sort();
}