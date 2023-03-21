function randomNumGenerator() {
    let array = []
    while(array.length < 4) {
        let number = Math.floor((Math.random() * 9));
        if (!array.includes(number)){
            array.push(number)
        }
    }
    return array;
}

function randomColorGen(number) {
    switch (number) {
        case 0:
            return('var(--red)')
        case 1:
            return('var(--orange)')
        case 2:
            return('var(--yellow')
        case 3:
            return('var(--green)')
        case 4: 
            return('var(--lightblue)')
        case 5:
            return('var(--blue)')
        case 6:
            return('var(--purple)')
        case 7:
            return('var(--pink')
        case 8:
            return('var(--black)')
    }
}

pickedColors = [];
randomNumGenerator().forEach(element => pickedColors.push(randomColorGen(element)))

const firstDot = document.getElementById('first-dot');
const secondDot = document.getElementById('second-dot');
const thirdDot = document.getElementById('third-dot');
const fourthDot = document.getElementById('fourth-dot');

dotArray = [firstDot, secondDot, thirdDot, fourthDot];

for(let i in dotArray){
    dotArray[i].style.backgroundColor = pickedColors[i];
}

var dots = Array.from(document.getElementsByClassName('dot hidden'))

function showDots(){
        dots.forEach(element => element.classList.toggle('hidden'));
    }


inputDots = Array.from(document.getElementsByClassName('input'))

for (let i in inputDots){
    inputDots[i].style.backgroundColor = randomColorGen(parseInt(i));
}

// inputDots.forEach(element => element.addEventListener('click',)) FALTA FUNCION