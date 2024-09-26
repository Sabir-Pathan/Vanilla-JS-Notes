// array declaration for hex code
let colorName= [1,2,3,4,5,6,7,8,9,'A','B','C' ,'D','E','F'];

// HTML element selection
const btnChangeColor = document.getElementById('btn-change-color');
let colorCode = document.getElementById('color-code');

// Add Event Listener

btnChangeColor.addEventListener('click',()=>{
    // variabl declaration for store hex code number

    let hexCode = '#';
// for loom run 6 time for store 6 random hex code array index 
    for(let i=0; i<6; i++){
hexCode += colorName[randomNumber()]; 
    }

    // function declaration for return random array index number

    function randomNumber (){
        
        return Math.floor(Math.random()*colorName.length)
    }

    document.body.style.backgroundColor=hexCode;
    colorCode.innerText=hexCode;
})