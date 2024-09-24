let users =[
    {
        srNo:1,
        name:'rohit',
        age:20,   
        hobbies: [
            { name: 'Cricket', level: 'Expert' },
            { name: 'Cooking', level: 'Beginner' }
          ]     
    },
    {
        srNo:2,
        name:'kiran',
        age:17,
        address:{
            country :'India'
        },
        skills: ['JavaScript', 'HTML', 'CSS'],
        hobbies: [
            { name: 'Swimming', level: 'Intermediate' }
          ]
    },
    {
        srNo:3,
        name:'amar',
        age:16, 
        city:'Pune',  
        skills: ['Python', 'Django'],
        hobbies: []     
    },
    {
        srNo:4,
        name:'sanket',
        age:21,  
        city:'Aurangabad', 
        address:{
            country :'India'
        }     
    }
];

// function userdetails (users){
//     return users.map(user=>`User Name is: ${user.name} and Age is: ${user.age}`);
// }
// console.table(userdetails(users));


// ########################################

//2) Display Name & age
// function displayUser (users){
//     let userDetails = document.getElementById('userdetail');

//     users.map(user=>{
//         let listItem = document.createElement('li');
//         listItem.textContent = `Name : ${user.name} Age: ${user.age}`;
//         userDetails.appendChild(listItem);
//     })
    
// }
// displayUser(users);

// ############################################################
// 3)display user detail on webpage
// function showUserDetails(users) {
//     let userDetails = document.getElementById('userdetail');

//     return users.map(user => {
//         let listUsers = document.createElement('li');

//         // Handle city and address properties safely
        // let city = user.city ? user.city : 'N/A';  // Default to 'N/A' if city doesn't exist
//         let country = user.address && user.address.country ? user.address.country : 'N/A';  // Default to 'N/A' if address or country doesn't exist

//         listUsers.textContent = `Name: ${user.name.toUpperCase()}  Age: ${user.age}  City: ${city}  Country: ${country}`;

//         userDetails.appendChild(listUsers);
//     });
// }

// showUserDetails(users);


// #################################################################################
// 4)show users detail on webpage in table format

// function userDetail (users){
//     let userData = document.getElementById('userdata')
//     return users.map(user =>{
//         // console.log(user);
// let city = user.city ? user.city:'N/A';
// let country = user.address && user.address.country ? user.address.country:'N/A';
// userData.innerHTML += `<tr>
// <td> ${user.srNo}</td>
// <td> ${user.name.toUpperCase()}</td>
// <td> ${user.age}</td>
// <td> ${city}</td>
// <td> ${country}</td>
// </tr>`;

//     })
// }

// userDetail(users)

// ############################################################################################

// 5)Display userdetail on webpage skills if vailable

// function showUserDetails (user){
//     let userdetails = document.getElementById('userdata');

//     return users.map(user=>{
// // console.log(user);

// let city = user.city ? user.city:'N/A';
// let country = user.address && user.address.country ? user.address.country:'N/A';
// let skills = user.skills ? user.skills:'No skill';
// // console.log(user.name);

// userdetails.innerHTML +=`<tr>
// <td>${user.srNo}</td>
// <td>${user.name}</td>
// <td>${user.age}</td>
// <td>${city}</td>
// <td>${country}</td>
// <td>${skills}</td>
// </tr>`


//     })
// }

// showUserDetails(users)

// #####################################################################################
// 6)display user data on webpage skills and hobbies

// function showUserDetails (users){
//     let userDetail = document.getElementById('userdata');

//     return users.map(user=>{
//         // console.log(user);

//         let city = user.city ? user.city : 'N/A';
//         let country = user.address && user.address.country ? user.address.country : 'N/A';
//         let skills = user.skills ? user.skills : 'N/A';
//         let hobbies = user.hobbies && user.hobbies.length > 0 ? user.hobbies.map(hobby=>`${hobby.name} `).join(',') : 'N/A';
//         let level = user.hobbies && user.hobbies.length > 0 ? user.hobbies.map(hobby=>`${hobby.level} `).join(',') : 'N/A';

//         userDetail.innerHTML +=`<tr>
// <td>${user.srNo}</td>
// <td>${user.name}</td>
// <td>${user.age}</td>
// <td>${city}</td>
// <td>${country}</td>
// <td>${skills}</td>
// <td>${hobbies}</td>
//  <td>${level}</td>

// </tr>` 
        
//     });
// };

// showUserDetails(users)


// ##############################################################################
// 7)Sort array

let arrFruits = ['Apple' , 'Mangor' , 'Watermelon' , 'graps' , 'Banana'];
let arrNumber = [100,20,4,7,5,3,200,50,11,45,6,150,1];
let arr = ['string1','string4','string5','Mango','string2','string3','Apple2'];
// arrFruits.sort();
// console.log(arrFruits);

// sort mathod array ke element ko by default lexicographic (dictionary order) sort karta hai oos array ko string man kar ji ki waja se number ke array ke sorting sahi se nahi hoti, esliye compareFunction ka used hota hai.

// arrNumber.sort();
// console.log(arrNumber);

// arrNumber.sort((a,b)=>a-b );

// compareFnc 2 parameter accept karta hai or oos ke bas par array ko accending ya desending order me sort karta hai.
// agar value positive hai to swap nahi honga next element ke sath compare honga , agar value negative haongi to value apas me swap hongi , agar value zero 0 hongi to no change next value se compare honga.ye process chalti raheti hai jab tak pura array sort na hojaye.

// console.log(arrNumber);

// decending sort

// arrNumber.sort((a,b)=>b-a);
// console.log(arrNumber);



// same string ko number base ke hisab se comparison karta hai. 
// arr.sort((a,b)=>a.localeCompare (b));

// console.log(arr);

// decendind sort
// arr.sort((a,b)=>b.localeCompare(a));
// console.log(arr);


let employees = [
    {name:'Rohan', age: 25, jobTitle: 'Software Developer'},
    {name:'Abrar', age: 23, jobTitle: 'Android Developer'},
    {name:'Ranjeet', age: 21, jobTitle: null}, // null value here
    {name:'Mohit', age: 27, jobTitle: 'Backend Developer'}
];

function displayEmployeeData(employees) {
    let empData = document.getElementById('empdata');
    
    // Clear any previous data
    empData.innerHTML = ''; 
    
    employees.forEach(emp => {
        let job = emp.jobTitle ? emp.jobTitle : 'N/A'; // Handling null value for jobTitle

        empData.innerHTML += `<tr>
            <td>${emp.name}</td>
            <td>${emp.age}</td>
            <td>${job}</td>
        </tr>`;
    });
}

// Function to sort employees by age
function sortByAge(employees) {
    employees.sort((a, b) => a.age - b.age);
    displayEmployeeData(employees); // Re-display sorted data
}

// Initial display of employee data
displayEmployeeData(employees);

// Sorting on button click
let sortBtn = document.getElementById('sort');
sortBtn.addEventListener('click', () => {
    console.log('Sorting by age...');
    sortByAge(employees);
});