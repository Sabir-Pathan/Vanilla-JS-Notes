
let colorName= ['red' , 'green' , 'blue' , '#fafa11','rgb(211,201,205)'];
const btnChangeColor = document.getElementById('btn-change-color');

let colorCode = document.getElementById('color-code');

btnChangeColor.addEventListener('click',()=>{
    let main = document.querySelector('.main')
    // console.log(main);
    let randomNumber = colorIndex()
    main.style.backgroundColor=colorName[randomNumber];
    colorCode.textContent =colorName[randomNumber];
  

    
    
})

function colorIndex (){
    return Math.floor(Math.random()*colorName.length)
}