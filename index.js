import "./style.css"

function game(element,button){

let size=6
let frag =  document.createDocumentFragment()
let div = document.createElement('div')
div.classList.add('tile')
function init(){
  for(let i=0;i<size;i++)
  {
  let clone = div.cloneNode()
  frag.appendChild(clone)
  }
   element.appendChild(frag)
}

init()

//adding listener to button
button.addEventListener('click',startHandler)

function startHandler(){
  button.classList.add('disable') //disable start button after click
  setTimeout(play,500)
}
}

game(document.getElementById('box'),document.getElementById('btn'))