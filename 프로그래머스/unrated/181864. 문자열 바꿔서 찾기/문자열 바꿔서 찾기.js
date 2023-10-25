function solution(myString, pat) {
    const res = [...myString].map((a)=>{ 
        return a==="A"? a="B" : a==="B"? a="A":null
    })
    return res.join('').includes(pat)?1:0
    
}