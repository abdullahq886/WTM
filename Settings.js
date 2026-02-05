document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Switcher Logic
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    // Sidebar Navigation Logic
    window.showPanel = (panelId) => {
        // Hide all panels
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        // Remove active class from menu
        document.querySelectorAll('.settings-menu li').forEach(li => li.classList.remove('active'));
        
        // Show selected panel
        document.getElementById(panelId + '-panel').classList.add('active');
        // Add active to current menu item
        event.currentTarget.classList.add('active');
    };

    // Placeholder for "Save Settings" interaction
    document.querySelector('.btn-primary').addEventListener('click', () => {
        const btn = event.target;
        btn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Saving...";
        setTimeout(() => {
            alert("✅ System Configuration Updated Successfully!");
            btn.innerHTML = "Update Profile ✅";
        }, 1500);
    });
});