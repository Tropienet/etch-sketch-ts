function addHoverEffect(tile: Element | null) {
  tile?.addEventListener("mouseover", () => {
    tile.classList.add("active")
  })
}

function createTile(container: Element | null ) {
  const tile = document.createElement("div");

  tile.classList.add("tile")

  addHoverEffect(tile)

  container!.appendChild(tile)
}

function createGrid(gridSize: number) {
  const container: any = document.querySelector(".container");
  container!.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`
  container!.style.gridTemplateRows = `repeate(${gridSize}, 1fr)`


  for(let i = 0; i<gridSize; i += 1) {
    for(let j = 0; j<gridSize; j += 1 ) {
      createTile(container)
    }
  }
}

createGrid(16)
