function randomNumGenerator() {
    let array = []
    while (array.length < 4) {
        let number = Math.floor((Math.random() * 9));
        if (!array.includes(number)) {
            array.push(number)
        }
    }
    return array;
}

allColors = ['red', 'orange', 'yellow', 'green', 'lightblue', 'blue', 'purple', 'pink', 'black']

function randomColorGen(number) {
    let color = allColors[number]
    return `var(--${color})`
}


pickedColors = [];
randomNumGenerator().forEach(element => pickedColors.push(randomColorGen(element)))

const firstDot = document.getElementById('first-dot');
const secondDot = document.getElementById('second-dot');
const thirdDot = document.getElementById('third-dot');
const fourthDot = document.getElementById('fourth-dot');

dotArray = [firstDot, secondDot, thirdDot, fourthDot];

for (let i in dotArray) {
    dotArray[i].style.backgroundColor = pickedColors[i];
}

var dots = Array.from(document.getElementsByClassName('dot hidden'))

function showDots() {
    dots.forEach(element => element.classList.toggle('hidden'));
}


inputDots = Array.from(document.getElementsByClassName('input'))

for (let i in inputDots) {
    inputDots[i].style.backgroundColor = randomColorGen(parseInt(i));
}

selectedColors = Array.from(document.getElementsByClassName('selected'))

var count = 0
var codeTry = []

function colorSelect() {
    if (count < 4) {
        selectedColors[count].style.backgroundColor = `var(--${this.id})`
        codeTry.push(this.id)
        count++
    }
}

inputDots.forEach(element => element.addEventListener('click', colorSelect))

function clearColors(){
    selectedColors.forEach(element => element.style.backgroundColor = 'white')
    count = 0;
    codeTry = []
}

function createDiv() {
    const oldDiv = document.getElementById('currentSelection')
    const newDiv = oldDiv.cloneNode(true)
    newDiv.classList.add('playground')
    newDiv.id = '';
    const newNode = document.getElementById('game').insertBefore(newDiv, document.getElementById('currentSelection'))
}

function play(){
    console.log(codeTry)
    createDiv()
    clearColors()
}