const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
let winner = ''//todas las variables tienen que estar inicializadas para que no me hackeeen(para prevenir modificaciones no autorizadas, dice ceesar)
let score = 0

const startButton = document.querySelector('#start-button')
const reloadButton = document.querySelector('#reload-button')
const audio = document.querySelector('.music-fondo')
const yay = document.querySelector('.yay')
const intro = document.querySelector('.intro')

const startGame = () => {
    // interval = setInterval(update) 
    update()
}

 //tomar el valor del input jugador 1
 const jugador1 = document.querySelector('.jugador1[type="text"]')
 //tomar el valor del input jugador 2
 const jugador2 = document.querySelector('.jugador2[type="text"]') 

 /* const scorePlayer1 =
 const scorePlayer2 = 
 */

//click izquierdo jugador1
addEventListener('click', e => {
    const {offsetX, offsetY} = e
    mouseLeft(offsetX, offsetY)
    
  })
//click derecho jugador2
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

//const fondo = ['images/background.png', 'images/background2.png', 'images/background10.jpg']

class Objects{
    constructor(width, height, image, x, y){
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
     this.image.src = 'images/background.png'//fondo[Math.floor(Math.random()* 2)] //el background va a ir cambiando 
 }
 draw(){
     ctx.drawImage(this.image, this.x, this.y, this.width, this.height)
 }
 checkWinner(){
    //dibujar cuadro ctx
    ctx.globalAlpha= 0.8
    ctx.fillStyle = "white"
    ctx.fillRect(300, 200, 300, 200)
    ctx.globalAlpha = 1
    ctx.font = '20px courier'
    ctx.fillStyle = 'black'
    ctx.fillText('Gana ' + winner, 380, 310)
    document.querySelector('#reload-button').style.display ='block'
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

document.querySelector('#reload-button').style.display='none'

//boton play onclick
startButton.addEventListener('click', () => {
    startButton.style.display = 'none'
    intro.style.display = 'none'
    canvas.style.display = 'block'
    audio.volume = 0.2
    audio.play()
    startGame()
})
//boton reload onclick
reloadButton.addEventListener('click', () => {
    reloadButton.style.display = 'none'
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    
    //background.image.src = fondo[Math.floor(Math.random()* 2)]
    background.draw()
    house.x = Math.floor(Math.random() * 780 + 1)
    house.y = Math.floor(Math.random() * 550 + 1)
    house.draw()
    food.x = Math.floor(Math.random() * 780 + 1)
    food.y = Math.floor(Math.random() * 550 + 1)
    food.draw()
    snoopyIzq.x = Math.floor(Math.random() * 780 + 1)
    snoopyIzq.y = Math.floor(Math.random() * 550 + 1)
    snoopyIzq.draw()
    memberUno.x = Math.floor(Math.random() * 780 + 1)
    memberUno.y = Math.floor(Math.random() * 550 + 1)
    memberUno.draw()
    memberDos.x = Math.floor(Math.random() * 780 + 1)
    memberDos.y = Math.floor(Math.random() * 550 + 1)
    memberDos.draw()
    memberTres.x = Math.floor(Math.random() * 780 + 1)
    memberTres.y = Math.floor(Math.random() * 550 + 1)
    memberTres.draw()
    memberCuatro.x = Math.floor(Math.random() * 780 + 1)
    memberCuatro.y = Math.floor(Math.random() * 550 + 1)
    memberCuatro.draw()
    memberCinco.x = Math.floor(Math.random() * 780 + 1)
    memberCinco.y = Math.floor(Math.random() * 550 + 1)
    memberCinco.draw()
    memberSeis.x = Math.floor(Math.random() * 780 + 1)
    memberSeis.y = Math.floor(Math.random() * 550 + 1)
    memberSeis.draw()
    memberSiete.x = Math.floor(Math.random() * 780 + 1)
    memberSiete.y = Math.floor(Math.random() * 550 + 1)
    memberSiete.draw()
    memberOcho.x = Math.floor(Math.random() * 780 + 1)
    memberOcho.y = Math.floor(Math.random() * 550 + 1)
    memberOcho.draw()
    memberNueve.x = Math.floor(Math.random() * 780 + 1)
    memberNueve.y = Math.floor(Math.random() * 550 + 1)
    memberNueve.draw()

    
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
    winner = jugador1.value
    background.checkWinner()
    yay.play()
    } 
  }

function mouseRight(x, y) {
    if (x > food.x && x < food.x + food.width && y > food.y && y < food.y + food.height) {
    winner = jugador2.value
    background.checkWinner()
    yay.play()
    } 
  }

