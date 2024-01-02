/*Subscriber Form Validation*/
const subscriberName = document.getElementsByClassName('subscriberName')[0];
subscriberName.addEventListener('input', ()=>{
    const checkSubName = document.getElementsByClassName('checkSubName')[0];
    const subnameRegExp =  "^[A-Za-z][A-Za-z0-9_ ]{5,29}$";
    if(subscriberName.value.match(subnameRegExp)){
        checkSubName.innerHTML = "<i class='fa-solid fa-circle-check'></i>&nbsp;Your name is valid.";
        checkSubName.classList.add('valid');
        checkSubName.classList.remove('invalid');
    }else{
        checkSubName.innerHTML="<i class='fa-solid fa-circle-xmark'></i>&nbsp;Invalid name(must contains at least 6 characters)";
        checkSubName.classList.remove('valid');
        checkSubName.classList.add('invalid');
    }
})

/*Sub Email validation*/
const subscriberEmail = document.getElementsByClassName('subscriberEmail')[0];
subscriberEmail.addEventListener('input', ()=>{
    const checkSubEmail = document.getElementsByClassName('checkSubEmail')[0];
    const subemailRegExp = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    if(subscriberEmail.value.match(subemailRegExp)){
        checkSubEmail.innerHTML = "<i class='fa-solid fa-circle-check'></i>&nbsp;Your email is valid.";
        checkSubEmail.classList.add('valid');
        checkSubEmail.classList.remove('invalid');
    }else{
        checkSubEmail.innerHTML="<i class='fa-solid fa-circle-xmark'></i>&nbsp;Invalid email.";
        checkSubEmail.classList.remove('valid');
        checkSubEmail.classList.add('invalid');
    }
})

/*____Review Name ________*/
const reviewName = document.getElementsByClassName('reviewName')[0];
reviewName.addEventListener('input',()=>{
    const checkReviewName = document.getElementsByClassName('checkReviewName')[0];
    const revnameRegExp =  "^[A-Za-z][A-Za-z0-9_ ]{5,29}$";
    if(reviewName.value.match(revnameRegExp)){
        checkReviewName.innerHTML = "<i class='fa-solid fa-circle-check'></i>&nbsp;Valid name";
        checkReviewName.classList.add('valid');
        checkReviewName.classList.remove('invalid');
    }else{
        checkReviewName.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>&nbsp;Invalid name";
        checkReviewName.classList.remove('valid');
        checkReviewName.classList.add('invalid');
    }
})

/*____________review email_____________*/
const reviewEmail = document.getElementsByClassName('reviewEmail')[0];
reviewEmail.addEventListener('input',()=>{
    const checkReviewEmail = document.getElementsByClassName('checkReviewEmail')[0];
    const revemailRegExp = /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$/;
    if(reviewEmail.value.match(revemailRegExp)){
        checkReviewEmail.innerHTML = "<i class='fa-solid fa-circle-check'></i>&nbsp;Valid email";
        checkReviewEmail.classList.add('valid');
        checkReviewEmail.classList.remove('invalid');
    }else{
        checkReviewEmail.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>&nbsp;Invalid email";
        checkReviewEmail.classList.remove('valid');
        checkReviewEmail.classList.add('invalid');
    }
})

/*_____________review Check____________*/
const adv = document.getElementsByClassName('adv')[0];
adv.addEventListener('input',()=>{
    const checkAdv = document.getElementsByClassName('checkadv')[0];
    const entertext = adv.value;
    const enterPureText = entertext.trim();
    const enterWords = enterPureText.split(" ");
    const enterTotalWords = enterWords.length;
    if(enterTotalWords>25){
        checkAdv.innerHTML = "<i class='fa-solid fa-circle-xmark'></i>&nbsp;Invalid review";
        checkAdv.classList.remove('valid');
        checkAdv.classList.add('invalid');
    }else{
        checkAdv.innerHTML = "<i class='fa-solid fa-circle-check'></i>&nbsp;Valid email";
        checkAdv.classList.add('valid');
        checkAdv.classList.remove('invalid');
    }
})
