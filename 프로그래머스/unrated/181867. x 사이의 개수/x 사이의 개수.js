function solution(myString) {
    
    // 정규식 공부하면서 써보기
    let answer = myString.replace(/xx/g, ' 0 ').replace(/^x/, '0 ').replace(/x/g, ' ');
    
    
    
    
    
    return answer.split(' ').map( a => a != 0 ? a.length : a = 0)
}