function solution(numbers, direction) {
    if(direction[0]==='r'){
        const arr1 = [numbers.pop()]
        const arr2 = arr1.concat(numbers)
        return arr2
    } else {
        const arr3 = [numbers.shift()]
        const arr4 = numbers.concat(arr3);
        return arr4
    }
}