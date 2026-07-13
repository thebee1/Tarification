/* ============================================
   INTELLIGENZ - Tarification
   Fichier JavaScript séparé
   ============================================ */

function showSection(sectionId) {
    // Masquer toutes les sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Retirer la classe active de tous les onglets
    document.querySelectorAll('.nav-tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Afficher la section sélectionnée
    document.getElementById(sectionId).classList.add('active');

    // Ajouter la classe active à l'onglet cliqué
    event.target.closest('.nav-tab').classList.add('active');

    // Scroll fluide vers le haut du contenu
    document.querySelector('.nav-tabs').scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Effet parallax subtil au scroll
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const header = document.querySelector('.header');
    if (header) {
        header.style.backgroundPositionY = scrolled * 0.5 + 'px';
    }
});

// Animation des cartes au scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer les cartes de service et d'abonnement
document.querySelectorAll('.service-card, .sub-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `all 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});
