let form = document.getElementById('empForm');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let id = document.getElementById('id').value;
    console.log(`ID: ${id}`);
    let name= document.getElementById('name').value;
    console.log(`Name: ${name}`);
    let ext = document.getElementById('ext').value;
    console.log(`Extension: ${ext}`);
    let email = document.getElementById('email').value;
    console.log(`Email: ${email}`);
    let department = document.getElementById('department').value;
    console.log(`Department: ${department}`);
})

//Attempt with helper function
// const form = (id) => document.getElementById(id);
// form.addEventListener('submit', function(event){
//     event.preventDefault();
//     let id = form('id').value;
//     console.log(id);
// })
