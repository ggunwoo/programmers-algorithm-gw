function solution(n, control) {
    let str_arr = [...control]
    for(let i=0; i<=str_arr.length; i++){
        if(str_arr[i]==="w"){n+=1}
        if(str_arr[i]==="s"){n-=1}
        if(str_arr[i]==="d"){n+=10}
        if(str_arr[i]==="a"){n-=10}
    }
    return n
}