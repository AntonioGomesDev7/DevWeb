// Visualizando e movendo-se pelo Dom 

console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[1]);
console.log(document.body.childNodes[1].childNodes);
console.log(document.body.childNodes[1].childNodes[1].textContent);

// Seleciondando elemento pod tag 

const listarIntens = document.getElementsByTagName("li");

console.log(listarIntens);

// Seleciondando elemento pod tag 

const title = document.getElementById("title");

console.log(title);

// Seleciondando elemento pod classe

const products = document.getElementsByClassName("products");

console.log(products)

// Seleciondo os elementos pelo css
const productQuery =document.querySelectorAll(".products")

console.log(productQuery);

const mainContainer = document.querySelector("#mainContainer");

console.log(mainContainer);

 // insertBefore

const p = document.createElement("p");

const header = title.parentElement;

header.insertBefore(p, title)

// appendChild

const navLinks = document.querySelector("nav ul");

const li = document.createElement("li");

navLinks.appendChild(li);

// replaceChild

const h2 = document.createElement("h2");

h2.textContent = "Meu novo Titulo";

header.replaceChild(h2, title);

// createTextNode

const myText = document.createTextNode("Vamos colocar mais um texto!");

console.log(myText);

const h3 = document.createElement("h3");

h3.appendChild(myText);

console.log(h3);

mainContainer.appendChild(h3);


// Trabalhando com atributos 

const firtLink = navLinks.querySelector("a");

console.log(firtLink);

firtLink.setAttribute("href", "https://www.google.com");

console.log(firtLink.getAttribute("href"));

firtLink.setAttribute("target", "blank");

// Altura e Largura

const footer = document.querySelector("footer");

console.log(footer.offsetWidth);
console.log(footer.offsetHeight);

console.log(footer.clientWidth);
console.log(footer.clientHeight);

// Posição do elemento

const product1 = products[0]

console.log(product1.getBoundingClientRect())

// Alterando estilo do elemento CSS com JS

mainContainer.style.color = "purple";
mainContainer.style.backgroundColor = "pink";
mainContainer.style.padding = "20px";

// Selecionando varios elementos de uma vez 

for (const li of listarIntens){
    li.style.backgroundColor = "red";
}

