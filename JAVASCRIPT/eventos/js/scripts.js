// Adicionando evento
const btn = document.querySelector("#button");

btn.addEventListener("click", function() {
    console.log("clicou aqui")
});

// Removendo eventos 
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

// Argumento do evento 
const myTitle = document.querySelector("#myTiltle");

myTitle.addEventListener("click", (event) => {
    console.log(event);
    console.log(event.offsetX);
    console.log(event.pointerType);
    console.log(event.target);
}); 

// Evento de Progagação
const containerBtn = document.querySelector("#btn-container");
const btnInsadeContainer = document.querySelector("#div-btn");

containerBtn.addEventListener("click", () => {
    console.log("envento 1")
});

btnInsadeContainer.addEventListener("click", () => {
    console.log("envento 2")
});

// Removendo evento padrao
const a = document.querySelector("a")

a.addEventListener("click", (e) => {

    e.preventDefault()

    console.log("linck não envia mais para pagina")
});

// Evento de tecla 
document.addEventListener("keyup", (e) => {
    console.log(`Soltou a tecla ${e.key}`)
});

document.addEventListener("keydown", (e) => {
    console.log(`precionou a tecla ${e.key}`)
});

// Eventos de mouse 

/*
const mouseEventos = document.querySelector("#mouse")

mouseEventos.addEventListener("mousedown", () => {

    console.log("Clicou o botão do mouse");
});

mouseEventos.addEventListener("mouseup", () => {

    console.log("Soltou o botão do mouse");
});

mouseEventos.addEventListener("dblclick", () => {

    console.log("clicou 2 vezes");
});

// Movimento do mouse

document.addEventListener("mousemove", (e) => {
    console.log(`No eixo X: ${e.x}`)
    console.log(`No eixo Y: ${e.y}`)
});

*/
// Evento de scroll da janela
/*
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100) {
        console.log("passando de limete scroll")
    };

});
*/

// Evento de focus
const input = document.querySelector("#myInput");

input.addEventListener("focus", (e) => {
    console.log("Entrou no input")
});

input.addEventListener("blur", (e) => {
    console.log("Saiu no input")
})


// Evento de carregamento
window.addEventListener("load", () => {
    console.log("A pagina carregou!")
});

window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "teste";
});

// Evento de debounce
const debounce = (f, delay) => {
    let timeout

    return (...Argumento) =>{
        if(timeout){
        }

        timeout =setTimeout(()=>{
            f.apply(Argumento);
        },delay);
    };
};

window.addEventListener(
    "mousemove", 
    debounce(() =>{
    console.log("Execultando o evento");
}, 400)
);