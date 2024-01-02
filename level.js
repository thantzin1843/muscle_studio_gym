const name = document.getElementById('name');
const nameResult = document.getElementById('nameResult');

const findBtn = document.getElementById('findBtn');

const squat = document.getElementById('squat');
const squatResult = document.getElementById('squatResult');

const plank = document.getElementById('plank');
const plankResult = document.getElementById('plankResult');

const push = document.getElementById('push');
const pushResult = document.getElementById('pushResult');

const burpee = document.getElementById('burpee');
const burpeeResult = document.getElementById('burpeeResult');

const allResult = document.getElementById('allResult');
findBtn.addEventListener('click',()=>{
    
    const enterName = name.value;
    nameResult.textContent=enterName;
    
    const enterSquat = squat.value;
        squatResult.textContent = ((enterSquat/60)*10).toFixed(1);
    
   
    const enterPlank = plank.value;
        plankResult.textContent = ((enterPlank/150)*10).toFixed(1);

    const enterPush = push.value;
        pushResult.textContent = ((enterPush/60)*10).toFixed(1);


    const enterBurpee = burpee.value;
         burpeeResult.textContent =((enterBurpee/60)*10).toFixed(1);

    let a =Number(((enterSquat/70)*10).toFixed(1));
    let b =Number(((enterPlank/150)*10).toFixed(1));
    let c =Number(((enterPush/60)*10).toFixed(1));
    let d =Number(((enterBurpee/60)*10).toFixed(1));
    let e = ((a+b+c+d)/4).toFixed(1);
    
    allResult.textContent = e;

    const barLength = (e/10)*500;
    const internalBar = document.getElementsByClassName('internalBar')[0];
    internalBar.style.width = barLength+"px";



})