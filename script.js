const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousscreenTextElement = document.querySelector('[data-previousscreen]')
const currentscreenTextElement = document.querySelector('[data-currentscreen]')

class Calculator{
    constructor(previousscreenTextElement, currentscreenTextElement) {
        this.currentscreenTextElement = currentscreenTextElement
        this.previousscreenTextElement = previousscreenTextElement
        this.clear()
    }

    clear() {
        this.currentscreen = ''
        this.previousscreen = ''
        this.operation = undefined
    }

    delete() {

    }
    appendnmber(number) {
        if (number === '.' && this.currentscreen.includes('.')) return
     this.currentscreen = this.currentscreen.toString() + number.toString()
    }

    selectoperation(operation) {
       this.operation = operation
       this.previousscreen = this.currentscreen
       this.currentscreen = '.'
    }

    compute() {

    }

    updateDisplay() {
      this.currentscreenTextElement.innerText = this.currentscreen
    }
}

const calculator = new Calculator(previousscreenTextElement, currentscreenTextElement)

numberButtons.forEach(button=> {
    button.addEventListener('click', () => {
     calculator.appendnmber(button.innerText)
     calculator.updateDisplay()
    })
})

operationButtons.forEach(button=> {
    button.addEventListener('click', () => {
     calculator.selectoperation(button.innerText)
     calculator.updateDisplay()
    })
})