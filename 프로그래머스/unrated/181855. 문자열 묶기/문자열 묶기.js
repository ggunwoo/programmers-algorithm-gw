function solution(strArr) {
    const arr = strArr.reduce((acc, cur)=> {
        const length = cur.length
        acc.set(length, acc.get(length) ? acc.get(length)+1 : 1)
        
        return acc
    }, new Map());
    
    return Math.max(...arr.values())
}