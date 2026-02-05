document.addEventListener('DOMContentLoaded', () => {
    
    // Theme Toggle Logic
    const themeBtn = document.getElementById('theme-toggle');
    themeBtn.addEventListener('click', () => {
        const html = document.documentElement;
        const isDark = html.getAttribute('data-theme') === 'dark';
        html.setAttribute('data-theme', isDark ? 'light' : 'dark');
        themeBtn.innerHTML = isDark ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
    });

    // Clock for Footer
    setInterval(() => {
        document.getElementById('clock').innerText = new Date().toLocaleTimeString();
    }, 1000);

    // Mock Data for Staff
    const staffMembers = [
        { name: "Aslam Khan", role: "Delivery Boy", type: "Field", phone: "0300-1122334", status: "online", salary: 15000, jars: 450, comm: 5 },
        { name: "Sajid Mehmood", role: "Delivery Boy", type: "Field", phone: "0312-5566778", status: "offline", salary: 15000, jars: 380, comm: 5 },
        { name: "Mariam Ali", role: "Accounts Manager", type: "Office", phone: "0333-9988776", status: "online", salary: 35000, jars: 0, comm: 0 },
        { name: "Bilal Raza", role: "Supervisor", type: "Office", phone: "0345-4433221", status: "online", salary: 25000, jars: 0, comm: 0 }
    ];

    const renderStaff = () => {
        const tbody = document.getElementById('staffTableBody');
        const payrollBody = document.getElementById('payrollTableBody');
        tbody.innerHTML = "";
        payrollBody.innerHTML = "";

        staffMembers.forEach(s => {
            // Render Directory
            tbody.innerHTML += `
                <tr>
                    <td><strong>${s.name}</strong></td>
                    <td><span class="badge badge-${s.type.toLowerCase()}">${s.role}</span></td>
                    <td>${s.phone}</td>
                    <td><span class="status-dot ${s.status}"></span> ${s.status.toUpperCase()}</td>
                    <td><button class="btn-sm"><i class="fas fa-edit"></i> Edit</button></td>
                </tr>
            `;

            // Render Payroll (Salary + Commission)
            const commissionTotal = s.jars * s.comm;
            const totalPayable = s.salary + commissionTotal;
            payrollBody.innerHTML += `
                <tr>
                    <td><strong>${s.name}</strong><br><small>${s.role}</small></td>
                    <td>$${s.salary}</td>
                    <td>${s.jars > 0 ? s.jars : '-'}</td>
                    <td>${commissionTotal > 0 ? '$'+commissionTotal : '-'}</td>
                    <td class="payable">$${totalPayable}</td>
                    <td><span class="badge" style="background:#fef3c7; color:#92400e;">Pending</span></td>
                </tr>
            `;
        });
    };

    renderStaff();

    // Tab Logic
    window.openTab = (tabId) => {
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
        document.querySelectorAll('.tab-link').forEach(l => l.classList.remove('active'));
        document.getElementById(tabId).classList.add('active');
        event.currentTarget.classList.add('active');
    };
});