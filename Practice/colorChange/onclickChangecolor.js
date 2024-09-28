let btn = document.getElementById('btncontainer');
btn.addEventListener('click',(e)=>{
    
    if(e.target.tagName === 'BUTTON'){
        let colorName = e.target.id;
        console.log(colorName);
        document.body.style.backgroundColor = colorName;

    }
    })