const button = document.querySelectorAll('.btn')

button.forEach((buttonElm) => {
    buttonElm.addEventListener('click', () => {
        console.log('button clicked')
    })
})