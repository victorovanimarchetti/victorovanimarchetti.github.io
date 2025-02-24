// Dados de texto em inglês
const content = {
    title: "Hello, I'm Victor Marchetti",
    subtitle: "I enjoy exploring the connection between technology and science to create helpful solutions",
    words: "I’m a medical student with an interest in programming, starting at age 11, and I’ve worked on small projects in web development and machine learning, using tools like PHP, Python, and R.",
    links: ["Home", "About Me", "Web Development", "Machine Learning", "Contact"],
    about: {
        title: "About Me",
        description: "I’m someone who enjoys combining technology, medicine, and administration to explore solutions for everyday challenges.",
        techTitle: "Technical Degree in Administration Integrated with High School - IFES Colatina",
        techDesc: "I completed my technical degree at a respected public high school in Brazil, where I began learning about management and technology.",
        medTitle: "Medical Student - UNESC",
        medDesc: "I’m currently a Prouni scholar studying medicine at UNESC, with an interest in evidence-based practice and research."
    },
    webDevelopment: {
        title: "Web Development",
        description: "I’ve worked on a few web projects to support education, healthcare, and personal productivity.",
        projects: [
            {
                title: "IFES Campus Colatina Event Registration System",
                desc: "A simple platform I developed to help manage event registrations at IFES Campus Colatina, hoping to make things a bit easier for the institution.",
                details: [
                    "Basic administrative registration for events and sub-events.",
                    "Individual logins for students, with over 500 users registered.",
                    "Simple limits on event capacity and prevention of overlapping registrations.",
                    "Online and printable attendance lists.",
                    "CSV export for certificate issuance through the campus system.",
                    "Used in events like 'Semana de Arte e Cultura' and 'Café Científico'."
                ],
                link: "#"
            },
            {
                title: "Spaced Revision System for Medical Residency Prep",
                desc: "A small tool I created for my own use in preparing for medical residency, which I shared with a few peers who found it useful.",
                details: [
                    "Basic individual user registration.",
                    "Automatic import of schedules from some Brazilian prep courses.",
                    "Simple distribution of content over customizable time intervals.",
                    "Adjustments for delayed schedules.",
                    "Tracking of question accuracy metrics.",
                    "Scheduled spaced revision based on study dates."
                ],
                link: "https://app.jarevisou.com.br"
            },
            {
                title: "Healthcare System with Patient Area",
                desc: "A modest project I worked on for my portfolio, aiming to simplify interactions between patients and healthcare providers.",
                details: [
                    "Basic whitelabel system with simple customization options for colors, name, link, and app.",
                    "Dynamic medical record system with forms created by the professional.",
                    "Patient area with individual login.",
                    "Support for patient forms tracking basic health metrics like blood pressure, mood, and lab results."
                ],
                link: "#"
            }
        ]
    },
    machineLearning: {
        title: "Machine Learning",
        description: "I’ve explored machine learning to contribute modestly to healthcare and predictive analytics.",
        works: [
            {
                title: "Random Forest Model for Predicting Ventilator-Associated Pneumonia (VAP) in Patients on Mechanical Ventilation for Over 48 Hours",
                desc: "I contributed to a study presented at the 'Brazilian Congress of Intensive Care Medicine,' published in: Revista Brasileira de Terapia Intensiva, Supplement 1, 2022.",
                details: [
                    "Authors: Victor Hugo Ovani Marchetti, et al.",
                    "Work presented at the 'Brazilian Congress of Intensive Care Medicine' with proceedings published in: Revista Brasileira de Terapia Intensiva, Supplement 1, 2022."
                ],
                certificate: "https://criticalcarescience.org/wp-content/uploads/sites/7/2024/04/RBTI_Suplemento_2022.pdf"
            },
            {
                title: "Predictive Capacity of the Random Forest Model for Mortality in COVID-19 Patients: A Data Analysis in the Pandemic Context",
                desc: "I participated in a study presented at the 'Brazilian Congress of Infectious Diseases,' published in: Brazilian Journal of Infectious Diseases, 27(S1):102812, 2023.",
                details: [
                    "Authors: Victor Hugo Ovani Marchetti, M. E. P. Dalmaschio, Tatiani Bellettini-Santos, E. T. Pandini.",
                    "Work presented at the 'Brazilian Congress of Infectious Diseases' with proceedings published in: Brazilian Journal of Infectious Diseases, 27(S1):102812, 2023."
                ],
                certificate: "https://www.sciencedirect.com/science/article/pii/S1413867023001605?__cf_chl_tk=7AdPKX1YXmfGLiLlDasEDVhPk.au4.xLWCf5JvW9VJM-1740328356-1.0.1.1-5ukd2rUugr0hmJmH4lk9lJjPqIM3AgY0YeoTv7o6gQo"
            },
            {
                title: "Application of Machine Learning Algorithms in Predicting Hospital Outcomes for Patients with Heart Failure",
                desc: "I contributed to a project presented at the 'SBC-ES Congress,' with a certificate available at:",
                details: [
                    "Authors: Victor Hugo Ovani Marchetti, et al.",
                    "Work presented at the 'SBC-ES Congress' with certificate available at:"
                ],
                certificate: "https://inscricaoeletronica.com.br/liveeventos/congressosbces2024/certificado/certificado2.php?id=9793&c=15"
            },
            {
                title: "Analysis of Artificial Intelligence Models for Diagnosing Chagas Disease: An Application to the SINAN System (2017-2021)",
                desc: "I was involved in a study presented at the 'SBC-ES Congress,' with a certificate available at:",
                details: [
                    "Authors: Victor Hugo Ovani Marchetti, et al.",
                    "Work presented at the 'SBC-ES Congress' with certificate available at:"
                ],
                certificate: "https://inscricaoeletronica.com.br/liveeventos/congressosbces2024/certificado/certificado2.php?id=9793&c=44"
            },
            {
                title: "Machine Learning Models for Pre-Test Probability Assessment of Hypertension",
                desc: "I contributed to a project presented at the 'SBC-ES Congress,' with a certificate available at:",
                details: [
                    "Authors: Victor Hugo Ovani Marchetti, et al.",
                    "Work presented at the 'SBC-ES Congress' with certificate available at:"
                ],
                certificate: "https://inscricaoeletronica.com.br/liveeventos/congressosbces2024/certificado/certificado2.php?id=9793&c=45"
            }
        ]
    },
    contact: {
        title: "Contact",
        description: "I’d be happy to connect and chat about ideas or projects.",
        email: "victormarchetti.51@gmail.com",
        socials: [
            { name: "GitHub", url: "https://github.com/victorovanimarchetti", icon: "fab fa-github" },
            { name: "LinkedIn", url: "https://www.linkedin.com/in/victorovanimarchetti/", icon: "fab fa-linkedin" },
            { name: "Lattes", url: "http://lattes.cnpq.br/2638471094320533", icon: "fas fa-user-graduate" },
            { name: "Instagram", url: "https://instagram.com/medvictormarchetti", icon: "fab fa-instagram" }
        ]
    }
};

