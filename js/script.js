// Dados de texto em inglês
const content = {
    title: "Hello, I'm Victor Marchetti",
    subtitle: "I enjoy combining technology and science to create useful solutions",
    words: "I’m a medical student with a passion for programming, starting at age 11, and I’ve been exploring web development and machine learning, working with tools like PHP, Python, and R.",
    links: ["Home", "About Me", "Recommendations", "Web Development", "Machine Learning", "Contact"],
    about: {
        title: "About Me",
        description: "I’m someone who likes to explore the overlap of technology, medicine, and administration to tackle practical challenges.",
        techTitle: "Technical Degree in Administration Integrated with High School - IFES Colatina",
        techDesc: "I graduated from a respected public high school in Brazil, IFES Colatina, where I built a solid foundation in management and technology.",
        medTitle: "Medical Student - UNESC",
        medDesc: "As a Prouni scholar at UNESC, I’m pursuing medicine with a focus on evidence-based practice and research that pushes boundaries."
    },
    recommendations: {
        title: "Recommendations",
        description: "Insights from colleagues and mentors about my work and character.",
        recs: [
            {
                name: "Sarah Fernandes Teixeira",
                connection: "1st Degree Connection",
                date: "",
                role: "",
                textEn: "Victor Hugo has always been a standout as a student and future professional. His commendable skills, humility in learning and teaching, and relentless pursuit of excellence make him a unique colleague and student. Medicine, and any field he chooses to engage with, will surely benefit from his contributions.",
                textPt: "Victor Hugo sempre foi uma referência enquanto acadêmico e futuro profissional. Sua competência louvável, sua humildade em aprender e ensinar, e sua busca incessante pela excelência o tornam um aluno e colega singular. A Medicina, e em todas as áreas que ousar viver, irá cativar grandes feitos.",
                image: "assets/images/sarah-teixeira.jpg"
            },
            {
                name: "Helio Angotti Neto",
                connection: "1st Degree Connection",
                date: "Supervised Victor Hugo directly on April 25, 2024",
                role: "Coordinator of the Medicine Course - UNESC",
                textEn: "As a medical student, Victor Hugo is consistently proactive and deeply interested in deepening his studies in Evidence-Based Medicine. He worked as a scholarship monitor in the Evidence-Based Health Practices module of the UNESC Medicine Course, demonstrating dedication and initiative.",
                textPt: "Como estudante de medicina, sempre propositivo e interessado em aprofundar os estudos na área da Medicina Baseada em Evidências. Atuou como Monitor Bolsista no Módulo de Práticas de Saúde Baseada em Evidências do Curso de Medicina do UNESC.",
                image: "assets/images/helio-angotti.jpg"
            },
            {
                name: "George Carvalho",
                connection: "1st Degree Connection",
                date: "Supervised Victor Hugo directly on April 1, 2024",
                role: "",
                textEn: "Victor is an outstanding student! He’s engaged, shows great initiative, and stands out in the UNESC Medicine Course in Colatina.",
                textPt: "Victor é um excelente aluno! Participativo e com muita iniciativa! É um aluno de destaque no curso de medicina da UNESC em Colatina.",
                image: "assets/images/george-carvalho.jpg"
            },
            {
                name: "Octavio Cavalari Junior",
                connection: "1st Degree Connection",
                date: "Supervised Victor Hugo directly on April 1, 2024",
                role: "PhD in Science and Mathematics Education",
                textEn: "Victor was an exceptional student! He consistently participated in teaching, research, and extension activities, earning multiple awards and honors. Always engaged with the social causes of our institution, he was a standout student at Ifes-Colatina.",
                textPt: "Victor foi um aluno excepcional! Sempre participou de atividades de ensino, pesquisa e extensão, recebendo vários prêmios e honrarias! Envolvido sempre com as causas sociais da instituição, foi um aluno destaque que passou pelo Ifes-Colatina!",
                image: "assets/images/octavio-cavalari.jpg"
            },
            {
                name: "Lilia Alvarenga",
                connection: "",
                date: "",
                role: "Coordinator of the Art and Culture Nucleus - IFES Campus Colatina",
                textEn: "I’m grateful for Victor Hugo’s contribution in developing the event registration system for IFES Campus Colatina. His work has made our processes smoother and more efficient, especially for events like the 'Semana de Arte e Cultura.' His dedication and technical skills are truly appreciated.",
                textPt: "Agradeço ao Victor Hugo pela criação do sistema de inscrições para eventos do IFES Campus Colatina. Seu trabalho tornou nossos processos mais fluidos e eficientes, especialmente para eventos como a 'Semana de Arte e Cultura.' Sua dedicação e habilidades técnicas são muito valorizadas.",
                image: "assets/images/lilia-alvarenga.jpg"
            }
        ]
    },
    webDevelopment: {
        title: "Web Development",
        description: "I enjoy building web solutions that help streamline education, healthcare, and personal productivity.",
        projects: [
            {
                title: "IFES Campus Colatina Event Registration System",
                desc: "A practical platform I built to manage event registrations at IFES Campus Colatina, making things a bit easier for the institution.",
                details: [
                    "Handles administrative registration for events and sub-events.",
                    "Offers individual logins for over 500 students.",
                    "Includes capacity limits and prevents simultaneous event sign-ups.",
                    "Provides online and printable attendance lists.",
                    "Supports CSV exports for certificate issuance in the campus system.",
                    "Used effectively in events like 'Semana de Arte e Cultura' and 'Café Científico.'"
                ],
                link: "#"
            },
            {
                title: "Spaced Revision System for Medical Residency Prep",
                desc: "A tool I created for personal use and shared with peers to make medical residency preparation a bit more manageable.",
                details: [
                    "Allows individual user registration.",
                    "Automatically imports schedules from top Brazilian prep courses.",
                    "Distributes content evenly over customizable time intervals.",
                    "Adjusts schedules for students who fall behind.",
                    "Tracks question accuracy to monitor progress.",
                    "Schedules spaced revision based on study dates."
                ],
                link: "https://app.jarevisou.com.br"
            },
            {
                title: "Healthcare System with Patient Area",
                desc: "A project I developed for my portfolio, designed to simplify interactions between patients and healthcare providers.",
                details: [
                    "Offers a whitelabel system with easy customization via forms for colors, names, links, and apps.",
                    "Features dynamic medical record forms created by professionals.",
                    "Includes a patient area with individual logins.",
                    "Supports forms for tracking metrics like blood pressure, mood, and lab results."
                ],
                link: "#"
            }
        ]
    },
    machineLearning: {
        title: "Machine Learning",
        description: "I’m exploring machine learning to contribute to advancements in healthcare and predictive analytics.",
        works: [
            {
                title: "Random Forest Model for Predicting Ventilator-Associated Pneumonia (VAP) in Patients on Mechanical Ventilation for Over 48 Hours",
                desc: "Work I contributed to, presented at the 'Brazilian Congress of Intensive Care Medicine,' with proceedings in: Revista Brasileira de Terapia Intensiva, Supplement 1, 2022.",
                details: [
                    "Authors: Victor Hugo Ovani Marchetti, et al.",
                    "Work presented at the 'Brazilian Congress of Intensive Care Medicine' with proceedings published in: Revista Brasileira de Terapia Intensiva, Supplement 1, 2022."
                ],
                certificate: "https://criticalcarescience.org/wp-content/uploads/sites/7/2024/04/RBTI_Suplemento_2022.pdf"
            },
            {
                title: "Predictive Capacity of the Random Forest Model for Mortality in COVID-19 Patients: A Data Analysis in the Pandemic Context",
                desc: "Work I was part of, presented at the 'Brazilian Congress of Infectious Diseases,' with proceedings in: Brazilian Journal of Infectious Diseases, 27(S1):102812, 2023.",
                details: [
                    "Authors: Victor Hugo Ovani Marchetti, M. E. P. Dalmaschio, Tatiani Bellettini-Santos, E. T. Pandini.",
                    "Work presented at the 'Brazilian Congress of Infectious Diseases' with proceedings published in: Brazilian Journal of Infectious Diseases, 27(S1):102812, 2023."
                ],
                certificate: "https://www.sciencedirect.com/science/article/pii/S1413867023001605?__cf_chl_tk=7AdPKX1YXmfGLiLlDasEDVhPk.au4.xLWCf5JvW9VJM-1740328356-1.0.1.1-5ukd2rUugr0hmJmH4lk9lJjPqIM3AgY0YeoTv7o6gQo"
            },
            {
                title: "Application of Machine Learning Algorithms in Predicting Hospital Outcomes for Patients with Heart Failure",
                desc: "Work I contributed to, presented at the 'SBC-ES Congress,' with certificate available at:",
                details: [
                    "Authors: Victor Hugo Ovani Marchetti, et al.",
                    "Work presented at the 'SBC-ES Congress' with certificate available at:"
                ],
                certificate: "https://inscricaoeletronica.com.br/liveeventos/congressosbces2024/certificado/certificado2.php?id=9793&c=15"
            },
            {
                title: "Analysis of Artificial Intelligence Models for Diagnosing Chagas Disease: An Application to the SINAN System (2017-2021)",
                desc: "Work I was involved in, presented at the 'SBC-ES Congress,' with certificate available at:",
                details: [
                    "Authors: Victor Hugo Ovani Marchetti, et al.",
                    "Work presented at the 'SBC-ES Congress' with certificate available at:"
                ],
                certificate: "https://inscricaoeletronica.com.br/liveeventos/congressosbces2024/certificado/certificado2.php?id=9793&c=44"
            },
            {
                title: "Machine Learning Models for Pre-Test Probability Assessment of Hypertension",
                desc: "Work I contributed to, presented at the 'SBC-ES Congress,' with certificate available at:",
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
        description: "I’d be happy to connect and share ideas or feedback.",
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
    document.getElementById("link-recommendations"),
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
const recTitle = document.querySelector("#recommendations h2");
const recDesc = document.querySelector("#recommendations p");
const recItems = document.querySelectorAll("#recommendations .space-y-12 > div");
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
    recTitle.textContent = content.recommendations.title;
    recDesc.textContent = content.recommendations.description;
    recItems.forEach((rec, index) => {
        const data = content.recommendations.recs[index];
        rec.querySelector("img").src = data.image;
        rec.querySelector("img").alt = `${data.name}`;
        rec.querySelector(".text-lg.text-cyan-400").textContent = data.name;
        rec.querySelectorAll(".text-sm.text-gray-400")[0].textContent = data.connection;
        if (data.role) rec.querySelectorAll(".text-sm.text-gray-400")[1].textContent = data.role;
        if (data.date) rec.querySelectorAll(".text-sm.text-gray-400")[2].textContent = data.date;
        rec.querySelector(".text-xl").textContent = data.textEn;
        rec.querySelector(".text-sm.text-gray-500").textContent = data.textPt;
    });
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
