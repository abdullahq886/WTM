document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Theme Switcher
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        const html = document.documentElement;
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        html.setAttribute('data-theme', newTheme);
        themeBtn.innerHTML = newTheme === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
    });

    // 2. Sample Data (History Logs)
    const historyData = [
        { id: "FILL-901", time: "2024-03-21 09:45 AM", product: "19 Liter Jar 🍶", qty: 200, operator: "Zeeshan Ali" },
        { id: "FILL-902", time: "2024-03-21 11:15 AM", product: "1.5 Liter Bottle 🍼", qty: 500, operator: "Sajid Khan" },
        { id: "FILL-903", time: "2024-03-20 02:30 PM", product: "500ml Bottle 💧", qty: 1200, operator: "Ahmed Raza" },
        { id: "FILL-904", time: "2024-03-20 04:00 PM", product: "19 Liter Jar 🍶", qty: 150, operator: "Zeeshan Ali" },
        { id: "FILL-905", time: "2024-03-19 10:00 AM", product: "19 Liter Jar 🍶", qty: 300, operator: "Sajid Khan" }
    ];

    const tableBody = document.getElementById('historyTableBody');

    // 3. Render Table Function
    const renderTable = (data) => {
        tableBody.innerHTML = "";
        data.forEach(item => {
            const row = `
                <tr>
                    <td style="font-weight:700; color:var(--primary)">${item.id}</td>
                    <td>${item.time}</td>
                    <td>${item.product}</td>
                    <td style="font-weight:700;">${item.qty} Units</td>
                    <td>${item.operator}</td>
                    <td><span class="status-pill">Verified</span></td>
                    <td class="action-icons">
                        <i class="fas fa-eye" onclick="viewRecord('${item.id}')" title="View Detail"></i>
                        <i class="fas fa-pen-to-square" onclick="editRecord('${item.id}')" title="Edit Log"></i>
                    </td>
                </tr>
            `;
            tableBody.innerHTML += row;
        });
    };

    renderTable(historyData);

    // 4. Action Handlers
    window.viewRecord = (id) => {
        alert(`ACCESSING ARCHIVE: Displaying full quality-check report for Entry ${id}`);
    };

    window.editRecord = (id) => {
        alert(`SECURE EDIT: Re-opening entry ${id} for correction. Authorize required.`);
    };

    // 5. Search Button Feedback
    document.querySelector('.btn-search').addEventListener('click', () => {
        const prod = document.getElementById('filterProduct').value;
        alert(`SYSTEM SEARCH: Filtering audit logs for ${prod}...`);
    });
});