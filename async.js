// asynchronous and synchronous :-> javascript me code exucute main thread me hota hai. javascript ek single thread language hai. ji me code line by line execute hota hai.  asynchrounous code side stack (call back queb) me execute kiya jata hai. jab bhi main stack ka code pura execute hota hai or main stack empty hone ke bad callback queb wala code main stack me move kiya jata hai jo jis ka execution pura huva ho oose. main stack khali huva kya nahi or callback queb ka kosa code execute huva or callback queb ka code main stack me move karne ka kam event loop karta hai.

// asynchronous code ko identefy kaise kare ?
// simple sa hai. in 5 type se asynchronous code likha jata hai.
// 1)setTimeOut - aiyesa code jo kuch time bad chalana ho.
// 2)setInterval - aiyesa code jo kuch time bad barbar chalana ho.jabtab nahi rukenga tab ise na roke. rok nekeliye  clearInterval() ka used kiya jata hai hai or setInterval ka name pass kiya jata hai.
// 3)fetch API - kisi url or (API) se data lana ho ya bhejna ho.aaye huve data ko .then() method me accept karte hai. .then() ko (callback function) bhi kahe sakte hai q ke .then () ek function accept karta as a argument. oos function ke parameter me API or url ko store kar ta hai.
// 4)axios - kisi url (API) se data lana ho ya bhejna ho,same as fetch ki tara hi hai fark sirf itna hai ki ye thoda userfriendly hai.
// 5)Promise - promise ke andhar jo code likha jata hai o code callback queb me move ho jata hai or jab code execute hota hai to oose code main stack me laya jata hai.



// +++++++++ setTimeOut +++++++++
// console.log('hello1');
// console.log('hello2');
// setTimeout (()=>{
//     console.log('hello3');

// },1000)
// console.log('hello4');


// ++++++++++ setInterval +++++++++
// let count = 0;
// console.log('hello1');
// console.log('hello2');

// let stopSetInterval = setInterval (()=>{
    
//     count ++;
//     console.log('hello3' ,count);

// if(count == 3){
// clearInterval (stopSetInterval)
// }


// },1000)
// console.log('hello4');

// ++++++++++++++ fetch () +++++++++++++

fetch('https://randomuser.me/api/')
    .then((response) =>{
        
      return response.json() // received data readable format me nahi hota hai, ese json format me convert karna padta hai. 
        })
    .then((data) => {
    return console.log(data) // response ko data me accept kar ke hum use kar sakte hai.
    });
