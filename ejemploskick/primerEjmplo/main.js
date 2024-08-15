const tilesContainer=document.querySelector('.tiles');


function createTile(){
    const tile = document.createElement("div");
    tile.classList.add("tile");
    tile.addEventListener("mouseenter",(e)=>{
        e.target.style.backgroundColor="#c559f7";
        setTimeout(()=>{
            e.target.style.backgroundColor="transparent";
        },1000);
    });
    console.log("kja");
    return tile;
}


function createGrid(){
    tilesContainer.innerHTML="";
    columns = Math.floor(window.innerWidth/50);
    rows = Math.floor(window.innerHeight/50);
    tilesContainer.style.setProperty("--columns",columns);
    tilesContainer.style.setProperty("--rows",rows);
    for (let index = 0; index < columns*rows; index++) {
        tilesContainer.appendChild(createTile());
    }
}

createGrid();

window.onresize=()=> createGrid();