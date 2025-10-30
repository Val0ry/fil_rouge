// js/main.js
document.addEventListener('DOMContentLoaded', function() {
    // Le code pour la validation du formulaire et la gestion des composants ira ici.
    const modalFormWrapper = document.querySelector('.modal-form-wrapper');
    const showLoginLink = document.querySelector('#show-login-link');
    const showSignupLink = document.querySelector('#show-signup-link');

    // On vérifie que les éléments existent avant d'ajouter des écouteurs d'événements
    if (modalFormWrapper && showLoginLink && showSignupLink) {
        // Passer à la vue de connexion
        showLoginLink.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le lien de recharger la page
            modalFormWrapper.classList.add('show-login');
        });

        // Revenir à la vue d'inscription
        showSignupLink.addEventListener('click', (e) => {
            e.preventDefault();
            modalFormWrapper.classList.remove('show-login');
        });
    }
});