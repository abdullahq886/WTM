document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Theme Engine Logic
    const themeBtn = document.getElementById('theme-toggle');
    const html = document.documentElement;

    themeBtn.addEventListener('click', () => {
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    // 2. Mock Inventory Database
    const inventory = [
        { name: "19 Liter Mineral Jar 🍶", cat: "Bulk Store", qty: 450, reorder: 100, max: 600 },
        { name: "1.5 Liter PET (Case) 🍼", cat: "Retail", qty: 85, reorder: 100, max: 500 },
        { name: "500ml PET (Case) 💧", cat: "Retail", qty: 1200, reorder: 200, max: 1500 },
        { name: "Manual Hand Pump ⛽", cat: "Accessories", qty: 12, reorder: 20, max: 100 },
        { name: "Glass Dispenser Bottle 🏢", cat: "Corporate", qty: 0, reorder: 10, max: 50 }
    ];

    const tableBody = document.getElementById('balanceBody');

    // 3. Render Engine
    const renderInventory = (data) => {
        tableBody.innerHTML = "";
        data.forEach(item => {
            // Calculation for Visual Bar
            const percentage = Math.round((item.qty / item.max) * 100);
            let healthClass = "good";
            let statusText = "HEALTHY STOCK";
            let statusClass = "healthy";

            if (item.qty === 0) {
                healthClass = "crit";
                statusText = "OUT OF STOCK";
                statusClass = "out";
            } else if (item.qty <= item.reorder) {
                healthClass = "low";
                statusText = "REORDER SOON";
                statusClass = "reorder";
            }

            const row = `
                <tr>
                    <td style="font-weight:700;">${item.name}</td>
                    <td>${item.cat}</td>
                    <td><strong style="font-size: 1.1rem;">${item.qty.toLocaleString()}</strong> Units</td>
                    <td>
                        <div class="health-container">
                            <span class="health-label">Capacity: ${percentage}%</span>
                            <div class="bar-outer">
                                <div class="bar-inner ${healthClass}" style="width: ${percentage}%"></div>
                            </div>
                        </div>
                    </td>
                    <td><span class="status-badge ${statusClass}">${statusText}</span></td>
                    <td><button class="btn-order" onclick="triggerPurchase('${item.name}')">Purchase 🛒</button></td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    };

    // 4. Initial Load
    renderInventory(inventory);

    // 5. Live Search
    document.getElementById('searchInput').addEventListener('input', (e) => {
        const val = e.target.value.toLowerCase();
        const filtered = inventory.filter(item => item.name.toLowerCase().includes(val));
        renderInventory(filtered);
    });

    // 6. Sync Animation
    document.getElementById('syncBtn').addEventListener('click', () => {
        const btn = document.getElementById('syncBtn');
        btn.innerHTML = '<i class="fas fa-sync fa-spin"></i> Syncing...';
        setTimeout(() => {
            btn.innerHTML = '<i class="fas fa-sync"></i> Sync Data';
            document.getElementById('syncTime').innerText = new Date().toLocaleTimeString();
        }, 1200);
    });

    // Initialize sync time
    document.getElementById('syncTime').innerText = new Date().toLocaleTimeString();
});

function triggerPurchase(prod) {
    alert(`LOGISTICS ALERT: Creating a purchase requisition for ${prod}. Directing to procurement portal...`);
}