document.addEventListener('DOMContentLoaded', () => {

    // 1. Auto-set Current Date and Time
    const dateDisplay = document.getElementById('currentDate');
    const now = new Date();
    const options = { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit' 
    };
    dateDisplay.innerText = now.toLocaleDateString('en-US', options);

    // 2. Generate Random Ref Number (if not provided)
    const refDisplay = document.getElementById('refID');
    const randomID = Math.floor(1000 + Math.random() * 9000);
    refDisplay.innerText = `#AF-REP-2024-${randomID}`;

    // 3. Theme Switching (For the Digital Preview only)
    const themeBtn = document.getElementById('theme-toggle');
    const htmlTag = document.documentElement;

    themeBtn.addEventListener('click', () => {
        const isDark = htmlTag.getAttribute('data-theme') === 'dark';
        htmlTag.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

});