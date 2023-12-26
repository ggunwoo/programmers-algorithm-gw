function solution(phone_number) {
    const Asterisks = Array(phone_number.slice(0, phone_number.length-4).length).fill('*').join('')
    const last4numbers = phone_number.slice(phone_number.length-4, phone_number.length)
    return Asterisks + last4numbers
}