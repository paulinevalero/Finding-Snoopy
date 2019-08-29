const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

const startButton = document.querySelector('#start-button')

const intro = document.querySelector('.intro')

const startGame = () => {
    interval = setInterval(update, 24) 
}
/* //tomar el valor del input jugador 1
const jugador1 = document.querySelector('.jugador1[type="text"]')
//tomar el valor del input jugador 2
const jugador1 = document.querySelector('.jugador2[type="text"]') */

//click izquierdo
addEventListener('click', e => {
    const {offsetX, offsetY} = e
    mouseLeft(offsetX, offsetY)
  })
//click derecho
window.oncontextmenu = function (e) {
    const {offsetX, offsetY} = e
    mouseRight(offsetX, offsetY)
}

const images = {
    house: './images/snoopy-house.png',
    food: './images/snoopy-food.png',
    snoopyIzq: './images/snoopy-izq.png',
    memberUno: 'images/member1.png',
    memberDos:'images/member2.png',
    memberTres:'images/member3.png',
    memberCuatro:'images/member4.png',
    memberCinco:'images/member5.png',
    memberSeis:'images/member6.png',
    memberSiete:'images/member7.png',
    memberOcho:'images/member8.png',
    memberNueve:'images/member9.png',
}

class Objects{
    constructor(width, height, image){
        this.x = Math.floor(Math.random() * 780 + 1)
        this.y = Math.floor(Math.random() * 550 + 1)
        this.width = width
        this.height = height
        this.image = new Image()
        this.image.src = image
        
    }
    draw(){
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
    }
}

class Background{
 constructor(){
     this.x = 0
     this.y = 0
     this.width = canvas.width
     this.height = canvas.height
     this.image = new Image()
     this.image.src = './images/background.png' //el background va a ir cambiando 
 }
 draw(){
     ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
 }
}


const background = new Background
const snoopyIzq = new Objects(60, 70, images.snoopyIzq)
const food = new Objects(40, 30, images.food)
const house = new Objects(70, 60, images.house)
const memberUno = new Objects(60, 70, images.memberUno)
const memberDos = new Objects(60, 70, images.memberDos)
const memberTres = new Objects(60, 70, images.memberTres)
const memberCuatro = new Objects(60, 70, images.memberCuatro)
const memberCinco = new Objects(60, 70, images.memberCinco)
const memberSeis = new Objects(60, 70, images.memberSeis)
const memberSiete = new Objects(60, 70, images.memberSiete)
const memberOcho = new Objects(60, 70, images.memberOcho)
const memberNueve = new Objects(60, 70, images.memberNueve)


//boton play onclick
startButton.addEventListener('click', () => {
    startButton.style.display = 'none'
    intro.style.display = 'none'
    canvas.style.display = 'block'
    startGame()
})
 

function update(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    background.draw()
    house.draw()
    food.draw()
    snoopyIzq.draw()
    memberUno.draw()
    memberDos.draw()
    memberTres.draw()
    memberCuatro.draw()
    memberCinco.draw()
    memberSeis.draw()
    memberSiete.draw()
    memberOcho.draw()
    memberNueve.draw()
}

function getHousePosition(){
    let houseX = house.x
    let houseY = house.y
    let housePosition = `${houseX} ${houseY}`
    return housePosition
}



function mouseLeft(x, y) {
    if (x > snoopyIzq.x && x < snoopyIzq.x + snoopyIzq.width && y > snoopyIzq.y && y < snoopyIzq.y + snoopyIzq.height) {
    alert('left click')
    } 
  }

function mouseRight(x, y) {
    if (x > food.x && x < food.x + food.width && y > food.y && y < food.y + food.height) {
    alert('right click')
    } 
  }

