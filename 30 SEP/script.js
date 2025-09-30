// Lista de imágenes del carrusel
const imagenes = [
    "https://via.placeholder.com/600x300?text=Imagen+1",
    "https://via.placeholder.com/600x300?text=Imagen+2",
    "https://via.placeholder.com/600x300?text=Imagen+3"
];

let indiceActual = 0;

function mostrarImagen() {
    const img = document.getElementById("imagen");
    img.src = imagenes[indiceActual];
}

function siguiente() {
    indiceActual = (indiceActual + 1) % imagenes.length;
    mostrarImagen();
}

function anterior() {
    indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
    mostrarImagen();
}
const imagenes = [
    "img/foto1.jpg",
    "img/foto2.jpg",
    "img/foto3.jpg"
];
