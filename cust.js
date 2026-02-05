document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Toggle
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
    });

    // Mock Customer Data
    const customers = [
        { name: "Ali Ahmed", company: "Home", phone: "0312-4455667", address: "St 4, DHA Ph 5", area: "Zone A", balance: -500, lastDel: "2024-03-21" },
        { name: "Zainab Khan", company: "Beauty Salon", phone: "0321-9988776", address: "Commercial Area 2", area: "Zone B", balance: 1200, lastDel: "2024-03-20" },
        { name: "Green Builders", company: "Construction Site", phone: "0345-1122334", address: "Sector H-12 Plot 45", area: "Industrial", balance: -4500, lastDel: "2024-03-22" },
        { name: "Bilal Malik", company: "Home", phone: "0300-5566778", address: "Bahria Town Ph 7", area: "Zone A", balance: 0, lastDel: "2024-03-18" }
    ];

    const renderCustomers = (data) => {
        const tbody = document.getElementById('customerTableBody');
        tbody.innerHTML = "";
        data.forEach(cust => {
            const balanceText = cust.balance < 0 ? 
                `<span class="amt-due">Due: $${Math.abs(cust.balance)}</span>` : 
                (cust.balance > 0 ? `<span class="amt-adv">Adv: $${cust.balance}</span>` : "Clear 0.00");

            const row = `
                <tr>
                    <td>
                        <strong>${cust.name}</strong><br>
                        <small style="color:#64748b;">${cust.company}</small>
                    </td>
                    <td>
                        <i class="fas fa-phone" style="font-size:0.7rem;"></i> ${cust.phone}<br>
                        <i class="fas fa-map-marker-alt" style="font-size:0.7rem;"></i> ${cust.address}
                    </td>
                    <td>${balanceText}</td>
                    <td>${cust.lastDel}</td>
                    <td>
                        <button class="btn-history" onclick="alert('Viewing History for ${cust.name}')"><i class="fas fa-truck-clock"></i> History</button>
                    </td>
                </tr>
            `;
            tbody.innerHTML += row;
        });
    };

    renderCustomers(customers);

    // Tab Switching Logic
    window.switchTab = (tab) => {
        const listView = document.getElementById('listView');
        const addView = document.getElementById('addView');
        const btns = document.querySelectorAll('.tab-btn');

        btns.forEach(b => b.classList.remove('active'));
        
        if(tab === 'list') {
            listView.style.display = 'block';
            addView.style.display = 'none';
            btns[0].classList.add('active');
        } else {
            listView.style.display = 'none';
            addView.style.display = 'block';
            btns[1].classList.add('active');
        }
    };
});