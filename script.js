const form = document.getElementById('form');
const email = document.getElementById('email');

// Show input error message
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success message
function showSuccess(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control success'; 
}
// Event Listeners
form.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(email.value === ''){
        showError(email, 'Email address is required');
    } else{
        showSuccess(email);
    }
})