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

// fetch('https://randomuser.me/api/')
//     .then((response) =>{
        
//       return response.json() // received data readable format me nahi hota hai, ese json format me convert karna padta hai. 
//         })
//     .then((data) => {
//     return console.log(data) // response ko data me accept kar ke hum use kar sakte hai.
//     });


    // ++++++++++++++ axios.get() +++++++++++++

// axios.get('https://randomuser.me/api/')

// .then((data) => {
// return console.log(data) 
// });// received data direct use kar sakte hai. axios.get() method me usesable format (json) me data milta hai. is liye sirf ek bar .then() method ka use hota hai. //axios.get() method use karne keliye html me cdn patha dena zaruri hota hai nahi to hum axios.get() method use nahi kar sakte erro aayenga.<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>


// ++++++++++++++ new promise() +++++++++++++

//  url (API) se jada mangaya jata hai oos ki teen state hoti hai.
// Pending: Jab promise create hota hai aur abhi tak resolved ya rejected nahi hua.
// Fulfilled: Jab operation successful ho jata hai aur result mil jata hai.
// Rejected: Jab operation fail ho jata hai aur error aati hai.

// jo bhi data aayenga use ek variable me save karna padenga.
// promise ek fnc accept kar ta hai or 2 parameter accept karta hai jo 2 state ke bareme hoti hai ek to request resolve hongi ya to reject hongi. data aayenga ya to fir nahi aayenga. ye 2 parameter ek method(fnc) hote hai.

let result = new Promise ((resolve , reject)=>{

fetch('https://randomuser.me/api/')
    .then((response) =>{
        
      return response.json() // received data readable format me nahi hota hai, ese json format me convert karna padta hai. 
        })
    .then((data) => {
    //  console.log(data.results[0].gender) // response ko data me accept kar ke hum use kar sakte hai. yaha received data me ek object hai is me 1 results name se array mila ji me oos ke 0 index me ek object mila ji ki kohi bhi property accept kar sakte hai.
  if((data.results[0].gender)=== "male"){ // received data me gender male hai to ye code chalenga. yani jo chahte the o result mila is liye 
    resolve();  
  }
  else{
    reject();
  } 
  

    });
});

// console.log(result); //result hamesh pending state me dikhayenga q ke promise ek async code hai to o side stack me jayenga or ye wala jo console.log hai or synchronous code hai isliye ye pahele chalenga.

// ab aaya huva out put sahi honga ya to galat honga is basis pe hume humara kam karna honga. aaya huva data result name ke variable me store kiya huva hai. agar result true honga to hum .then() method chalayenge nahi to .catch() method chalayenge.
// dono bhi method ek function accept karte hai.

result
.then( ()=>{

  console.log('male user aaya request resolve huvi');
} )
.catch(()=>{
  console.log('female user aayi request reject huvi');
  
})


