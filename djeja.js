// var rahma = document.getElementById('title')

// rahma.style.color = "red"

// var paragraphes = document.getElementsByTagName('p')

// console.log(paragraphes)
// paragraphes.style.color = "green"

// paragraphes[0].style.color = "orange"
// paragraphes[1].style.color = "orange"
// paragraphes[2].style.color = "orange"

// var para = document.getElementsByClassName('para')

// console.log(para)

// var onePara = document.querySelector('.para')

// console.log(onePara)

// var plusieursPara = document.querySelectorAll('.para')
// console.log(plusieursPara)
// plusieursPara[0].style.color = 'red'


// var divM = document.getElementById('main')

// console.log(divM)
// console.log(divM.innerHTML)
// console.log(divM.innerText)

// var title = document.getElementById('title')

// console.log(title)
// console.log(title.nextElementSibling.nextElementSibling)

// var para = document.querySelector('p')
// // console.log(para.previousElementSibling)

// console.log(para.parentElement)

// var divM = document.getElementById('main')
// var butt = document.createElement('button')
// butt.innerText = "Click me Rahma"
// divM.appendChild(butt)

// var title = document.getElementById('title')

// title.setAttribute('class','money')

function Hello(){
    alert("Hello madame Rania")    
}


// var btnPlus = document.querySelector('.btnPlus')

// btnPlus.addEventListener('click',function(){
//     btnPlus.previousElementSibling.innerText++
// })






// var btnMoins = document.querySelector('.btnMoins')


// btnMoins.addEventListener('click',function(){

//     if (btnMoins.nextElementSibling.innerText > 0) {

//         btnMoins.nextElementSibling.innerText--
        
//     }


    
// })

var btnsPlus = document.querySelectorAll('.btnPlus')
var btnsMoins = document.querySelectorAll('.btnMoins')

console.log(btnsPlus)

for(let i = 0; i <btnsPlus.length; i++){
    btnsPlus[i].addEventListener('click',function(){
        btnsPlus[i].previousElementSibling.innerText++
    })
}



for (let i = 0; i < btnsMoins.length; i++) {
    btnsMoins[i].addEventListener('click',function(){
        if (btnsMoins[i].nextElementSibling.innerText>0) {
            btnsMoins[i].nextElementSibling.innerText--
        }
        
    })
    
}