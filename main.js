// Sample product data
const products = [
    {
        id: 1,
        name: "Handmade Ceramic Vase",
        category: "pottery",
        price: 1499,
        image: "./product1.jpg",
        description: "Beautiful hand-crafted ceramic vase with traditional design",
        seller: "CeramicArtistry"
    },
    {
        id: 2,
        name: "Handwoven Silk Scarf",
        category: "textiles",
        price: 2499,
        image: "./product2.jpg",
        description: "Pure silk handwoven scarf with traditional patterns",
        seller: "SilkCrafts"
    },
    {
        id: 3,
        name: "Brass Door Knocker",
        category: "metalwork",
        price: 1999,
        image: "./product3.jpg",
        description: "Handcrafted brass door knocker with intricate designs",
        seller: "MetalArtIndia"
    },
    {
        id: 4,
        name: "Terracotta Wind Chimes",
        category: "pottery",
        price: 899,
        image: "./product4.jpg",
        description: "Handmade terracotta wind chimes with natural finish",
        seller: "EarthArtistry"
    },
    {
        id: 5,
        name: "Embroidered Cushion Cover",
        category: "textiles",
        price: 799,
        image: "./product5.jpg",
        description: "Hand-embroidered cushion cover with traditional motifs",
        seller: "ThreadArt"
    },
    {
        id: 6,
        name: "Wooden Tea Coaster Set",
        category: "woodwork",
        price: 599,
        image: "./product6.jpg",
        description: "Hand-carved wooden tea coaster set of 6",
        seller: "WoodCraftIndia"
    },
    {
        id: 7,
        name: "Beaded Jewelry Set",
        category: "jewelry",
        price: 1299,
        image: "./product7.jpg",
        description: "Handcrafted beaded necklace and earring set",
        seller: "BeadArtistry"
    },
    {
        id: 8,
        name: "Clay Diya Set",
        category: "pottery",
        price: 499,
        image: "./product8.jpg",
        description: "Set of 12 hand-painted clay diyas",
        seller: "ClayArtIndia"
    },
    {
        id: 9,
        name: "Bamboo Table Lamp",
        category: "woodwork",
        price: 1799,
        image: "./product9.jpg",
        description: "Handwoven bamboo table lamp with natural finish",
        seller: "BambooArt"
    },
    {
        id: 10,
        name: "Block Print Bedsheet",
        category: "textiles",
        price: 1999,
        image: "./product10.jpg",
        description: "Hand block printed cotton bedsheet with 2 pillow covers",
        seller: "BlockPrintStudio"
    },
    {
        id: 11,
        name: "Brass Wall Clock",
        category: "metalwork",
        price: 2999,
        image: "./product11.jpg",
        description: "Handcrafted brass wall clock with antique finish",
        seller: "MetalArtIndia"
    },
    {
        id: 12,
        name: "Macramé Plant Hanger",
        category: "textiles",
        price: 699,
        image: "./product12.jpg",
        description: "Handwoven macramé plant hanger with wooden beads",
        seller: "StringArt"
    },
    {
        id: 13,
        name: "Ceramic Tea Set",
        category: "pottery",
        price: 2499,
        image: "./product13.jpg",
        description: "Handmade ceramic tea set with 6 cups and teapot",
        seller: "CeramicArtistry"
    },
    {
        id: 14,
        name: "Wooden Photo Frame",
        category: "woodwork",
        price: 899,
        image: "./product14.jpg",
        description: "Hand-carved wooden photo frame with traditional design",
        seller: "WoodCraftIndia"
    },
    {
        id: 15,
        name: "Silver Anklet Pair",
        category: "jewelry",
        price: 1599,
        image: "./product15.jpg",
        description: "Handcrafted silver anklets with bells",
        seller: "SilverArt"
    },
    {
        id: 16,
        name: "Jute Wall Hanging",
        category: "textiles",
        price: 999,
        image: "./product16.jpg",
        description: "Handwoven jute wall hanging with tassels",
        seller: "JuteCrafts"
    },
    {
        id: 17,
        name: "Copper Water Bottle",
        category: "metalwork",
        price: 1299,
        image: "./product17.jpg",
        description: "Handcrafted copper water bottle with traditional design",
        seller: "CopperArt"
    },
    {
        id: 18,
        name: "Clay Wind Bell",
        category: "pottery",
        price: 699,
        image: "./product18.jpg",
        description: "Handmade clay wind bell with natural colors",
        seller: "ClayArtIndia"
    },
    {
        id: 19,
        name: "Wooden Spice Box",
        category: "woodwork",
        price: 1499,
        image: "./product19.jpg",
        description: "Hand-carved wooden spice box with 8 compartments",
        seller: "WoodCraftIndia"
    },
    {
        id: 20,
        name: "Silk Thread Bangles",
        category: "jewelry",
        price: 499,
        image: "./product20.jpg",
        description: "Set of 6 handmade silk thread bangles",
        seller: "ThreadArt"
    }
];

