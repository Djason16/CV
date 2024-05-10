const header = document.querySelector('.header');
const trait = header.querySelector('::after');

let currentThickness = 4; // Épaisseur initiale du trait en pixels
const reduceInterval = 100; // Intervalle de réduction en millisecondes

function reduceThickness() {
    if (currentThickness > 0) {
        currentThickness--; // Réduire l'épaisseur du trait
        trait.style.height = `${currentThickness}px`; // Mettre à jour la hauteur du trait
    }
}

// Réduire progressivement l'épaisseur du trait à intervalles réguliers
const intervalId = setInterval(reduceThickness, reduceInterval);

// Arrêter l'intervalle lorsque l'épaisseur du trait atteint 0
if (currentThickness === 0) {
    clearInterval(intervalId);
}


// Sélection de l'élément où afficher le mois et l'année
const dateDisplayElement = document.getElementById('date');

// Fonction pour afficher le mois suivi d'un point et de l'année avec un espace après
function displayMonthAndYear() {
    const date = new Date(); // Obtenir la date actuelle
    const month = date.toLocaleString('en-US', { month: 'long' }); // Nom complet du mois (en anglais)
    const year = date.getFullYear(); // Année actuelle

    // Formatage du mois suivi d'un point et de l'année avec un espace après (ex: "May. 2024 ")
    const formattedDate = `${month}.${year}`;

    // Vérifier si l'élément dateDisplayElement existe avant de mettre à jour son contenu
    if (dateDisplayElement) {
        // Mettre à jour le contenu de l'élément HTML
        dateDisplayElement.textContent = formattedDate;
    } else {
        console.error("L'élément avec l'ID 'date' n'a pas été trouvé.");
    }
}

// Appeler la fonction une première fois pour afficher le mois et l'année au chargement de la page
document.addEventListener('DOMContentLoaded', displayMonthAndYear);

// Fonction pour charger la vidéo YouTube en plein écran et ajuster le conteneur
function loadYouTubeVideo() {
    const videoId = 'qnz5XWxWeJg'; // Remplacez ceci par l'ID de votre vidéo YouTube

    // Création de l'URL avec les paramètres de lecture en qualité 4K
    const videoUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&loop=1&rel=0&modestbranding=1&playlist=${videoId}&mute=1&vq=hd2160`;

    // Création de l'élément iframe pour la vidéo YouTube
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', videoUrl);
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('allowfullscreen', '');

    // Ajouter l'iframe au conteneur spécifié
    const videoContainer = document.getElementById('youtube-video');
    videoContainer.appendChild(iframe);
}

// Appeler la fonction pour charger la vidéo au chargement de la page
window.onload = function () {
    loadYouTubeVideo();
};

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
    const pages = document.querySelectorAll(".page");
    const closeButtons = document.querySelectorAll(".closeButton");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const target = button.getAttribute("data-target");
            const targetPage = document.getElementById(target + "Page");

            // Réinitialiser tous les conteneurs de page
            pages.forEach(page => {
                if (page !== targetPage) {
                    page.classList.remove("active");
                }
            });

            // Activer la page ciblée ou désactiver si déjà active
            targetPage.classList.toggle("active");
        });
    });

    // Fermer la page correspondante lorsqu'on clique sur le bouton de fermeture
    closeButtons.forEach(closeButton => {
        closeButton.addEventListener("click", function() {
            const target = closeButton.getAttribute("data-target");
            const targetPage = document.getElementById(target + "Page");

            // Désactiver la page correspondante
            targetPage.classList.remove("active");
        });
    });

    // Fermer tout contenu caché lorsqu'un clic est effectué n'importe où sur la page
    document.addEventListener("click", function(event) {
        const isPageContentClicked = event.target.closest(".page") !== null;
        const isButtonClicked = event.target.closest(".button") !== null;

        // Si le clic n'est pas sur le contenu caché ni sur un bouton, désactiver tout contenu caché
        if (!isPageContentClicked && !isButtonClicked) {
            pages.forEach(page => {
                page.classList.remove("active");
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        // Obtenez la hauteur du contenu de chaque page
        const contentHeight = page.scrollHeight;
        
        // Définissez la largeur du scroll en fonction de la hauteur du contenu
        page.style.scrollbarWidth = contentHeight > window.innerHeight ? "10px" : "5px";
    });
});
