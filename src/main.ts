let color = "black"

function addHoverEffect(tile:  any, color: string) {
  tile?.addEventListener("mouseover", () => {
    tile.style.backgroundColor = color
  })
}

function createTile(container: Element | null ) {
  const tile = document.createElement("div");

  tile.classList.add("tile")

  color = "black";

  addHoverEffect(tile, color)

  container!.appendChild(tile)
}

function createRGBHover () {
  function getRandomInt(max: number) {
    return Math.floor(Math.random()* max)
  }


  const tiles = document.querySelectorAll(".tile")

  for(let i = 0; i < tiles.length; i+= 1) {
    color = `rgb(${getRandomInt(255)}, ${getRandomInt(255)}, ${getRandomInt(255)})`;
    addHoverEffect(tiles[i], color)
  }
}

function createGrid(gridSize: number) {
  const container: any = document.querySelector(".grid-container");
  container!.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  container!.style.gridTemplateRows = `repeate(${gridSize}, 1fr)`


  for(let i = 0; i<gridSize; i += 1) {
    for(let j = 0; j<gridSize; j += 1 ) {
      createTile(container)
    }
  }
}

function deleteGrid() {
  const tiles: any = document.querySelectorAll(".tile")

  for(let i = 0; i < tiles.length; i += 1) {
    tiles[i].remove()
  }
}

const buttonForClearingGrid = document.querySelector(".clear-grid-btn")

buttonForClearingGrid?.addEventListener("click", () => {
  deleteGrid();


  createGrid(16);
})

createGrid(16)

function createChangeGridSizeButton() {
  const gridSizeButton = document.querySelector(".change-size-btn")

  gridSizeButton?.addEventListener("click", () => {
    let gridSize: number = Number(prompt("Enter the size of the grid"))
  
    while(gridSize<16||gridSize>100) {
      gridSize = Number(prompt("Enter the size of the grid(min 16, max 100)"))
    }

    deleteGrid()
    createGrid(gridSize)
  })
}

createChangeGridSizeButton()

const rgbButton = document.querySelector(".rgb-btn")

rgbButton?.addEventListener("click", () => {
  createRGBHover();
})