// Add favorites array at the top with other state
let favorites = [];

// Add these functions at the top with other state management
let currentUser = null;

// Function to render products
function renderProducts(productsArray) {
    const container = document.getElementById('productsContainer');
    container.innerHTML = '';

    productsArray.forEach(product => {
        const isFavorite = favorites.some(fav => fav.id === product.id);
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <button class="favorite-btn" data-id="${product.id}">
                <i class="fas fa-heart ${isFavorite ? 'active' : ''}"></i>
            </button>
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h3 class="product-name">${product.name}</h3>
            <p class="description">${product.description}</p>
            <p class="price">₹${product.price.toLocaleString('en-IN')}</p>
            <p class="seller">by ${product.seller}</p>
            <div class="button-container">
                <button class="cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i>
                    Add to Cart
                </button>
                <button class="buy-btn" onclick="buyNow(${product.id})">
                    <i class="fas fa-bolt"></i>
                    Buy Now
                </button>
            </div>
        `;

        // Add event listener for favorite button
        const favoriteBtn = productCard.querySelector('.favorite-btn');
        favoriteBtn.addEventListener('click', () => toggleFavorite(product.id));

        container.appendChild(productCard);
    });
}

// Search functionality
document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredProducts = products.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
});

// Filter functionality
function applyFilters() {
    const category = document.getElementById('categoryFilter').value;
    const priceRange = document.getElementById('priceFilter').value;

    let filteredProducts = [...products];

    if (category) {
        filteredProducts = filteredProducts.filter(product => 
            product.category === category
        );
    }

    if (priceRange) {
        const [min, max] = priceRange.split('-').map(Number);
        filteredProducts = filteredProducts.filter(product => {
            if (max) {
                return product.price >= min && product.price <= max;
            } else {
                return product.price >= min;
            }
        });
    }

    renderProducts(filteredProducts);
}

// Cart functionality
let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push(product);
        updateCartCount();
        showNotification('Product added to cart successfully!');
        // Open cart modal
        document.getElementById('cartModal').style.display = "block";
        updateCartDisplay();
    }
}

function buyNow(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // Add to cart first
        cart = [product];
        updateCartDisplay();
        // Show checkout modal or redirect to checkout page
        proceedToCheckout();
    }
}

// Add helper functions
function updateCartCount() {
    const cartCount = document.createElement('span');
    cartCount.className = 'cart-count';
    cartCount.textContent = cart.length;
    const cartBtn = document.getElementById('cartBtn');
    const existingCount = cartBtn.querySelector('.cart-count');
    if (existingCount) {
        existingCount.textContent = cart.length;
    } else {
        cartBtn.appendChild(cartCount);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

function proceedToCheckout() {
    const checkoutModal = document.createElement('div');
    checkoutModal.className = 'modal';
    checkoutModal.id = 'checkoutModal';
    checkoutModal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>Checkout</h2>
            <div class="checkout-details">
                <h3>Order Summary</h3>
                ${cart.map(item => `
                    <div class="checkout-item">
                        <span>${item.name}</span>
                        <span>₹${item.price.toLocaleString('en-IN')}</span>
                    </div>
                `).join('')}
                <div class="total">
                    <strong>Total Amount:</strong>
                    <strong>₹${cart.reduce((sum, item) => sum + item.price, 0).toLocaleString('en-IN')}</strong>
                </div>
            </div>
            <button onclick="completeOrder()" class="checkout-btn">
                <i class="fas fa-shopping-bag"></i>
                Complete Order
            </button>
        </div>
    `;
    document.body.appendChild(checkoutModal);
    checkoutModal.style.display = "block";

    const closeBtn = checkoutModal.querySelector('.close');
    closeBtn.onclick = () => {
        checkoutModal.style.display = "none";
        checkoutModal.remove();
    };
}

function completeOrder() {
    alert('Order placed successfully!');
    cart = [];
    updateCartCount();
    const checkoutModal = document.getElementById('checkoutModal');
    if (checkoutModal) {
        checkoutModal.style.display = "none";
        checkoutModal.remove();
    }
}

// Initialize page
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
});

