function solution(n, slicer, num_list) {
    switch(n){
        case 1 : 
            return num_list.slice(0, slicer[1]+1)
            break;
        case 2 : 
            return num_list.slice(slicer[0], num_list.length)
            break;
        case 3 : 
            return num_list.slice(slicer[0], slicer[1]+1)
            break;
        case 4 :
            return num_list.slice(slicer[0], slicer[1]+1).filter((e, i)=> i%slicer[2]===0)
            break;
    }
}