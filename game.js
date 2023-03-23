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

var pickedColors = []
function colorPicker() {
    randomNumGenerator().forEach(element =>
        pickedColors.push(allColors[element]))
}

function colorVariables(color) {
    return `var(--${color})`
}

colorPicker()
console.log(pickedColors)

const firstDot = document.getElementById('first-dot');
const secondDot = document.getElementById('second-dot');
const thirdDot = document.getElementById('third-dot');
const fourthDot = document.getElementById('fourth-dot');

dotArray = [firstDot, secondDot, thirdDot, fourthDot];

for (let i in dotArray) {
    dotArray[i].style.backgroundColor = colorVariables(pickedColors[i]);
}

var dots = Array.from(document.querySelectorAll('.playground>.hidden'))

function showDots() {
    dots.forEach(element => element.classList.remove('hidden'));
}


inputDots = Array.from(document.getElementsByClassName('input'))

for (let i in inputDots) {
    inputDots[i].style.backgroundColor = colorVariables(inputDots[i].id);
}

selectedColors = Array.from(document.getElementsByClassName('selected'))

var count = 0
var codeTry = []

function colorSelect() {
    if (count < 4 && !codeTry.includes(this.id)) {
        selectedColors[count].style.backgroundColor = `var(--${this.id})`
        codeTry.push(this.id)
        count++
    }
}

inputDots.forEach(element => element.addEventListener('click', colorSelect))

function clearColors() {
    selectedColors.forEach(element => element.style.backgroundColor = 'white')
    selectedColors.forEach(element => element.style.outline = 'none')
    count = 0;
    codeTry = []
}

function createDiv() {
    const oldDiv = document.getElementById('currentSelection')
    const newDiv = oldDiv.cloneNode(true)
    newDiv.classList.add('playground')
    newDiv.id = '';
    const newNode = document.getElementById('game').insertBefore(newDiv, oldDiv)
}

function validate() {
    for (let i in codeTry) {
        if (codeTry[i] == pickedColors[i]) {
            selectedColors[i].style.outline = '3px solid green'
        } else {
            if (pickedColors.includes(String(codeTry[i]))) {
                selectedColors[i].style.outline = '3px solid yellow'
            } else {
                selectedColors[i].style.outline = '3px solid red'
            }
        }
    }
}

function play() {
    if (codeTry.length == 4) {
        if (String(pickedColors) == String(codeTry)) {
            validate()
            showDots()
            document.getElementById('clearButton').classList.toggle('invisible');
            document.getElementById('goButton').classList.toggle('invisible');
            document.getElementById('playAgain').classList.toggle('invisible');
            document.getElementById('youWin').classList.toggle('invisible');
        } else {
            validate()
            createDiv()
            clearColors()
        }
    } else {
        alert('Pick More Colors')
    }
}