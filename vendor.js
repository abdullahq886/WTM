document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    // Mock Vendor Data
    const vendors = [
        { name: "Indus Raw Water Ltd", type: "Raw Water 🌊", contact: "021-3344556", balance: -2400 },
        { name: "Poly-Cap Packaging", type: "Bottles/Caps 🍼", contact: "0300-1122334", balance: 500 },
        { name: "Clear Blue Tankers", type: "Raw Water 🌊", contact: "0333-9988776", balance: -4500 },
        { name: "Eco-PET Solutions", type: "Bottles/Caps 🍼", contact: "042-5566778", balance: 0 }
    ];

    const renderVendors = () => {
        const tbody = document.getElementById('vendorTableBody');
        tbody.innerHTML = "";
        vendors.forEach(v => {
            const balanceStyle = v.balance < 0 ? 'color: #ef4444; font-weight: bold' : (v.balance > 0 ? 'color: #22c55e; font-weight: bold' : '');
            const balanceText = v.balance < 0 ? `Pay: $${Math.abs(v.balance)}` : (v.balance > 0 ? `Credit: $${v.balance}` : 'Clear');

            tbody.innerHTML += `
                <tr>
                    <td><strong>${v.name}</strong></td>
                    <td><span class="badge">${v.type}</span></td>
                    <td>${v.contact}</td>
                    <td style="${balanceStyle}">${balanceText}</td>
                    <td>
                        <button class="btn-sm" onclick="alert('Viewing Ledger for ${v.name}')"><i class="fas fa-file-invoice"></i> Ledger</button>
                    </td>
                </tr>
            `;
        });
    };

    renderVendors();

    // Tab Switching Logic
    window.openTab = (tabId) => {
        document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));
        document.querySelectorAll('.tab-link').forEach(tl => tl.classList.remove('active'));
        
        document.getElementById(tabId).classList.add('active');
        event.currentTarget.classList.add('active');
    };
});