// Elementos do DOM
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const words = document.getElementsByClassName("fade-in-delay")[1];
const links = [
    document.getElementById("link-home"),
    document.getElementById("link-about"),
    document.getElementById("link-web-development"),
    document.getElementById("link-machine-learning"),
    document.getElementById("link-contact")
];
const aboutTitle = document.querySelector("#about h2");
const aboutDesc = document.querySelector("#about p");
const techTitle = document.querySelector("#about h3:nth-of-type(1)");
const techDesc = document.querySelector("#about div:nth-of-type(1) p");
const medTitle = document.querySelector("#about h3:nth-of-type(2)");
const medDesc = document.querySelector("#about div:nth-of-type(2) p");
const webDevTitle = document.querySelector("#web-development h2");
const webDevDesc = document.querySelector("#web-development > div > p");
const webDevProjects = document.querySelectorAll("#web-development .space-y-12 > div");
const mlTitle = document.querySelector("#machine-learning h2");
const mlDesc = document.querySelector("#machine-learning > div > p");
const mlWorks = document.querySelectorAll("#machine-learning .space-y-12 > div");
const contactTitle = document.querySelector("#contact h2");
const contactDesc = document.querySelector("#contact p");
const contactEmail = document.querySelector("#contact .text-center p");
const contactSocials = document.querySelector("#contact .flex");

// Atualiza o conteúdo inicialmente
function updateContent() {
    title.textContent = content.title;
    subtitle.textContent = content.subtitle;
    words.textContent = content.words;
    links.forEach((link, index) => {
        link.textContent = content.links[index];
    });
    aboutTitle.textContent = content.about.title;
    aboutDesc.textContent = content.about.description;
    techTitle.textContent = content.about.techTitle;
    techDesc.textContent = content.about.techDesc;
    medTitle.textContent = content.about.medTitle;
    medDesc.textContent = content.about.medDesc;
    webDevTitle.textContent = content.webDevelopment.title;
    webDevDesc.textContent = content.webDevelopment.description;
    webDevProjects.forEach((project, index) => {
        project.querySelector("h3").textContent = content.webDevelopment.projects[index].title;
        project.querySelector("p").textContent = content.webDevelopment.projects[index].desc;
        project.querySelector("ul").innerHTML = content.webDevelopment.projects[index].details
            .map(detail => `<li>${detail}</li>`).join("");
        project.querySelector("a").href = content.webDevelopment.projects[index].link;
    });
    mlTitle.textContent = content.machineLearning.title;
    mlDesc.textContent = content.machineLearning.description;
    mlWorks.forEach((work, index) => {
        work.querySelector("h3").textContent = content.machineLearning.works[index].title;
        work.querySelector("p").textContent = content.machineLearning.works[index].desc;
        work.querySelector("ul").innerHTML = content.machineLearning.works[index].details
            .map(detail => `<li>${detail}</li>`).join("");
        const certificateLinks = work.querySelector("p:last-child");
        if (typeof content.machineLearning.works[index].certificate === "string") {
            certificateLinks.innerHTML = `<a href="${content.machineLearning.works[index].certificate}" target="_blank" class="underline hover:text-cyan-300">Click here to view</a>`;
        }
    });
    contactTitle.textContent = content.contact.title;
    contactDesc.textContent = content.contact.description;
    contactEmail.innerHTML = `Email: <a href="mailto:${content.contact.email}" class="underline hover:text-cyan-300">${content.contact.email}</a>`;
    contactSocials.innerHTML = content.contact.socials
        .map(social => `<a href="${social.url}" target="_blank" class="text-cyan-400 hover:text-cyan-300 flex items-center gap-2"><i class="${social.icon} fa-lg text-white"></i> ${social.name}</a>`)
        .join("");
}

// Inicializa o conteúdo ao carregar
document.addEventListener("DOMContentLoaded", updateContent);

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
