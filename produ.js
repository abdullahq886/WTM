document.addEventListener('DOMContentLoaded', () => {

    // 1. Theme Logic
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    themeBtn.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    // 2. Navigation Interaction
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            navLinks.forEach(n => n.classList.remove('active'));
            this.classList.add('active');
            
            // Simulation: Changing Workspaces
            const section = this.getAttribute('data-section');
            console.log(`Switching to ${section} module...`);
        });
    });

    // 3. User Controls Simulation
    document.querySelector('.btn-refresh').addEventListener('click', () => {
        const btn = document.querySelector('.btn-refresh i');
        btn.classList.add('fa-spin');
        setTimeout(() => {
            btn.classList.remove('fa-spin');
            alert("Database Synced Successfully!");
        }, 1000);
    });
});