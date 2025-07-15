/**
 * Affiche ou cache le menu déroulant du profil.
 */
function toggleMenu() {
    const menu = document.getElementById("profileMenu");
    // Basculer l'affichage du menu
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

/**
 * Simule une déconnexion de l'utilisateur.
 * Dans une application réelle, cela devrait gérer les sessions/tokens.
 */
function logout() {
    alert("Déconnexion réussie ! (Fonctionnalité de démonstration)");
    // On s'assure que le menu se ferme après le clic
    document.getElementById("profileMenu").style.display = "none";
}

// Fermer le menu si l'utilisateur clique en dehors de la zone du profil
window.onclick = function(event) {
    if (!event.target.closest('.profile')) {
        const menu = document.getElementById("profileMenu");
        if (menu.style.display === "block") {
            menu.style.display = "none";
        }
    }
}