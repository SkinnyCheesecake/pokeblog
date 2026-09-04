const nuevoEnlace = document.createElement("A");
nuevoEnlace.classList.add("link");
nuevoEnlace.href = "blog.html";
nuevoEnlace.textContent = "Tienda";

const nuevoHeader = document.querySelector(".header__links");
nuevoHeader.appendChild(nuevoEnlace)
