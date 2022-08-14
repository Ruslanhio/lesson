const cars = ['Мазда', 'Форд', 'БМВ', 'Мерседес']

const fib = [1, 1, 2, 3, 5, 8, 13]
//console.log(cars)

cars.push('Рено')  // метод

//console.log(cars)
// cars.unshift('Волга')
// const firstItem = cars.shift()
// const lastCar = cars.pop()
// console.log(firstItem)
// console.log(lastCar)
// console.log(cars)

//console.log(cars.reverse())
//console.log(cars)

//const index = cars.indexOf('БМВ')
//const index = people.findIndex(function(person) {
// const person = people.find(function(person) {
//    return person.budget === 3800

// })
//const person = people.find((person) => {    // упрощаем выше const person
//   return person.budget === 3800
//})
//console.log(person)

//const person = people.find(person => person.budget === 3800)  // можно еще упростить
//console.log(person)


// console.log(person)
//cars[index] = 'Porsche'
//console.log(cars)

//console.log(cars.includes('Мазда'))

// const upperCaseCars = cars.map(car => car.toUpperCase())

// const pow2 = num => num ** 2
// const sqrt = num => Math.sqrt(num)
// const pow2fib = fib.map(pow2).map(Math.sqrt) 
// console.log(pow2fib)
// console.log(cars)

// const pow2 = num => num ** 2
// const pow2Fib = fib.map(pow2)
// const filteredNumbers = pow2Fib.filter(num => num > 20)  

// console.log(pow2Fib)
// console.log(filteredNumbers)









// Задача 1
// const text = 'Привет, мы изучаем JavaScript'
// const reverseText = text.split('').reverse().join('')
// console.log(reverseText)
// let findedPerson
// for (const person of people) {
//     if (person.budget === 3800) {
//         findedPerson = person
//     }
// }

// console.log(findedPerson)

const people = [
    { name: 'Ruslan', budget: 4200 },
    { name: 'Elena', budget: 3800 },
    { name: 'Anton', budget: 2000 }
]

const allBudget = people
.filter(person => person.budget > 2100) 
.reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)
console.log(allBudget)



