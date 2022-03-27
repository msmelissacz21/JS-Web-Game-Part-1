
function newImage(imgSrc, left, bottom) {
    let object = document.createElement('img')
    object.src = imgSrc
    object.style.position = 'fixed'
    object.style.left = left + 'px'
    object.style.bottom = bottom + 'px'
    document.body.append(object)
    return object
}

function newItem(imgSrc, left, bottom) {
  let object = newImage(imgSrc, left, bottom)

  object.addEventListener('dblclick', () => {
      object.remove()
  })

}

function makeGrass() {
    let windowWidth = window.innerWidth/100
    for( let j = 0; j<windowWidth; j ++){
        for( let i = 0; i<5; i ++){
            newImage('assets/grass.png', 100*j, 100*i)
        }

    }
}

function makeSky() {
    let windowWidth = window.innerWidth/100
    let windowHeight = window.innerHeight/100
    for( let j = 0; j<windowWidth; j++) {
        for( let i = 0; i<windowHeight; i++){
            newImage('assets/sky.png', 100*j, 100*i)
        }
    }
}

makeSky()
makeGrass()


newImage('assets/green-character.gif', 50, 100)
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/pine-tree.png', 450, 200)
newImage('assets/well.png', 500, 425)
newImage('assets/crate.png', 150, 200)
newImage('assets/rock.png', 475,300)


newItem('assets/sheild.png', 165, 185)
newItem('assets/staff.png', 600, 100)
newItem('assets/sword.png', 500, 405)

