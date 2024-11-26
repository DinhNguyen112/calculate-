const inputFrame = document.getElementById('inputFrame')
const outputFrame = document.getElementById('outputFrame')
const boardItems = document.querySelectorAll('.calculate-board-item')

let currentInput = '';
let lastOperation = ''; 
boardItems.forEach(boardItem =>{
    boardItem.addEventListener('click', event =>{
       inputFrame.innerHTML = boardItem.getAttribute('value')
        
    })
  
})