const heading = document.getElementById('Hello')
//const heading2 = document.getElementsByTagName('h2')[0]
//const heading2 = document.getElementsByClassName('h2-class')[0]
//const heading2 = document.querySelector('.h2-class') // более универсальный чем getElemtntById
const heading2 = document.querySelector('#sub-hello') // возвращает всегда 1 элемент


console.dir(heading2)

//const heading3 = heading2.nextElementSibling
const h2List = document.querySelectorAll('h2')
console.log(h2List)
const heading3 = h2List[h2List.length - 1]
const heading4 = h2List[h2List.length]
//console.log(h3List)
//console.log(heading3)
//console.dir(heading.textContent)

setTimeout(() => {
    addStylesTo(heading, 'JavaScript')
}, 1500)


setTimeout(() => {
    addStylesTo(heading2, 'Практикуйся', '2rem' )
}, 3000)


setTimeout(() => {
    addStylesTo(heading3, 'И всё получится')
}, 4500)


 setTimeout(() => {
     addStylesTo(heading4, 'Даже не сомневайся!!')
 }, 5500)



function addStylesTo(node, text, color = 'red', backgroundColor = 'blue', fontSize) {
    node.textContent = text
    node.style.color = color
    node.style.textAlign = 'center'
    node.style.backgroundColor = backgroundColor
    node.style.padding = '2rem'
    // falsy: '', undefined, null, 0, false
    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

heading.onclick = () => {
    if (heading,style.color === 'red') {
       heading.style.color = 'black'
       heading.style.backgroundColor = 'blue' 
    } else {
        heading.style.color = 'red'
        heading.style.backgroundColor = 'white' 
    }
}


heading2.addEventListener('dblclick', () => {
    if (heading,style.color === 'red') {
        heading.style.color = 'black'
        heading.style.backgroundColor = 'blue' 
     } else {
         heading.style.color = 'red'
         heading.style.backgroundColor = 'white' 
     }
 })

