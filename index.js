let count = 0;
let lastClick

const add1button = document.getElementById("add1button");
const add4button = document.getElementById("add4button");
const add10button = document.getElementById("add10button");
const add100button = document.getElementById("add100button");
const minus1button = document.getElementById("minus1button");
const minus10000button = document.getElementById("minus10000button");
const x2button = document.getElementById("x2button");
const div2button = document.getElementById("div2button");
const hmbutton = document.getElementById("hmbutton");
const add05button = document.getElementById("add05button");
const minus05button = document.getElementById("minus05button");
const speedText = document.getElementById('speed-text')




const countElement = document.getElementById("count");


countElement.innerHTML = count;


const add = (x) => {  
    count = count + x
    countElement.innerHTML = count;
    calculateLastClick()
}

const subtract = (x) => {
  count = count - x
  countElement.innerHTML = count;
  calculateLastClick()
}

const multiply = (x) => {
  count = count * x
  countElement.innerHTML = count;
  calculateLastClick()
}

const devide = (x) => {
  count = count / x
  countElement.innerHTML = count;
  calculateLastClick()
}

const calculateLastClick = () => {
  const thisClick =new Date().getTime()
  if (lastClick){
    const deltaClick = thisClick - lastClick;
    console.log("Delta click: ", deltaClick)
      if(deltaClick < 100){
        console.log("< 100")
        speedText.innerHTML = "HUR KLICKAR DU SÅ SNABBT!?"
      }
    else if(deltaClick < 200){
        console.log("< 200")
        speedText.innerHTML = "Woah! ta det lungt! du klickar för snabbt!"
      }   else if(deltaClick < 500){
        console.log("< 500")
        speedText.innerHTML = "lite snabbbare kan du"
        
        
      }else {
        console.log("Default")
        speedText.innerHTML = "Du är långsam"             //Hehe nice :)

      }

  }              
  lastClick = new Date().getTime() 
  console.log(lastClick)
}



add1button.addEventListener('click', () => add(1))
add4button.addEventListener('click', () => add(4))
add10button.addEventListener('click', () => add(10))
add100button.addEventListener('click', () => add(100))
minus1button.addEventListener('click', () => subtract(1))
minus10000button.addEventListener('click', () => subtract(10000))
x2button.addEventListener('click', () => multiply(2))
//setInterval(() => alert("hejsan"), Math.random() * 50000 + 10000)
div2button.addEventListener('click', () => devide(2))
hmbutton.addEventListener('click', () => add(69))
add05button.addEventListener('click', () => add(0.5))
minus05button.addEventListener('click', () => subtract(0.5))


const toggleDisplayNone = () => {
  const div = document.getElementById('myDIV')
  if(div.classList.contains('hidden')){
    div.classList.remove('hidden')
  } else {
    div.classList.add('hidden')
  }
}


function myFunction() {
  var y = document.getElementById("myDIV");

  if (y.style.display === "none") {
    y.style.display = "block";
  } else {
    y.style.display = "none";
  }
}







add1button.addEventListener('mouseover', () => {
  const countElement = document.getElementById("count");
  add1button.style.backgroundColor = "red"
})

add1button.addEventListener('mouseleave', () => {
  const countElement = document.getElementById("count");
  add1button.style.backgroundColor = "white"
})

const incrementScore = () => {
  const scoreElement = document.getElementById("score")
  const currentScore = scoreElement.innerText
  scoreElement.innerText = +currentScore + 1
}

const randomObject = () => {
  const div = document.createElement("div");
  div.addEventListener("click", () => {
   incrementScore() 
    alert("Aj du klicka för hårt >:(")})
  div.style.position = "fixed";
  div.style.backgroundColor = "red";
  div.style.width = "30px"
  div.style.height = "30px"
  div.setAttribute("id","boxi");
  document.body.appendChild(div);
  const colors = ["red","green","yellow","blueviolet","coral","blue","darkseagreen","black","white"]

  setInterval(() => {
    const element = document.querySelector("#boxi");
    const wHeight = window.innerHeight;
    const wWidth = window.innerWidth;
    const rWidth = Math.floor(Math.random() * (wWidth - 100)) ;
    const rHeight = Math.floor(Math.random() * (wHeight - 100)) ; 

    element.style.left = wWidth - rWidth;
    element.style.top = wHeight - rHeight;
    const rColor = Math.floor(Math.random() * colors.length)
    element.style.backgroundColor = colors[rColor]


  },2000)
}

const squarePositions = [
  {ai: 'flex-start', jc: 'flex-start'}, 
  {ai: 'flex-start', jc: 'flex-end'}, 
  {ai: 'flex-end', jc: 'flex-end'},
  {ai: 'flex-end', jc: 'flex-start'}]

const square = document.getElementById("square")
let squarePositionIndex = 0;


const moveSquare = () => {

  squarePositionIndex++;

  const {ai, jc} = squarePositions[squarePositionIndex % 4];

  square.style.alignItems = ai;
  square.style.justifyContent = jc;

}

square.addEventListener('click', moveSquare)


randomObject()
//Hejsan Hejsan