// return keyword
// this keyword
// constructor function - aiyesa func jis ko call karte waqt new keyword ka use hota ho.
// prototype - aisi property jo constructor function ke har ek object ke prototype me available ho. or oose use karsake.
// closure -- aiyesa func jo return karta hai ek or func or o used karta hai parent func ka kohi variable ose closer kahete hai.
// event delegation -- kisi ke parent element pe event lagao or tag , id , class name ke basis pe unko target karo or diffrent 
// task perform karo.
// higher order fnc -- aiyesa fnc jo parameter me ek fnc accept kare ya return kare kohi fnc aiyese parent fnc ko higher order fnc kahete hai.
// try and catch -- error ko handle karne keliye use hote hai



// +++++++++++ return keyword ++++++++++++++

// let one = (val1,val2)=>{
//     return (val1 + val2) / 3;
// }

// let result = one(15 ,10);
// console.log(result + 100);//function jo value as a argument bheji gayi oos ko parameter me accept kar raha hai or.
// uske uper kuch task kar ke return bhej raha hai return key word ke help se. oos value ko kisi variable me store kar
//  sakte hai or oos ke uper kuch task perform kar sakte hai.

// let two = (val1,val2)=>{
//     console.log((val1 + val2) / 2);
     
// }

// let result2 = two(15 ,15);
// console.log('i am resilt two' ,result2 + 100); // yaha result me kuch bhi walue nahi hai q ke function se kuch bhi return nahi huva.
//  sirff Undefine return huva , javascript me function agar kuch return nahi karte hai to o undefine by default return karte hai.

// +++++++++++++ this keyword +++++++++++++++++++++++++
// global --- window object
// inside function --- window object
// method (es-5) wala function --- jis object me function ya ye method bani hai o object.
// method (es-6) wala function --- window object.
// method (ES-5) inside function (es-5) ---- window object
// method (ES-5) inside function (es-6) ---- jis object ke method me bana hai o object parent function wala object
// method (ES-6) inside function (es-6) ---- window object
// constructor function mein this ki value ----- new black object.



// this ki global me value --- window object ban jata HTMLDetailsElement.
// console.log(this); //window object

// this ki function (es-5 & es-6) me value --- window object ban jata HTMLDetailsElement.
// function abcd (){
//     console.log(this);
    
// }
// abcd(); // window object
// let arfnc = ()=>{
//     console.log('arrow func es-6',this);
    
// }
// arfnc(); // window object

// method ES-5 ------- value parent object
// let obj = {
//     name:'Sabir',
//     age:31,
//     sayName:function(){
//         console.log(this);
        
//     }

// }
// console.log(obj.name);
// obj.sayName(); // obj vala object.

// method ES-6 --------- window object

// let obj = {
//     name:'Sabir',
//     age:31,
//     sayName:()=>{
//         console.log(this);
        
//     }

// }
// console.log(obj.name);
// obj.sayName(); // window object.

// method insid function ES-5 ---- window object

// let obj = {
//     name:'Sabir',
//     age:31,
//     sayName:function(){
//         console.log(this);
//         function insidMethod (){
//             console.log(this);
            
//         }
//         insidMethod(); // window object function this is big problem
//     }

// }
// obj.sayName(); // obj vala object.
 
// function inside method in ES-5 function as a ES-6 --- object

// let obj = {
//     name:'Sabir',
//     age:31,
//     sayName:function(){
//         console.log(this);
//         insidMethod = ()=>{
//             console.log(this);
            
//         }
//         insidMethod(); // parent function(method) ki value yani object 
//     }

// }
// obj.sayName(); // obj vala object.

// function inside method in ES-6 function as a ES-6 --- window object


// let obj = {
//     name:'Sabir',
//     age:31,
//     sayName:()=>{
//         console.log(this);
//         insidMethod = ()=>{
//             console.log(this);
            
//         }
//         insidMethod(); // window object 
//     }

// }
// obj.sayName(); // window object.

// constructor function -------- new black object

// aisa function ji ko call karte samaye new keywork ka use kiya jaye to o ek blank object (constructor)
// bana ta hai. function new keyword ka use karke use object me value add kar sakte hai.
// note : constructor function declair karne ke liye normal function ES-5 wale function ka use hota hai.
// arrow function ki help se construction function nahi bana sakte.


// function constructorFunc (){

// this.name = 'sabir'
  
//     surname = 'Pathan';
    
// }
// let result = new constructorFunc();
// console.log(result);


// function constFunc (firstName,lastName){
//     this.Fname = firstName;
//     this.Lname = lastName;
// }
// console.log(new constFunc ('Sabir',31));
// console.log(new constFunc ('Muaaz',4)); 


// +++++++++++++ prototype +++++++++++++++++
// aiyesi property jo constructor function ke object me na ho lekin constructor function se banane wale sabhi object oos 
// property ko use kar sake. isliye oos property ko prototype me add kiya jata hai.

// function constFunc (firstName,lastName){
//     this.Fname = firstName;
//     this.Lname = lastName;
// }
// constFunc.prototype.printMyName = function(){
//     console.log(this.firstName);
    
// }
// console.log(new constFunc ('Sabir','Pathan'));
// console.log(new constFunc ('Muaaz','Pathan')); 


// +++++++++++++++++++++ closure +++++++++++++++++++++

// let parentFnc = ()=>{

//     let i = 21;

//     return ()=>{
// i++;
// console.log(i);

//     }
// }
// let ans = parentFnc(); // ans me return kiya huva fnc store hai.
// ans()



// ++++++++++++++++ Event delegation ++++++++++++

// let parent = document.querySelector('.parent');
// parent.addEventListener('click', (e)=>{
//     if(e.target.id === 'play'){
//         console.log('play songs');
        
//     }
//     else if(e.target.id === 'pause'){
//         console.log('pause songs');
        
//     }
// })

// +++++++++++ higher order function ++++++++++++
// function hofn (para){
//     console.log('hello')
//     console.log(para);
    
    

// }

// hofn( ()=>{
    
//     console.log('argument');
    
// })

// let arr = [10,20,30,40]

// arr.forEach((elem) => { //foreach ek higher order function hai q ki o ek function accept kar raha hai.
//     console.log(elem);
    
// });


// +++++++++++++ try catch ++++++++++++++++
// try {
//     // Yeh code run karne ki koshish karega
//     let result = 10 / 0; // Yeh example ke liye hai; zero se divide karna usually error nahi hai
//     console.log("Result is:", result);

//     // Ek deliberate error create karte hain
//     let x = y + 10; // y undefined hai, isliye error aayegi

// } catch (error) {
//     // Agar upar ke block mein koi error hoti hai, to yeh block run hoga
//     console.log("An error occurred:", error.message);
// } finally {
//     // Yeh block hamesha run hoga, chahe error aaye ya nahi
//     console.log("This will always execute");
// }
