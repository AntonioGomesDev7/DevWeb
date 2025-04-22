// Adicionando evento
const btn = document.querySelector("#button");

btn.addEventListener("click", function() {
    console.log("clicou aqui")
});

// Removvendo eventos 
const secondBtn = document.querySelector("#btn");

function imprimirMenssagem(){
    console.log("teste")
}
secondBtn.addEventListener("click", imprimirMenssagem);

const thirdBtn = document.querySelector("#otherBtn")

thirdBtn.addEventListener("click", () => {
    console.log("Evento removido");
    secondBtn.removeEventListener("click", imprimirMenssagem)
});

// Argumento dop evento 
const myTitle = document.querySelector("#myTiltle");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
})