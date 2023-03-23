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

dotArray.forEach((element, index) => element.style.backgroundColor = colorVariables(pickedColors[index]))

var dots = Array.from(document.querySelectorAll('.playground>.hidden'))

function showDots() {
    dots.forEach(element => element.classList.remove('hidden'));
}


inputDots = Array.from(document.getElementsByClassName('input'))

inputDots.forEach((element) => element.style.backgroundColor = colorVariables(element.id))

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
    codeTry.forEach((element, index) => {
        if (element == pickedColors[index]) {
            selectedColors[index].style.outline = '3px solid green'
        } else {
            if (pickedColors.includes(String(element))) {
                selectedColors[index].style.outline = '3px solid yellow'
            } else {
                selectedColors[index].style.outline = '3px solid red'
            }
        }
    })
}

function toggleVisibility(element){
    document.getElementById(element).classList.toggle('invisible')
}

buttonList = ['clearButton', 'goButton', 'playAgain', 'youWin']

function play() {
    if (codeTry.length == 4) {
        if (String(pickedColors) == String(codeTry)) {
            validate()
            showDots()
            buttonList.forEach(element => toggleVisibility(element))
        } else {
            validate()
            createDiv()
            clearColors()
        }
    } else {
        alert('Pick More Colors')
    }
}
errorColors = ['red', 'yellow', 'green']
demoDots = Array.from(document.getElementsByClassName('demoDot'))
demoDots.forEach((element, index)=> element.style.backgroundColor = colorVariables(allColors[index+4]))
demoDots.forEach((element, index) => element.style.outline = `2px solid ${errorColors[index % errorColors.length]}`)