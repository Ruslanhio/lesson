//  строки
// const firstName = 'Руслан'
// const age = 26

// function getAge() {
//     return age
// }


// const output = 'Привет, меня зовут ' + firstName + ' и мой возраст ' + age + ' лет.'
//  const output = `Привет, меня зовут ${firstName} и мой возраст ${age < 20 ? '17' : '31'} лет.`
//  console.log(output)

// const output = `
// <div>This is div</div>
// <p>This is p</p>
// `
// console.log(output)

// const firstName = 'Руслан'
// console.log(firstName.length)
// console.log(firstName.toUpperCase())
// console.log(firstName.toLowerCase())
// console.log(firstName.charAt(2))
// console.log(firstName.indexOf('сла'))
// console.log(firstName.toLowerCase().startsWith('рус'))
// console.log(firstName.startsWith('Рус'))
// console.log(firstName.endsWith('лан'))
// console.log(firstName.repeat(3))
// const string = '       password       '
// console.log(string.trimStart())

function logPerson(s, name, age) {
    if (age < 0) {
        age = 'Ещё не родился'
    }
    return `${s[0]}${name}${s[1]}${age}${s[2]}`
} 
const personName = 'Руслан'
const personName2 = 'Артур'
const personAge = 31
const personAge2 = -8
const output = logPerson`Имя: ${personName}, Возраст: ${personAge}!`
const output2 = logPerson`Имя: ${personName2}, Возраст: ${personAge2}!`
console.log(output)
console.log(output2)