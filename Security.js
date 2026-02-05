document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    themeBtn.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
        localStorage.setItem('admin-theme', isDark ? 'light' : 'dark');
    });

    // 2. Navigation Panel Switcher
    const navLinks = document.querySelectorAll('.nav-link');
    const panels = document.querySelectorAll('.settings-panel');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const target = link.getAttribute('data-target');

            // Remove active classes
            navLinks.forEach(l => l.classList.remove('active'));
            panels.forEach(p => p.classList.remove('active'));

            // Add active classes
            link.classList.add('active');
            document.getElementById(`${target}-panel`).classList.add('active');
        });
    });

    // 3. Form Submission Simulation
    document.querySelector('.btn-save').addEventListener('click', () => {
        const btn = event.target;
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Securing Data...';
        btn.disabled = true;

        setTimeout(() => {
            alert("SUCCESS! ✅ System configurations have been encrypted and saved to the cloud.");
            btn.innerHTML = originalText;
            btn.disabled = false;
        }, 1500);
    });

    // Load saved theme
    if(localStorage.getItem('admin-theme') === 'dark') {
        html.setAttribute('data-theme', 'dark');
        themeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    }
});