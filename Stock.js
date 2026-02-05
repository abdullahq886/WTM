let activeMode = 'IN';

// 1. Theme Logic
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const html = document.documentElement;
    const isDark = html.getAttribute('data-theme') === 'dark';
    html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

// 2. Transaction Mode Logic
const setTransactionMode = (mode) => {
    activeMode = mode;
    const btnIn = document.getElementById('modeIn');
    const btnOut = document.getElementById('modeOut');
    const title = document.getElementById('formTitle');
    const desc = document.getElementById('formDesc');
    const refLabel = document.getElementById('refLabel');
    const refInput = document.getElementById('refInput');
    const qtyLabel = document.getElementById('qtyLabel');
    const submitBtn = document.getElementById('mainSubmitBtn');
    const statusMode = document.getElementById('statusMode');

    if (mode === 'IN') {
        btnIn.classList.add('active');
        btnOut.classList.remove('active');
        title.innerText = "Stock Inward Entry 📥";
        desc.innerText = "Register incoming stock from vendors or production refills.";
        refLabel.innerText = "Reference (Invoice # / Vendor Name) 🧾";
        refInput.placeholder = "e.g. INV-992 / Aqua-Source Ltd";
        qtyLabel.innerText = "Purchase Quantity 🔢";
        submitBtn.style.background = "#16a34a";
        statusMode.innerText = "PURCHASE_IN";
    } else {
        btnOut.classList.add('active');
        btnIn.classList.remove('active');
        title.innerText = "Stock Outward Entry 📤";
        desc.innerText = "Dispatch stock for sales, site deliveries, or warehouse outflow.";
        refLabel.innerText = "Reference (Delivery Note / Customer Name) 👥";
        refInput.placeholder = "e.g. DN-502 / Green Building Co.";
        qtyLabel.innerText = "Sale / Delivery Quantity 🔢";
        submitBtn.style.background = "#dc2626";
        statusMode.innerText = "SALES_OUT";
    }
    updateLiveBalance();
};

// 3. Live Balance Calculation Engine
const updateLiveBalance = () => {
    const currentStock = 1200; // Mock current stock value
    const inputQty = parseInt(document.getElementById('qtyInput').value) || 0;
    const resultDisplay = document.getElementById('newBalance');

    if (activeMode === 'IN') {
        resultDisplay.innerText = (currentStock + inputQty).toLocaleString();
    } else {
        resultDisplay.innerText = (currentStock - inputQty).toLocaleString();
    }
};

document.getElementById('qtyInput').addEventListener('input', updateLiveBalance);

// 4. Set Today's Date by Default
document.getElementById('entryDate').valueAsDate = new Date();

// 5. Professional Form Feedback
document.getElementById('stockMovementForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const btn = document.getElementById('mainSubmitBtn');
    const originalText = btn.innerHTML;
    
    btn.innerHTML = "<i class='fas fa-sync fa-spin'></i> Syncing Ledger...";
    btn.disabled = true;

    setTimeout(() => {
        alert(`TRANSACTION COMMITTED! ✅\nMode: ${activeMode}\nNew Inventory Balance: ${document.getElementById('newBalance').innerText}`);
        btn.innerHTML = originalText;
        btn.disabled = false;
        this.reset();
        document.getElementById('entryDate').valueAsDate = new Date();
        updateLiveBalance();
    }, 1500);
});