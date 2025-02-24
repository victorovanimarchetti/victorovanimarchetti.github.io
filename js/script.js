// Controle de rolagem para pular seções apenas no fim
let ticking = false;

window.addEventListener("wheel", function(event) {
    if (!ticking) {
        ticking = true;
        const delta = event.deltaY; // Direção do scroll (positivo = baixo, negativo = cima)
        const sections = document.querySelectorAll("section");
        const scrollTop = window.scrollY; // Posição atual do scroll
        const windowHeight = window.innerHeight; // Altura da janela

        // Encontra a seção atual com base na posição de scroll
        const currentSectionIndex = Math.floor(scrollTop / windowHeight);
        const currentSection = sections[currentSectionIndex];
        const sectionHeight = currentSection.offsetHeight; // Altura real da seção
        const sectionTop = currentSection.offsetTop; // Posição do topo da seção
        const sectionBottom = sectionTop + sectionHeight; // Posição do fim da seção

        // Calcula a posição do fundo da janela visível
        const viewportBottom = scrollTop + windowHeight;

        // Rola para baixo apenas se estiver no fim da seção (exceto na última seção)
        if (delta > 0 && viewportBottom >= sectionBottom - 1 && currentSectionIndex < sections.length - 1) {
            event.preventDefault(); // Previne rolagem padrão apenas ao pular
            sections[currentSectionIndex + 1].scrollIntoView({ behavior: "smooth" });
        }
        // Rola para cima apenas se estiver no topo da seção
        else if (delta < 0 && scrollTop <= sectionTop + 1 && currentSectionIndex > 0) {
            event.preventDefault(); // Previne rolagem padrão apenas ao pular
            sections[currentSectionIndex - 1].scrollIntoView({ behavior: "smooth" });
        }
        // Permite rolagem padrão dentro da última seção ou se não houver pulo
        else if (currentSectionIndex === sections.length - 1 || (delta > 0 && viewportBottom < sectionBottom)) {
            // Não faz nada extra, permitindo rolagem padrão
        }

        setTimeout(() => ticking = false, 300); // Debounce para evitar disparos múltiplos
    }
}, { passive: false });

// Toggle do menu responsivo (mobile)
const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

if (menuToggle && menu) {
    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("hidden");
    });
} else {
    console.error("Menu toggle or menu element not found in the DOM");
}
