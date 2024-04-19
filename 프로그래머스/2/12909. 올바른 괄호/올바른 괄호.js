function solution(s){
    const right = s.split('').filter(el => el==')').length
    const left = s.split('').filter(el => el=='(').length
    const per = s.split('()').filter(e=> e != '')
    
    if(per[0]?.charAt(0)==')'){
        return false
    }
    if(per[per.length-1]?.charAt(per[per.length-1].length-1)=='(' ){
        return false
    }
    if(left != right ){
        return false
    }
    return true
}