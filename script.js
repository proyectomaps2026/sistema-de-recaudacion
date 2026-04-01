const imagenesFachadas = [
    "https://res.cloudinary.com/tu-usuario/image/upload/v1/fachadas/alcaldia_frente.jpg",
    "https://res.cloudinary.com/tu-usuario/image/upload/v1/fachadas/alcaldia_noche.jpg",
    "https://res.cloudinary.com/tu-usuario/image/upload/v1/fachadas/plaza_bolivar.jpg"
];

// Cambiar la imagen de fondo aleatoriamente al cargar
window.onload = () => {
    const contenedorImg = document.getElementById('fachada-dinamica');
    const randomImg = imagenesFachadas[Math.floor(Math.random() * imagenesFachadas.length)];
    contenedorImg.style.backgroundImage = `url('${randomImg}')`;
};

// Capturar el envío del formulario
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const cedula = document.getElementById('cedula').value;
    console.log("Intentando entrar con:", cedula);
    // Aquí conectaremos con Supabase más adelante
});
