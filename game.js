function randomNumGenerator() {
    let array = []
    while(array.length < 4) {
        let number = Math.floor((Math.random() * 7));
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
            return('var(--blue)')
        case 5:
            return('var(--pink)')
        case 6:
            return('var(--purple)')
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

function clickFunction(){
    Array.from(document.getElementsByClassName('dot')).forEach(element => element.classList.remove('hidden'));
}
