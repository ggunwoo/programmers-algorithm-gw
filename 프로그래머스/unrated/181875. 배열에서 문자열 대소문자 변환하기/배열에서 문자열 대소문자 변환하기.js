function solution(strArr) {
    return strArr.map((a, i) => {
        if(i%2===0){
            return strArr[i].toLowerCase();
        } else {
            return strArr[i].toUpperCase();
        }
    })
}