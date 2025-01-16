const body = document.body;

const wrapper = document.createElement("div");
const caption = document.createElement("p");
const p = document.createElement("p");
const img = document.createElement("img");
const heading = document.createElement("h1");
const innerdiv = document.createElement("div");
const secondDiv = document.createElement("div");
const h4 = document.createElement("h4");
const small = document.createElement("del");
const button = document.createElement("button");

img.src = "./assets/bitmap.png";

wrapper.classList.add("wrapper");
innerdiv.classList.add("innerDiv");
caption.classList.add("caption");
heading.classList.add("heading");
p.classList.add("p");
button.classList.add("btn");
secondDiv.classList.add("secondDiv");
small.classList.add("small");
h4.classList.add("h4");

heading.textContent = "Gabrielle Essence Eau De Parfum";
caption.textContent = "PERFUME";
small.textContent = "$169.99";
h4.textContent = "$149.99";
button.textContent = "Add to Cart";
p.textContent =
  "A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.";

body.appendChild(wrapper);
wrapper.append(img, innerdiv);
innerdiv.append(caption, heading, p, secondDiv, button);
secondDiv.append(h4, small);
