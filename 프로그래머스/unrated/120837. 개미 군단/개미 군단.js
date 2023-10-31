function solution(hp) {
    const 장군개미 = 5;
    const 병정개미 = 3
    const 일개미 = 1;
    
    let 장군몇 = hp/장군개미
    let 병정몇 = (hp%장군개미)/병정개미
    let 일몇 = ((hp%장군개미)%병정개미)/일개미
    
    return Math.trunc(장군몇) + Math.trunc(병정몇) + Math.trunc(일몇)
}