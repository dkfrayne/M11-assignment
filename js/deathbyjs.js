//STEP 1
function step_one(str) {
    return str.split('').sort().join('')
}
// console.log(step_one('webmaster'))
//STEP 2
function step_two(str) {
    return str.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join(' ')
}
//STEP 3
function step_three(str) {
    return str.split('').filter(e => ['a', 'e', 'i', 'o', 'u'].includes(e)).length
}
//STEP 4
function step_four(len) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwkxyz0123456789'
    const code = []
    for (i = 0; i < len; i++) {
        code.push(chars.charAt(Math.floor(Math.random() * chars.length)))
    }
    return code.join('')
}
//STEP 5
function step_five(list) {
    return list.sort((a, b) => b.length - a.length)[0]
}


// FUNCTION CALLS
console.log(step_one('webmaster'))
console.log(step_two('the quick brown fox'))
console.log(step_three('The quick brown fox'))
console.log(step_four(Math.floor(Math.random() * 12)))
console.log(step_five(['Australia', 'Germany', 'The United States', 'Brazil']))