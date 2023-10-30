function solution(todo_list, finished) {
    todo_list.map((a, i)=> { return todo_list[i] = {'name' : a, 'finished' : finished[i]}});
    const filtered = todo_list.filter( e => e.finished == false);
    const res = filtered.map( a => a = a.name)
    return res
}