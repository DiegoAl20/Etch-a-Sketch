const grid = document.querySelector(".grid");
let bool = false;

const btnDefault = document.getElementById("default");
const btnDuplicate = document.getElementById("duplicate");
const btnTriplicate = document.getElementById("triplicate");
const btnReset = document.getElementById("reset");

btnDefault.addEventListener('click', () => {
    remove(); 

    if(grid.classList.contains("grid2") || grid.classList.contains("grid3")) {
        grid.classList.remove("grid2");
        grid.classList.remove("grid3");
    }

    draw(256);
});

btnDuplicate.addEventListener('click', () => {
    remove();

    if(grid.classList.contains("grid3")) {
        grid.classList.remove("grid3");
    }

    grid.classList.add("grid2");
    draw(1024);
})

btnTriplicate.addEventListener('click', () => {
    remove();

    if(grid.classList.contains("grid2")) {
        grid.classList.remove("grid2");
    }

    grid.classList.add("grid3");
    draw(4096);
})

btnReset.addEventListener('click', () => {
    for(let i = 0; i < grid.children.length; i++){
        grid.children[i].style.backgroundColor = "#FFF";
    }
});

function draw (size) {
    for (let i = 1; i <= size; i++) {
        let div = document.createElement("div");
        grid.appendChild(div);
    }
}

function remove() {
    while(grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
}

// Controles para desktop
grid.addEventListener('mousemove', (e) => {
    if (bool) {
        e.target.style.backgroundColor = "black";
    }
})

grid.addEventListener('mousedown', (e) => {
    bool = true;
})

grid.addEventListener('mouseup', (e) => {
    bool = false;
});

// Controles para Mobile
grid.addEventListener('touchmove', (e) => {
    bool = true;
    if (bool) {
        e.target.style.backgroundColor = "black";
    }
})

grid.addEventListener('touchstart', (e) => {
    bool = true;
})

grid.addEventListener('touchend', (e) => {
    bool = false;
});

draw(256);