// Event listeners for filters
document.getElementById('categoryFilter').addEventListener('change', applyFilters);
document.getElementById('priceFilter').addEventListener('change', applyFilters);

// Authentication state management
function handleLogin(userType, userData) {
    currentUser = {
        type: userType,
        ...userData
    };
    
    // Store user data in localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    
    // Update UI
    updateUIForLoggedInUser();
    loadFavorites();
}

function updateUIForLoggedInUser() {
    const navLinks = document.querySelector('.nav-links');
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const userSection = document.querySelector('.user-section');
    const userDisplayName = document.getElementById('userDisplayName');

    if (currentUser) {
        loginBtn.style.display = 'none';
        signupBtn.style.display = 'none';
        userSection.style.display = 'flex';
        userDisplayName.textContent = currentUser.name;
    } else {
        loginBtn.style.display = 'block';
        signupBtn.style.display = 'block';
        userSection.style.display = 'none';
    }
}

function handleLogout() {
    // Clear user data
    currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userFavorites');
    
    // Clear favorites and cart
    favorites = [];
    cart = [];
    
    // Update UI
    updateUIForLoggedInUser();
    updateCartCount();
    updateFavoritesCount();
    
    // Show notification
    showNotification('Logged out successfully!');
    
    // Reload the page to reset the state
    window.location.reload();
}

// Update the login form submission
document.getElementById('loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const userType = document.getElementById('userType').value;
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Simulate login (replace with actual authentication)
    handleLogin(userType, {
        name: email.split('@')[0], // Use email username as display name
        email: email
    });
    
    // Close login modal
    document.getElementById('loginModal').style.display = 'none';
    
    // Show welcome notification
    showNotification(`Welcome ${userType}!`);
    
    // Redirect based on user type
    switch(userType) {
        case 'admin':
            window.location.href = './pages/admin/dashboard.html';
            break;
        case 'seller':
            window.location.href = 'pages/seller/dashboard.html';
            break;
        case 'user':
            // Stay on main page
            break;
    }
});

// Add logout event listener
document.getElementById('logoutBtn').addEventListener('click', (e) => {
    e.preventDefault();
    handleLogout();
});

// Check authentication status on page load
document.addEventListener('DOMContentLoaded', () => {
    // Check if user was previously logged in
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIForLoggedInUser();
        loadFavorites();
    }
    
    // Add logout event listener
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', (e) => {
            e.preventDefault();
            handleLogout();
        });
    }
    
    // Initialize products
    renderProducts(products);
});

// Update toggleFavorite function
function toggleFavorite(productId) {
    if (!currentUser) {
        showNotification('Please login to add favorites!');
        return;
    }

    const product = products.find(p => p.id === productId);
    const index = favorites.findIndex(fav => fav.id === productId);
    const favoriteBtn = document.querySelector(`.favorite-btn[data-id="${productId}"] i`);
    
    if (index === -1) {
        favorites.push(product);
        favoriteBtn.classList.add('active');
        showNotification('Added to favorites!');
    } else {
        favorites.splice(index, 1);
        favoriteBtn.classList.remove('active');
        showNotification('Removed from favorites!');
    }
    
    updateFavoritesCount();
    // Store favorites in localStorage
    localStorage.setItem('userFavorites', JSON.stringify(favorites));
}

// Update favorites count function
function updateFavoritesCount() {
    const favCount = document.getElementById('favCount');
    if (favCount) {
        favCount.textContent = favorites.length;
        favCount.style.display = favorites.length > 0 ? 'block' : 'none';
    }
}

