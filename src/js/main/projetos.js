const projCard = document.querySelector('.projetos__conteudos');

const itemProjetos = [
    
    {
        titulo: "Landing Page Psicologa",
        descricao: "Site desenvolvido para uma psicóloga com o objetivo das pessoas terem um briefing de como é a sessão.",
        src: "proj-psico-lp",
        link: "https://lucasbppereira.github.io/LandingPage_Psicologa/"
    },
    {
        titulo: "AMA Itapoá",
        descricao: "Em desenvolvimento...",
        src: "proj-ama-si",
        link: "https://lucasbppereira.github.io/Projeto-AMA/"
    },
    {
        titulo: "Landing Page OceanPoá",
        descricao: "Landing Page desenvolvida afim de promover maior alcance e visibilidade da empresa para seus produtos",
        src: "proj-ocean-lp"
    }
];

projCard.innerHTML = itemProjetos.map(({titulo, descricao, src, link}) => `
    <div class="conteudo__card">
        <div class="card_img">
            <img class="conteudo__card-img" title="${titulo}" src="./public/assets/${src}.png" alt="${titulo}" />
        </div>
        <div class="conteudo__card-links">
            <a class="card_link" href="${link}"
                target="_blank" rel="external">
                <p>${titulo}</p>
                <span class="arrow_link">
                    <svg class="link-arrow-sf" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 10C0 12.6522 1.05357 15.1957 2.92893 17.0711C3.85752 17.9997 4.95991 18.7362 6.17317 19.2388C7.38642 19.7413 8.68678 20 10 20C12.6522 20 15.1957 18.9464 17.0711 17.0711C18.9464 15.1957 20 12.6522 20 10C20 8.68678 19.7413 7.38642 19.2388 6.17317C18.7362 4.95991 17.9997 3.85752 17.0711 2.92893C16.1425 2.00035 15.0401 1.26375 13.8268 0.761205C12.6136 0.258658 11.3132 0 10 0C8.68678 0 7.38642 0.258658 6.17317 0.761205C4.95991 1.26375 3.85752 2.00035 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10ZM2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 12.1217 17.1571 14.1566 15.6569 15.6569C14.1566 17.1571 12.1217 18 10 18C7.87827 18 5.84344 17.1571 4.34315 15.6569C2.84285 14.1566 2 12.1217 2 10ZM8 15L13 10L8 5V15Z"
                            fill="black" />
                    </svg>
                    <svg class="link-arrow-cf" width="20" height="20" viewBox="0 0 20 20" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M0 10C0 7.34784 1.05357 4.8043 2.92893 2.92893C4.8043 1.05357 7.34784 0 10 0C11.3132 0 12.6136 0.258658 13.8268 0.761205C15.0401 1.26375 16.1425 2.00035 17.0711 2.92893C17.9997 3.85752 18.7362 4.95991 19.2388 6.17317C19.7413 7.38642 20 8.68678 20 10C20 12.6522 18.9464 15.1957 17.0711 17.0711C15.1957 18.9464 12.6522 20 10 20C8.68678 20 7.38642 19.7413 6.17317 19.2388C4.95991 18.7362 3.85752 17.9997 2.92893 17.0711C1.05357 15.1957 0 12.6522 0 10ZM8 15L13 10L8 5V15Z"
                            fill="black" />
                    </svg>
                </span>
            </a>
            <p class="card_description">${descricao}</p>
        </div>
    </div>
`).join('');