// asynchronous and synchronous :-> javascript me code exucute main thread me hota hai. javascript ek single thread language hai. ji me code line by line execute hota hai.  asynchrounous code side stack (call back queb) me execute kiya jata hai. jab bhi main stack ka code pura execute hota hai or main stack empty hone ke bad callback queb wala code main stack me move kiya jata hai jo jis ka execution pura huva ho oose. main stack khali huva kya nahi or callback queb ka kosa code execute huva or callback queb ka code main stack me move karne ka kam event loop karta hai.

// asynchronous code ko identefy kaise kare ?
// simple sa hai. in 5 type se asynchronous code likha jata hai.
// 1)setTimeOut - aiyesa code jo kuch time bad chalana ho.
// 2)setInterval - aiyesa code jo kuch time bad barbar chalana ho.jabtab nahi rukenga tab ise na roke. rok nekeliye  clearInterval() ka used kiya jata hai hai or setInterval ka name pass kiya jata hai.
// 3)fetch API - kisi url or (API) se data lana ho ya bhejna ho.aaye huve data ko .then() method me accept karte hai. .then() ko (callback function) bhi kahe sakte hai q ke .then () ek function accept karta as a argument. oos function ke parameter me API or url ko store kar ta hai.
// 4)axios - kisi url (API) se data lana ho ya bhejna ho,same as fetch ki tara hi hai fark sirf itna hai ki ye thoda userfriendly hai.
// 5)Promise - promise ke andhar jo code likha jata hai o code callback queb me move ho jata hai or jab code execute hota hai to oose code ko main stack me laya jata hai.

//callback - ayesa fnc jo pass kiya jata hai as argument or oose accept kiya jata hai as parameter. jab fnc call kiya jata hai or o fnc chalta hai to callback fnc ko oos fnc ke andhar call kiya ja ta hai.

// async await - jab bhi kisi function ke aaghe async likha jata hai to wo ek asynchronus code banjata hai.
// or oos fnc me kuch ayesa code likha jaye jo synchronous ho or oose without asynchronous wale code complete hone kebad chalana ho to oos link ke aaghe await likhna padenga.

// event loom -

// generators -

// webworker -


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

// let result = new Promise ((resolve , reject)=>{

// fetch('https://randomuser.me/api/')
//     .then((response) =>{
        
//       return response.json() // received data readable format me nahi hota hai, ese json format me convert karna padta hai. 
//         })
//     .then((data) => {
//     //  console.log(data.results[0].gender) // response ko data me accept kar ke hum use kar sakte hai. yaha received data me ek object hai is me 1 results name se array mila ji me oos ke 0 index me ek object mila ji ki kohi bhi property accept kar sakte hai.
//   if((data.results[0].gender)=== "male"){ // received data me gender male hai to ye code chalenga. yani jo chahte the o result mila is liye 
//     resolve();  
//   }
//   else{
//     reject();
//   } 
  

//     });
// });

// // console.log(result); //result hamesh pending state me dikhayenga q ke promise ek async code hai to o side stack me jayenga or ye wala jo console.log hai or synchronous code hai isliye ye pahele chalenga.

// // ab aaya huva out put sahi honga ya to galat honga is basis pe hume humara kam karna honga. aaya huva data result name ke variable me store kiya huva hai. agar result true honga to hum .then() method chalayenge nahi to .catch() method chalayenge.
// // dono bhi method ek function accept karte hai.

// result
// .then( ()=>{

//   console.log('male user aaya request resolve huvi');
// } )
// .catch(()=>{
//   console.log('female user aayi request reject huvi');
  
// })


// ++++++++++++++++++++++ callback ++++++++++++++++++++++

// ayesha fnc jo pass kiya jata hai dusre fnc me oose callback kahte hai.

// function abcd (val1 , callbackfnc){ // parameter me ek value or ek fnc accept kiya gaya hai.
// callbackfnc(); // callback fnc ko call kiya gaya hai.
// }
// abcd(20 , ()=>{ // yaha abcd fnc ko call kiya hai or oos me ek value or ek fnc pass kiya gaya hai. is fnc ko callback fnc kahete hai.
//   console.log('callback chala');
  
// });

// exapmle:-
// iska use mainly use tab hota hai jab aync code exicute hota hai.

// function someAsyncode (url , callbackfnc) { // yaha as parameter ek url or ek callback fnc accept kiya ja raha hai
// fetch(url) // parameter me jo url received hone vala hai o fetch me accept kiya ja raha hai.
// .then((rowdata) => rowdata.json()) // received data ko .then method me accept kiya gaya or oose json format me convert kar ke ,then() me store kiya gaya hai.

// .then((result) =>
//   //isme jo first wali .then() method ne jo json format wala data return kiya tha o rowdata ko result name ke parameter me accept kiya hai. or ab .then ke parameter ke result parameter me url ka data store hai.
//   {
//     // console.log(result)

//     callbackfnc( result)//yaha callback function ko call kar ke oos me result wale data ko pass kiya hai jo url se data mila hai.
//   })
// }

// someAsyncode( `https://randomuser.me/api/`, (result)=>{ // yaha se someAsyncode fnc ko call kiya gaya hai jime ek url or ek callback function bheja gaya hai. jo callback fnc hai o ek parameter accept kar raha hai jis me jo url se aaya huva data accept kiya gaya hai or oos result me aaye data se kuch kam karwa sakte hai. note => parameter ka name kuch bhi rakh sakte hai. or callback fnc ka code ayesa likhna hai ke data aachuka hai ye man kar.

//   console.log(`Name: ${result.results[0].name.first}, Gender : ${result.results[0].gender} , Email : ${result.results[0].email}`);
//   // result me ek object mila hai results name se or oos me ek hi object hai 0 index  pe or is object ke hum data ko accept kar sakte hai.
  
// })

// ++++++++++++ async await +++++++++++++

//  function asyn() {
//   console.log('hello1');
//   let data = fetch (`https://randomuser.me/api/`) //ye ek async code hai.

//   console.log('hello2');
// console.log(data); // yaha jo data variable hai o ek async code hold kar raha jo ek promise hai. or console.log() ek synchronous code hai. yaha fetch wala code side stack pe jayenga or baki code exicute hojayenga ji ki waja se data ka status pending rahenga

// console.log('hello3');


// }
// asyn()

// async function asyn() {
//   console.log('hello1');
//   let data = await fetch (`https://randomuser.me/api/`) //ye ek async code hai. fir bhi jabtak ye code exicute na hojaye aaghe ki line nahi chalengi q k is fnc ke aaghe async or is line ke aaghe await lagaya hai.

//   console.log('hello2');
//  console.log(data); // ab is line me data milenga q ke fetch() ke aaghe await likha tha.

// console.log('hello3');


// }
// asyn()


abcd1()
let abcd1 = function abcd (){
    let x = 2;
    console.log(x);
    
}
