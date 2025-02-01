// Modal functionality
const loginModal = document.getElementById('loginModal');
const signupModal = document.getElementById('signupModal');
const cartModal = document.getElementById('cartModal');
const loginBtn = document.getElementById('loginBtn');
const signupBtn = document.getElementById('signupBtn');
const cartBtn = document.getElementById('cartBtn');
const closeBtn = document.querySelector('.close');
const closeSignupBtn = document.querySelector('.close-signup');
const closeCartBtn = document.querySelector('.close-cart');

// Login Modal
loginBtn.onclick = () => {
    loginModal.style.display = "block";
}

closeBtn.onclick = () => {
    loginModal.style.display = "none";
}

// Signup Modal
signupBtn.onclick = () => {
    signupModal.style.display = "block";
}

closeSignupBtn.onclick = () => {
    signupModal.style.display = "none";
}

// Cart Modal
cartBtn.onclick = () => {
    cartModal.style.display = "block";
    updateCartDisplay();
}

closeCartBtn.onclick = () => {
    cartModal.style.display = "none";
}

// Close modals when clicking outside
window.onclick = (event) => {
    if (event.target == loginModal) {
        loginModal.style.display = "none";
    }
    if (event.target == signupModal) {
        signupModal.style.display = "none";
    }
    if (event.target == cartModal) {
        cartModal.style.display = "none";
    }
}

// Login functionality
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const userType = document.getElementById('userType').value;
    
    // Add authentication logic here
    
    // Redirect based on user type
    switch(userType) {
        case 'admin':
            window.location.href = 'pages/admin/dashboard.html';
            break;
        case 'seller':
            window.location.href = 'pages/seller/dashboard.html';
            break;
        case 'user':
            window.location.href = 'index.html';
            break;
    }
});

// Signup functionality
document.getElementById('signupForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const userType = document.getElementById('signupUserType').value;
    const formData = new FormData(e.target);
    
    // Here you would typically send this data to your backend
    console.log('Signup submitted:', {
        userType: formData.get('userType'),
        name: formData.get('name'),
        email: formData.get('email'),
        password: formData.get('password')
    });
    
    alert('Signup successful! Please login to continue.');
    signupModal.style.display = "none";
    loginModal.style.display = "block";
});

// Cart functionality
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    let total = 0;

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => {
        total += item.price;
        return `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" style="width: 50px; height: 50px;">
                <div class="cart-item-details">
                    <h4>${item.name}</h4>
                    <p>$${item.price.toFixed(2)}</p>
                </div>
                <button onclick="removeFromCart(${index})">Remove</button>
            </div>
        `;
    }).join('');

    cartTotal.textContent = total.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
}

document.getElementById('checkoutBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    // Add checkout logic here
    alert('Proceeding to checkout...');
}); 