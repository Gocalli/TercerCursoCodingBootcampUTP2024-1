// Funcion para la barra Superior 

function barraSuperior() {

    let top = document.getElementById('arriba')


        let nav = document.createElement('div')
        nav.classList.add('barra')
        top.appendChild(nav)

            let caja1 = document.createElement('div')
            caja1.classList.add('cajitas-top1')
            nav.appendChild(caja1)

                let cajaImg = document.createElement('img')
                cajaImg.setAttribute('src', 'img/BootCamp.png')
                cajaImg.classList.add('cajitas-top1')
                caja1.appendChild(cajaImg)


                let caja2 = document.createElement('div')
                caja2.classList.add('cajitas-top2')
                nav.appendChild(caja2)

                    let titulo = document.createElement('h3')
                    titulo.innerText = 'Armemos el pesebre de navidad'
                    caja2.appendChild(titulo)

                    let parrafo = document.createElement('p')
                    parrafo.innerText = 'Como es tradición cada diciembre armamos el pesebre para esperar la llegada del Niño Dios. Presiona cada tarjeta para descubrir un personaje, concéntrate y encuentra su pareja, así revelarás un personaje en el pesebre y descubrirás un dato curioso sobre esta tradición de navidad'
                    caja2.appendChild(parrafo)
}

barraSuperior()


let images = [

    "img/parejas-001.png",
    "img/parejas-002.png",
    "img/parejas-003.png",
    "img/parejas-004.png",
    "img/parejas-005.png",
    "img/parejas-006.png",
    "img/parejas-007.png",
    "img/parejas-008.png",
    
]



function makingCards() {
   
    for (let i = 0; i < 8; i++){
        let container = document.getElementById('container')

        let divCard = document.createElement('div')
        divCard.classList.add('div-card')
        container.appendChild(divCard)  

        let cartas = document.createElement('div')
        cartas.classList.add('div-inner')
        divCard.appendChild(cartas)

        let caraFront = document.createElement('div')
        caraFront.classList.add('div-front')
        cartas.appendChild(caraFront)

        let caraTras = document.createElement('div')
        caraTras.classList.add('div-back')
        cartas.appendChild(caraTras)

        let imgBack = document.createElement('img')

        imgBack.setAttribute('src', 'img/tarjeta_cubierta.png')

        caraFront.appendChild(imgBack)

        let imgFront = document.createElement('img')

        imgFront.setAttribute('src', images[i])
        caraTras.appendChild(imgFront)

    }
}

// Esto me hace las iteraciones para que sean 16
function rows() {
    for (let i = 0; i < 2; i++) {
        makingCards()
    }
}

 rows()

// Generar Aleatoriedad 

















