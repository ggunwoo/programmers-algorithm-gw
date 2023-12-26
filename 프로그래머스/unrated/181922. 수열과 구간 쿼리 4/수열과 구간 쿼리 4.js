function solution(arr, queries) {
    queries.forEach( v =>{
        const [s,e,k] = [v[0],v[1],v[2]]
        arr.map((a, i)=>{
            s <= i && i <= e && i%k===0 ? arr[i]+=1 : a
        })
    })
    
    return arr
}