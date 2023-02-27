const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const tel = document.querySelector("#tel");
const password = document.querySelector("#password");
const repassword = document.querySelector("#repassword");

function error(input, message){
    input.className = "form-control is-invalid"
    const div = input.nextElementSibling;
    div.innerText = message;
    div.className = "invalid-feedback mt-1 mb-2";
};
function success(input){
    input.className = "form-control mb-3 is-valid"
};
function checkEmail(input) {
     const re =  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     if(!re.test(input.value)){
        error(input, "Hatalı E-Posta Adresi");
     }else{
        success(input);
     }
};
function checkRequired(inputs){
    const re = /^[a-zA-Z0-9]+$/
    inputs.forEach(function(input){
        if(input.value === ""){
            error(input, `${input.value}Boş Bırakılamaz.`);
        
        }else if(!re.test(input.value)){
            error(input, "Boşluk Bırakılamaz.")
        }
        else{
            success(input);
        }
    });
};
function checkPassword(input1, input2){
    if(input1.value !== input2.value){
        error(input1,"Şifre Eşleşmiyor");
        error(input2,"Şifre Eşleşmiyor");
    }
};

form.addEventListener("submit", function(e){
    e.preventDefault();
    checkRequired([username,email,tel,password,repassword]);
    checkEmail(email);
    checkPassword(password, repassword);
});
