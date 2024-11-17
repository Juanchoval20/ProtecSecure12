// Cambio de color en la barra de navegación al hacer scroll
window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

// Desplazamiento suave en los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Animación de aparición suave en secciones
const sections = document.querySelectorAll(".section, .product-item");
const options = {
    threshold: 0.2
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return;
        } else {
            entry.target.classList.add("appear");
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    appearOnScroll.observe(section);
});
// Mostrar el botón de "Subir" al hacer scroll
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollTopBtn.classList.add("show");
    } else {
        scrollTopBtn.classList.remove("show");
    }
});

// Hacer scroll hacia arriba al hacer clic en el botón
scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Selección del modal y elementos relacionados
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const closeModal = document.querySelector(".close");
const zoomableImages = document.querySelectorAll(".zoomable");

// Abrir el modal al hacer clic en una imagen
zoomableImages.forEach(image => {
    image.addEventListener("click", () => {
        modal.style.display = "block";
        modalImg.src = image.getAttribute("data-src");
    });
});

// Cerrar el modal al hacer clic en el botón de cierre
closeModal.addEventListener("click", () => {
    modal.style.display = "none";
});

// Cerrar el modal al hacer clic fuera de la imagen
modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

