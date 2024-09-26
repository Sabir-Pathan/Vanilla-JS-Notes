// variable for assign value

let count = 0;

// selectors
let value = document.getElementById('value')
let btns = document.querySelectorAll('.btn');
btns.forEach(btn => {
    // console.log(btn);
    btn.addEventListener('click',(e)=>{
        let className=e.currentTarget.classList;
        console.log(className);
        
        if(className.contains('increase')){
            count ++;
            value.innerText = count;
            
        }
        else if(className.contains('reset')){
            count =0;
            value.innerText = count;

        }
        else{
            count --;
            value.innerText = count;
        }

       
    })

    
});

