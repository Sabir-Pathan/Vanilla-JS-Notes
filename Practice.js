// return keyword
// this keyword




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

let constructorFunc = ()=>{

    console.log(this);
    
}
new constructorFunc();