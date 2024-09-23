let users =[
    {
        srNo:1,
        name:'rohit',
        age:20,        
    },
    {
        srNo:2,
        name:'kiran',
        age:17,
        address:{
            country :'India'
        },
        skills: ['JavaScript', 'HTML', 'CSS']
    },
    {
        srNo:3,
        name:'amar',
        age:16, 
        city:'Pune',  
        skills: ['Python', 'Django']     
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

