document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    });

    // Time for Sync
    setInterval(() => {
        document.getElementById('syncTime').innerText = new Date().toLocaleTimeString();
    }, 1000);

    // Mock Data for Reports
    const reportsData = {
        sales: [
            { period: "Monday, Mar 20", total: "$1,200", returns: "$0", expenses: "$200", net: "$1,000" },
            { period: "Tuesday, Mar 21", total: "$1,500", returns: "$50", expenses: "$150", net: "$1,300" },
            { period: "Wednesday, Mar 22", total: "$900", returns: "$20", expenses: "$100", net: "$780" }
        ],
        stock: [
            { period: "19L Jars", total: "450 Units", returns: "2 Units", expenses: "-", net: "Val: $2,250" },
            { period: "1.5L PET", total: "120 Cases", returns: "0", expenses: "-", net: "Val: $1,440" }
        ]
    };

    window.showReport = (type) => {
        const title = document.getElementById('reportTitle');
        const tbody = document.getElementById('reportTableBody');
        const menuItems = document.querySelectorAll('.report-menu li');

        // Update UI Menu
        menuItems.forEach(li => li.classList.remove('active'));
        event.currentTarget.classList.add('active');

        // Update Title & Data
        tbody.innerHTML = "";
        if (type === 'sales') {
            title.innerText = "Daily/Monthly Sales Analysis Report";
            reportsData.sales.forEach(r => {
                tbody.innerHTML += `<tr><td>${r.period}</td><td>${r.total}</td><td>${r.returns}</td><td>${r.expenses}</td><td style="color:#22c55e; font-weight:700;">${r.net}</td><td><button class="btn-outline">View</button></td></tr>`;
            });
        } else if (type === 'stock') {
            title.innerText = "Current Stock Valuation Report";
            reportsData.stock.forEach(r => {
                tbody.innerHTML += `<tr><td>${r.period}</td><td>${r.total}</td><td>${r.returns}</td><td>${r.expenses}</td><td style="color:#0062BD; font-weight:700;">${r.net}</td><td><button class="btn-outline">View</button></td></tr>`;
            });
        } else {
            tbody.innerHTML = "<tr><td colspan='6' style='text-align:center; padding:50px;'>No data available for the selected date range.</td></tr>";
        }
    };

    // Load initial report
    showReport('sales');
});