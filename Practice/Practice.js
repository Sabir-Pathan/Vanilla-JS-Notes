let users =[
    {
        name:'rohit',
        age:20,        
    },
    {
        name:'kiran',
        age:17,
    },
    {
        name:'amar',
        age:16,        
    },
    {
        name:'sanket',
        age:21,        
    }
];

function userdetails (users){
    return users.map(user=>`User Name is: ${user.name} and Age is: ${user.age}`);
}
// console.table(userdetails(users));


function displayUser (users){
    let userDetails = document.getElementById('userdetail');
}
