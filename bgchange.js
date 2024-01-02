let i=0;
const changeText = ()=>{
    const season = ['Summer','Rainy','Winter'];
    const randomText = document.getElementsByClassName('randomTextOne')[0];
    const randomTextTwo = document.getElementsByClassName('randomTextTwo')[0];
    randomText.textContent=season[i]+"Special Event";
    i++;
    if(i==2){
        i=0;
    }

}
setInterval(changeText, 2000);


const changeBg = ()=>{
    const randomSec = document.getElementsByClassName('randomSec')[0];
    const randomImages = ['url("img/1.jpg")','url("img/2.jpg")','url("img/3.jpg")','url("img/4.jpg")','url("img/5.jpg")'];
    const bg = randomImages[Math.floor(Math.random()*randomImages.length)]
    randomSec.style.background = bg;
    randomSec.style.backgroundPosition = "center";
    randomSec.style.backgroundRepeat = "no-repeat";
    randomSec.style.backgroundSize = "cover";
}
setInterval(changeBg, 3000);

