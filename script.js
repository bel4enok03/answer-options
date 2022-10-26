const image = document.querySelector('#myImage');
const text = document.querySelector('h2');
const buttonOne = document.querySelector('#one');
const buttonTwo = document.querySelector('#two');

buttonTwo.addEventListener('click', mrBig);
buttonOne.addEventListener('click',aidan)


function mrBig() {
    image.setAttribute('src', 'https://comments.ua/img/publications/y46QA9CU3z0iSqJ5XMzMgkd9lVGNLkHN.jpg');
    text.textContent = "Они поженятся?";
    buttonOne.textContent = "никогда";
    buttonTwo.textContent = "Да,но не сразу";
    
    buttonOne.addEventListener('click', neverMarid)
    buttonTwo.addEventListener('click', wedding);
}

function wedding() {
    image.setAttribute('src', 'https://elle.ua/upload/image/5b15510aba55d.jpeg');
    text.textContent = "Они поженятся и будут счастливы, но у них не будет детей";
    buttonOne.style.display = 'none'
    buttonTwo.style.display = 'none'
}

function neverMarid(){
    image.setAttribute('src', 'https://media.glamour.com/photos/5695b093d9dab9ff41b3b450/master/pass/sex-love-life-2014-10-SATC-1-main.jpg');
    text.textContent = "Он бросит ее у алтаря"
    buttonOne.style.display = 'none'
    buttonTwo.style.display = 'none'
}

function aidan(){
    image.setAttribute('src', 'https://akns-images.eonline.com/eol_images/Entire_Site/2021315/rs_1024x759-210415131105-1024-Sarah-Jessica-Parker-John-Corbett-mp.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top');
    text.textContent = "Они будут счастливы?";
    buttonOne.textContent = "Да";
    buttonTwo.textContent = "Нет";
    
    buttonOne.addEventListener('click', happy)
    buttonTwo.addEventListener('click', unhappy);
}

function unhappy(){
    image.setAttribute('src', 'https://i.pinimg.com/600x315/87/e9/1a/87e91a4f68566b15a455e5096912b7ed.jpg');
    text.textContent = "Нет, они разойдутся из-за измены Керри"
    buttonOne.style.display = 'none'
    buttonTwo.style.display = 'none'
}

function happy(){
    image.setAttribute('src', 'https://s.yimg.com/ny/api/res/1.2/Yl6Bidg7nqr6c0F4kYIdag--/YXBwaWQ9aGlnaGxhbmRlcjtoPTY2Ng--/https://media.zenfs.com/en/instyle_846/0d81c4378ac1cdd05e7236874b251c96');
    text.textContent = "Да, у них родится ребенок"
    buttonOne.style.display = 'none'
    buttonTwo.style.display = 'none'
}