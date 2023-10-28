function solution(strArr) {
    return strArr.map((a, i) => {
        strArr[0].toLowerCase();
        if(i%2===0){
            return strArr[i].toLowerCase();
        } else {
            return strArr[i].toUpperCase();
        }
    })
}