const form =document.querySelector("#form");
const first_name =document.querySelector("#first_name");
const emailInput =document.querySelector("#email");
const passwordInput =document.querySelector("#password");
const confirmPasswordInput =document.querySelector("#confirm_password");
const error_Message=document.querySelector("#error-message");

form.addEventListener('submit', (e)=>{
// e.preventDefault()
let errors=[];
if(first_name){
    //if we have a first name input, then we are in the sign up
    errors =getSignupInputForm(first_name.value, emailInput.value, passwordInput.value, confirmPasswordInput.value)
}else{
    errors =getLoginFormErrors(emailInput.value, passwordInput.value)
}
if(errors.length>0){
    e.preventDefault();
    error_Message.innerHTML = `
    <ul>
      ${errors.map(err => `<li>${err}</li>`).join('')}
    </ul>
  `;
}
});

function getSignupInputForm(firstname, email, password, confirmPassword){
    let errors=[];
    if(firstname===""||firstname===null){
        errors.push("First name is required");
        first_name.parentElement.classList.add("incorrect");
    }
    if(email===""||email===null){
        errors.push("Email is required");
        emailInput.parentElement.classList.add("incorrect");
    }
    if(password===""||password===null){
        errors.push("Password is required");
        passwordInput.parentElement.classList.add("incorrect");
    }
    if(confirmPassword===""||confirmPassword===null){
        errors.push("You need to confirm your password");
        confirmPasswordInput.parentElement.classList.add("incorrect");
    }
    if(password.length<8){
        errors.push("Password must have at least 8 characters");
        passwordInput.parentElement.classList.add('incorrect');
        confirmPasswordInput.parentElement.classList.add("incorrect");
    }
    if(password!==confirmPassword){
        errors.push("Please make sure both passwords are the same");
        passwordInput.parentElement.classList.add("incorrect");
        confirmPasswordInput.parentElement.classList.add("incorrect");
    }


    return errors;

}
function getLoginFormErrors(email, password){
    let errors=[];

  if(email===""||email===null){
        errors.push("Email is required");
        emailInput.parentElement.classList.add("incorrect");
    }
    if(password===""||password===null){
        errors.push("Password is required");
        passwordInput.parentElement.classList.add("incorrect");
    }

    return errors;
}



const allInputs =[first_name,emailInput, passwordInput, confirmPasswordInput].filter(input=>input !=null);
allInputs.forEach(input =>{
    input.addEventListener('input', ()=>{
       if(input.parentElement.classList.contains("incorrect")){
        input.parentElement.classList.remove('incorrect');
        error_Message.innerText='';
       }
    })
})
