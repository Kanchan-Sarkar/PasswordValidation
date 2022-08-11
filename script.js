let new_password = document.querySelector('.new-password-input ');
let confirm_password = document.querySelector(' .confirm-password-input');
let message = document.querySelector('.message');
let container = document.querySelector('.container');

let passToggle =()=>{
    if(new_password.type === 'password' && confirm_password.type === 'password')
    {
        new_password.type = 'text';
        confirm_password.type = 'text';
        document.querySelector('.fa-eye-slash').getElementsByClassName.visibility = 'visible';
        document.querySelector('.fa-eye').getElementsByClassName.visibility = 'hidden';
    }else{
        new_password.type = 'password';
        confirm_password.type = 'password';
        document.querySelector('.fa-eye-slash').getElementsByClassName.visibility = 'hidden';
        document.querySelector('.fa-eye').getElementsByClassName.visibility = 'visible';
    }
}

let passCheck =()=>{
    if(new_password.value != " && confirm_password.value != "){
        if(new_password.value.length >= 8 && confirm_password.value.length >= 8){
            if(new_password.value == confirm_password.value){
                container.style.height = '448px';
                message.style.display = 'block';
                message.innerHTML = '<i class="fas fa-circle-check"></i> Both Passwords matched.';
                message.style.color = 'green';
                
            }else{
                container.style.height = '448px';
                message.style.display = 'block';
                message.innerHTML = '<i class="fas fa-triangle-exclamation"></i> Both Passwords matched.';
                message.style.color = 'red';
            }
        }
        if(new_password.value.length < 8 && confirm_password.value.length < 8){
            container.style.height = '448px';
                message.style.display = 'block';
                message.innerHTML = 'Please Fill Atleast 8 characters';
        }
    }
    if(new_password.volue == '' && confirm_password.value == ''){
            container.style.height = '448px';
            message.style.display = 'block';
            message.innerHTML = 'Please Enter Your Password.';
    
    }
}