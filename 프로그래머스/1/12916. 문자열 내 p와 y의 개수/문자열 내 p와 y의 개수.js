function solution(s){
    return [...s.toLowerCase()].filter(a=>a==='p').length === [...s.toLowerCase()].filter(a=>a==='y').length
}