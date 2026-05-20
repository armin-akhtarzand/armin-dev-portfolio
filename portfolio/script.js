const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(navItem => navItem.classList.remove('active-link'));
        link.classList.add('active-link');
    });
});

const cards = document.querySelectorAll('.card, .education-card');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-card');
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(card => {
    card.classList.add('hidden-card');
    observer.observe(card);
});
