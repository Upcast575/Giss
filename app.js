const btnMusica = document.getElementById("btnMusica");
const btnCorazones = document.getElementById("btnCorazones");
const corazones = document.getElementById("corazones");
const btnFrase = document.getElementById("btnModal2")
const modalEl = document.getElementById("modal2");
const contentDiv = modalEl.querySelector(".content");


btnCorazones.addEventListener("click", () => {

    for (let i = 0; i < 20; i++) {

        const corazon = document.createElement("span");

        corazon.classList.add("corazon");
        corazon.textContent = "♥";

        corazon.style.left = Math.random() * 100 + "%";
        corazon.style.fontSize = Math.random() * 40 + 40 + "px";
        corazon.style.animationDuration = Math.random() * 3 + 4 + "s";
        corazon.style.animationDelay = Math.random() * 1.5 + "s";

        corazones.appendChild(corazon);

        setTimeout(() => {
            corazon.remove();
        }, 7000);
    }
});

const canciones = [
    "https://www.youtube.com/watch?v=OgCQcSmv0Uk",
    "https://www.youtube.com/watch?v=xIsCh-BA8Ew",
    "https://www.youtube.com/watch?v=9XUw4wvmRps",
    "https://www.youtube.com/watch?v=ivxGSxMu5eg",
    "https://www.youtube.com/watch?v=96T7UgD4ypg",
    "https://www.youtube.com/watch?v=wZ_VFKN6cZ8"
]

let indice = 0;

btnMusica.addEventListener("click", (e) => {
    e.preventDefault();

    if(indice >= canciones.length){
        indice = 0;
        window.open(canciones[indice], "_blank");
    }else{
        window.open(canciones[indice], "_blank");
        indice++;
    }

});

const showInfo = function (frase) {
    contentDiv.innerHTML = "";
    const infoCard = `
    <div class="modal-content fondo-verde text-light">
        <div class="modal-body d-flex flex-column justify-content-center align-items-center">
            <h1 class="led-text">💕</h1>
            <p class="text-center">${frase}</p>
        </div>
    </div>
    `;
    contentDiv.insertAdjacentHTML("afterbegin", infoCard);
    modalEl.showModal();
};

const frases = [
    "Me encanto haber coincidido contigo por bob esponja :3",
    "Gracias por hacer mis noches mas lindas, amenas y felices",
    "Escuchar tu voz mientras me cuentas cualquier cosa sobre ti, es lo mas tranquilo",
]
let otroIndice = 0;
btnFrase.addEventListener("click", (e) => {
    if(otroIndice >= frases.length){
        otroIndice = 0;
        showInfo(frases[otroIndice]);
    }else{
        showInfo(frases[otroIndice]);
        otroIndice++;
    }
});
modalEl.addEventListener("click", (e) => {

    if (e.target === modalEl) {
        modalEl.close();
    }

});
