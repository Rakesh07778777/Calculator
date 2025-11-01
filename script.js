class Calculator{
    constructor(previousOperandTextElm, currentOperandTextElm) {
        this.previousOperandTextElm = previousOperandTextElm
        this.currentOperandTextElm = currentOperandTextElm
        this.clear()
    }

    clear(){
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete(){}

    appendNumber(number) {
        this.currentOperand = number
    }

    chooseOperation(){}

    compute() {}

    updateDisplay() {
        this.currentOperandTextElm.innerText = this.currentOperand
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElm = document.querySelector('[data-previous-operand]')
const currentOperandTextElm = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElm, currentOperandTextElm)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
})