const nameField = document.getElementById('name');
const email = document.getElementById('mail');
const submit = document.getElementById('submit');
const input = document.querySelectorAll('input');

nameField.addEventListener('input', (e) => {
    
    if(nameField.value == null || nameField.value.trim() == '') {
        nameField.setCustomValidity('Name cannot be blank')
    } else {
        nameField.setCustomValidity('');
    }
});

email.addEventListener('input', (e) => {
    if(email.validity.typeMismatch) {
        email.setCustomValidity('Please Enter a Valid Email Address');
    } else {
        email.setCustomValidity('');
    }
});

//this will be later on after completing validity checks
//may use HTMLInputElement??
/*submit.addEventListener('click', (e) => {
    input.forEach(input => {
        if(input.value === ''){
            e.preventDefault();
            console.log('no')
        }
        if(input.checkValidity() === false){
            e.preventDefault();
            console.log('not valid')
        }
    })
})*/
