document.getElementById('productForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Professional Animation / Feedback
    const btn = document.querySelector('.btn-submit');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Saving...";
    btn.disabled = true;

    setTimeout(() => {
        alert("✅ Success! Product added to global inventory database.");
        btn.innerHTML = originalText;
        btn.disabled = false;
        this.reset();
    }, 1500);
});

// Theme Toggle (Shared with Index)
document.getElementById('theme-toggle').addEventListener('click', () => {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
});