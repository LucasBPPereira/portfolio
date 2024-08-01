const techCard = document.querySelector('.tecnologias-icon');
const ferrCard = document.querySelector('.ferramentas-icon');

const techIcons = [
    {
        name: "HTML5",
        src: "html5_icon"
    },
    {
        name: "CSS3",
        src: "css3_icon"
    },
    {
        name: "SASS",
        src: "sass_css_icon"
    },
    {
        name: "JavaScript",
        src: "js_icon"
    }
]

techCard.innerHTML = techIcons.map(({ name, src }, id) => `
    <div class="tech__card-icon" key="${name}">
        <img src="./src/assets/icons/${src}.svg" alt="${name} icon" title="${name}" />
    </div>
`).join(''); // join não vai deixar os elementos com virgula

const ferrIcons = [
    {
        name: "VS Code",
        src: "vscode_icon"
    },
    {
        name: "Git",
        src: "git_icon"
    },
    {
        name: "Figma",
        src: "figma_icon"
    },
];

ferrCard.innerHTML = ferrIcons.map(({ name, src }, id) => `
    <div class="ferr__card-icon" key="${name}">
        <img src="./src/assets/icons/${src}.svg" alt="${name} icon" title="${name}" />
    </div>
`).join(''); 
