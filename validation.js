/*Membership app form validation*/
const appName = document.getElementsByClassName('appName')[0];
appName.addEventListener('input', ()=>{
    const fullName = document.getElementsByClassName('fullName')[0];
    //const nameRegExp =  "^[A-Za-z][A-Za-z0-9_]{7,29}$"; 
    const nameRegExp =  "^[A-Za-z][A-Za-z0-9_ ]{5,29}$";
    if(appName.value.match(nameRegExp)){
        fullName.innerHTML="<i class='fa-solid fa-circle-check'></i>&nbsp;Your name is valid.";
        fullName.classList.add('valid');
        fullName.classList.remove('invalid');
    }else{
        fullName.innerHTML ="<i class='fa-solid fa-circle-xmark'></i>&nbsp;Invalid name(Must contains at least 6 characters and cannot start with the number.)"
        fullName.classList.add('invalid');
        fullName.classList.remove('valid');
    }
})
/*-------------end of name -----------------------------*/
const appEmail = document.getElementsByClassName('appEmail')[0];
appEmail.addEventListener('input', ()=>{
    const checkAppEmail = document.getElementsByClassName('checkAppEmail')[0];
    const emailRegExp =  /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    if(appEmail.value.match(emailRegExp)){
        checkAppEmail.innerHTML = "<i class='fa-solid fa-circle-check'></i>&nbsp;Your email is valid.";
        checkAppEmail.classList.add('valid');
        checkAppEmail.classList.remove('invalid');
    }else{
        checkAppEmail.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>&nbsp;Invalid Email(Must contain @, gmail.com)"
        checkAppEmail.classList.add('invalid');
        checkAppEmail.classList.remove('valid');
    }
})
/*-------------End of email--------------------------*/
const appPhone = document.getElementsByClassName('appPhone')[0];
appPhone.addEventListener('input', ()=>{
    const checkAppPhone = document.getElementsByClassName('checkAppPhone')[0];
    const phoneRegExp =  "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$";
    if(appPhone.value.match(phoneRegExp)){
        checkAppPhone.innerHTML = "<i class='fa-solid fa-circle-check'></i>&nbsp;Your phone number is valid.";
        checkAppPhone.classList.add('valid');
        checkAppPhone.classList.remove('invalid');
    }else{
        checkAppPhone.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>&nbsp;Invalid Phone(no character, no letter)"
        checkAppPhone.classList.add('invalid');
        checkAppPhone.classList.remove('valid');
    }
})
/*----------End of phone section -------------*/

const appDate = document.getElementsByClassName('appDate')[0];
appDate.addEventListener('input',()=>{
    const checkAppDate = document.getElementsByClassName('checkAppDate')[0];
    if(checkAppDate.value == ""){
        checkAppDate.innerHTML="<i class='fa-solid fa-circle-xmark'></i>&nbsp;You must choose the date."
        checkAppDate.classList.add('invalid');
        checkAppDate.classList.remove('valid');
    }else{
        checkAppDate.innerHTML="<i class='fa-solid fa-circle-check'></i>&nbsp;Valid Date"
        checkAppDate.classList.add('valid');
        checkAppDate.classList.remove('invalid');
    }
})
/*start of weight*/
const appWeight = document.getElementsByClassName('appWeight')[0];
appWeight.addEventListener('input', ()=>{
    const checkAppWeight = document.getElementsByClassName('checkAppWeight')[0];
    if(appWeight.value.length>3 || appWeight.value.length<2){
        checkAppWeight.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>&nbsp;Invalid weight."
        checkAppWeight.classList.add('invalid');
        checkAppWeight.classList.remove('valid');
        
    }else{
        
        checkAppWeight.innerHTML = "<i class='fa-solid fa-circle-check'></i>&nbsp;Valid Weight";
        checkAppWeight.classList.add('valid');
        checkAppWeight.classList.remove('invalid');
    }
})
/*------------start of app height--*/
const appHeight = document.getElementsByClassName('appHeight')[0];
appHeight.addEventListener('input', ()=>{
    const checkAppHeight = document.getElementsByClassName('checkAppHeight')[0];
    if(appHeight.value.length<2 || appHeight.value.length>2){
        checkAppHeight.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>&nbsp;Invalid Height."
        checkAppHeight.classList.add('invalid');
        checkAppHeight.classList.remove('valid');
        
    }else{
        
        checkAppHeight.innerHTML = "<i class='fa-solid fa-circle-check'></i>&nbsp;Valid Height";
        checkAppHeight.classList.add('valid');
        checkAppHeight.classList.remove('invalid');
    }
})

/*__________________________________Subscribe Form Validation____________________________________*/
