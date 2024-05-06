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
