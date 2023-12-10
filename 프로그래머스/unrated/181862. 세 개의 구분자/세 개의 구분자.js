function solution(myStr) {
    let delimeter = myStr.split(/[a,b,c]/g).filter(a=>a)
    return delimeter.length!=0 ? delimeter : ["EMPTY"]
}