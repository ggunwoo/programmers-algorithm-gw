function solution(date1, date2) {
    const DateA = new Date(...date1)
    const DateB = new Date(...date2)
    
    return DateA < DateB ? 1 : 0
}