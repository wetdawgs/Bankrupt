const nueva_cuenta = document.getElementById("nueva_cuenta");

const cross = document.getElementsByClassName("cross")

for (let c of cross) {
    c.addEventListener("mouseover", e => {
        for (let child of c.children) {
            child.style.display = "block";
        }
    })
}

for (let c of cross) {
    c.addEventListener("mouseleave", e => {
        for (let child of c.children) {
            if (child.nodeName == "IMG") {
                child.style.display = "none";
            }
        }
    })
}

const hist = document.getElementById("historial")

hist.addEventListener("click", e => {
    window.location.href = "hist.html";
})