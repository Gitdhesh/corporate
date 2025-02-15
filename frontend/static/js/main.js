document.addEventListener('DOMContentLoaded', function() {
    // Load dashboard metrics if we're on the dashboard page
    if (document.querySelector('.dashboard-container')) {
        fetchMetrics();
    }
});

async function fetchMetrics() {
    try {
        const response = await fetch('/api/sustainability-metrics');
        const data = await response.json();
        
        // Update the dashboard with the received data
        document.getElementById('carbon-footprint').textContent = data.carbon_footprint + ' kg CO2';
        document.getElementById('energy-consumption').textContent = data.energy_consumption + ' kWh';
        document.getElementById('waste-reduction').textContent = data.waste_reduction + ' kg';
        document.getElementById('employee-participation').textContent = data.employee_participation + '%';
    } catch (error) {
        console.error('Error fetching metrics:', error);
    }
}

// Login form handling
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });
            
            const data = await response.json();
            
            if (data.success) {
                window.location.href = '/dashboard';
            } else {
                alert('Login failed: ' + data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            alert('An error occurred during login');
        }
    });
}

// Training module filtering
const departmentFilter = document.getElementById('department');
if (departmentFilter) {
    departmentFilter.addEventListener('change', (e) => {
        const selectedDepartment = e.target.value;
        const moduleCards = document.querySelectorAll('.module-card');
        
        moduleCards.forEach(card => {
            if (selectedDepartment === 'all' || card.dataset.department === selectedDepartment) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Start module buttons
document.querySelectorAll('.btn-start').forEach(button => {
    button.addEventListener('click', function() {
        const moduleCard = this.closest('.module-card');
        const moduleTitle = moduleCard.querySelector('h3').textContent;
        // In production, this would navigate to the module content
        alert(`Starting module: ${moduleTitle}`);
    });
});

// Registration form handling
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    registerForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;
        
        if (password !== confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        
        const formData = {
            company: document.getElementById('company').value,
            email: document.getElementById('email').value,
            department: document.getElementById('department').value,
            password: password
        };
        
        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            
            if (data.success) {
                window.location.href = '/login';
            } else {
                alert('Registration failed: ' + data.message);
            }
        } catch (error) {
            console.error('Registration error:', error);
            alert('An error occurred during registration');
        }
    });
} 