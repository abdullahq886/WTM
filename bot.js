document.addEventListener('DOMContentLoaded', () => {

    // 1. Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    themeBtn.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    // 2. Auto-Populate Current Date/Time
    const setTime = () => {
        const now = new Date();
        const offset = now.getTimezoneOffset() * 60000;
        const localTime = new Date(now - offset).toISOString().slice(0, 16);
        document.getElementById('opDateTime').value = localTime;
    };
    setTime();

    // 3. Live Volume Calculation
    const productType = document.getElementById('productType');
    const quantity = document.getElementById('quantity');
    const volDisplay = document.getElementById('totalVol');

    const calculateVolume = () => {
        const size = parseFloat(productType.value) || 0;
        const qty = parseFloat(quantity.value) || 0;
        volDisplay.innerText = (size * qty).toFixed(2);
    };

    productType.addEventListener('change', calculateVolume);
    quantity.addEventListener('input', calculateVolume);

    // 4. Professional Form Submission
    const form = document.getElementById('fillingLogForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const btn = form.querySelector('.btn-primary');
        const originalText = btn.innerHTML;
        
        btn.innerHTML = "<i class='fas fa-spinner fa-spin'></i> Syncing Record...";
        btn.disabled = true;

        setTimeout(() => {
            alert(`✅ RECORD SAVED SUCCESSFULLY!\nOperator: ${document.getElementById('operator').value}\nProduct: ${productType.options[productType.selectedIndex].text}\nTotal Volume: ${volDisplay.innerText}L`);
            btn.innerHTML = originalText;
            btn.disabled = false;
            form.reset();
            setTime();
            volDisplay.innerText = "0";
        }, 1500);
    });
});