// Update showFavorites function
function showFavorites() {
    if (!currentUser) {
        showNotification('Please login to view favorites!');
        return;
    }

    const favoritesModal = document.createElement('div');
    favoritesModal.className = 'modal';
    favoritesModal.id = 'favoritesModal';
    favoritesModal.style.display = 'block';

    favoritesModal.innerHTML = `
        <div class="modal-content">
            <span class="close">&times;</span>
            <h2>My Favorites</h2>
            <div class="favorites-grid">
                ${favorites.length === 0 ? '<p>No favorites added yet!</p>' : 
                    favorites.map(item => `
                        <div class="favorite-item">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="favorite-item-details">
                                <h3>${item.name}</h3>
                                <p>₹${item.price.toLocaleString('en-IN')}</p>
                                <button onclick="removeFavorite(${item.id})">
                                    Remove
                                </button>
                            </div>
                        </div>
                    `).join('')}
            </div>
        </div>
    `;
    document.body.appendChild(favoritesModal);

    const closeBtn = favoritesModal.querySelector('.close');
    closeBtn.onclick = () => {
        favoritesModal.remove();
    };
}

// Add removeFavorite function
function removeFavorite(productId) {
    toggleFavorite(productId);
    showFavorites(); // Refresh the favorites modal
}

// Update event listener for favorites button
document.getElementById('favoritesBtn').addEventListener('click', (e) => {
    e.preventDefault();
    showFavorites();
});

// Show/hide admin key field based on user type selection
document.getElementById('signupUserType').addEventListener('change', function(e) {
    const adminKeyField = document.getElementById('adminKeyField');
    if (e.target.value === 'admin') {
        adminKeyField.style.display = 'block';
        document.getElementById('adminKey').required = true;
    } else {
        adminKeyField.style.display = 'none';
        document.getElementById('adminKey').required = false;
    }
});

// Handle signup form submission
document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const userType = document.getElementById('signupUserType').value;
    const name = e.target.querySelector('input[type="text"]').value;
    const email = e.target.querySelector('input[type="email"]').value;
    const password = e.target.querySelectorAll('input[type="password"]')[0].value;
    const confirmPassword = e.target.querySelectorAll('input[type="password"]')[1].value;
    
    // Check if passwords match
    if (password !== confirmPassword) {
        showNotification('Passwords do not match!');
        return;
    }

    // If admin signup, verify admin key
    if (userType === 'admin') {
        const adminKey = document.getElementById('adminKey').value;
        // In a real application, you would verify this key with your backend
        if (adminKey !== 'admin123') { // Example admin key
            showNotification('Invalid admin key!');
            return;
        }
    }

    // Simulate successful signup
    showNotification(`${userType} account created successfully!`);
    
    // Auto login after signup
    handleLogin(userType, {
        name: name,
        email: email
    });
    
    // Close signup modal
    document.getElementById('signupModal').style.display = 'none';
    
    // Redirect based on user type
    switch(userType) {
        case 'admin':
            window.location.href = './pages/admin/dashboard.html';
            break;
        case 'seller':
            window.location.href = 'pages/seller/dashboard.html';
            break;
        case 'user':
            // Stay on main page
            break;
    }
});

// Add this function to load favorites from localStorage
function loadFavorites() {
    if (currentUser) {
        const savedFavorites = localStorage.getItem('userFavorites');
        if (savedFavorites) {
            favorites = JSON.parse(savedFavorites);
            updateFavoritesCount();
        }
    }
}

// Add the removeFromCart function
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    updateCartDisplay();
    showNotification('Product removed from cart!');
}

// Update the updateCartDisplay function
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';

    if (cart.length === 0) {
        cartItems.innerHTML = '<p>Your cart is empty</p>';
        cartTotal.textContent = '0.00';
        return;
    }

    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p class="cart-item-price">₹${item.price.toLocaleString('en-IN')}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" class="remove-btn">
                <i class="fas fa-trash"></i>
            </button>
        `;
        cartItems.appendChild(cartItem);
    });

    // Update total with ₹ symbol and Indian number format
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    cartTotal.textContent = total.toLocaleString('en-IN');
} 
