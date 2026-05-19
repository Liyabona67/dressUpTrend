// ========== CART STATE ==========
let cart = [];

function cartTotal() {
    return cart.reduce((sum, item) => {
        const num = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        return sum + num * item.qty;
    }, 0);
}

function formatPrice(num) {
    return 'R' + num.toLocaleString('en-ZA', { minimumFractionDigits: 0, maximumFractionDigits: 0 });
}

// ========== ADD TO CART ==========
function addToCart(product, size = '', qty = 1) {
    const key = product.id + '_' + size;
    const existing = cart.find(i => i.key === key);
    if (existing) {
        existing.qty += qty;
    } else {
        cart.push({ key, id: product.id, name: product.name, price: product.price, image: product.image, size, qty });
    }
    updateCartBadge();
    showCartToast(product.name);
}

function removeFromCart(key) {
    cart = cart.filter(i => i.key !== key);
    updateCartBadge();
    renderCartPage();
}

function updateQty(key, delta) {
    const item = cart.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    updateCartBadge();
    renderCartPage();
}

// ========== BADGE ==========
function updateCartBadge() {
    const total = cart.reduce((s, i) => s + i.qty, 0);
    const badge = document.getElementById('cartBadge');
    if (!badge) return;
    badge.textContent = total;
    badge.style.display = total > 0 ? 'flex' : 'none';
}

// ========== TOAST ==========
function showCartToast(name) {
    let toast = document.getElementById('cartToast');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cartToast';
        document.body.appendChild(toast);
    }
    toast.innerHTML = `<i class="fas fa-check-circle"></i> <strong>${name}</strong> added to cart`;
    toast.classList.add('visible');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => toast.classList.remove('visible'), 2800);
}

// ========== WHATSAPP MESSAGE ==========
function buildWhatsappMessage() {
    if (cart.length === 0) return '';
    let msg = `Hello DRESSUP! 👋\n\nI'd like to order the following:\n\n`;
    cart.forEach((item, i) => {
        msg += `${i + 1}. *${item.name}*\n`;
        msg += `   Size: ${item.size || 'Please advise'}\n`;
        msg += `   Qty: ${item.qty}\n`;
        msg += `   Price: ${item.price} each\n\n`;
    });
    msg += `*Order Total: ${formatPrice(cartTotal())}*\n\n`;
    msg += `Please confirm availability and delivery details. Thank you!`;
    return msg;
}

// ========== CART PAGE ==========
function renderCartPage() {
    hideHero();

    if (cart.length === 0) {
        document.getElementById('app').innerHTML = `
            <div class="cart-empty-page">
                <div class="cart-empty-inner">
                    <div class="cart-empty-icon"><i class="fas fa-shopping-bag"></i></div>
                    <h2>Your Cart is Empty</h2>
                    <p>Looks like you haven't added anything yet. Browse our collections and find something you love.</p>
                    <button class="btn gold-btn" id="cartShopBtn"><i class="fas fa-arrow-right" style="font-size:0.8rem;"></i> Browse Collection</button>
                </div>
            </div>
        `;
        document.getElementById('cartShopBtn')?.addEventListener('click', () => renderAllProducts());
        return;
    }

    const itemsHtml = cart.map(item => `
        <div class="cart-item" data-key="${item.key}">
            <div class="cart-item-img">
                <img src="${item.image}" alt="${item.name}" onerror="this.src='https://placehold.co/120x140/F7F4F0/3D3530?text=DT'">
            </div>
            <div class="cart-item-details">
                <div class="cart-item-top">
                    <div>
                        <h4>${item.name}</h4>
                        <div class="cart-item-meta">
                            <span class="cart-item-size-label">Size:</span>
                            <input class="cart-size-input" type="text" placeholder="e.g. S, M, L, XL" value="${item.size}" data-key="${item.key}">
                        </div>
                    </div>
                    <button class="cart-remove-btn" data-key="${item.key}" title="Remove"><i class="fas fa-times"></i></button>
                </div>
                <div class="cart-item-bottom">
                    <div class="cart-qty-control">
                        <button class="qty-btn" data-key="${item.key}" data-delta="-1">−</button>
                        <span class="qty-value">${item.qty}</span>
                        <button class="qty-btn" data-key="${item.key}" data-delta="1">+</button>
                    </div>
                    <div class="cart-item-price">${formatPrice(parseFloat(item.price.replace(/[^0-9.]/g, '')) * item.qty)}</div>
                </div>
            </div>
        </div>
    `).join('');

    const html = `
        <div class="cart-page">
            <div class="cart-page-header">
                <div class="container">
                    <h1>Your Cart <span class="cart-count-label">${cart.reduce((s,i)=>s+i.qty,0)} item${cart.reduce((s,i)=>s+i.qty,0)!==1?'s':''}</span></h1>
                    <p>Review your items, confirm sizes, then send your order via WhatsApp.</p>
                </div>
            </div>
            <div class="cart-body container">
                <div class="cart-items-col">
                    ${itemsHtml}
                </div>
                <div class="cart-summary-col">
                    <div class="cart-summary-card">
                        <h3>Order Summary</h3>
                        <div class="summary-row">
                            <span>Subtotal</span>
                            <span>${formatPrice(cartTotal())}</span>
                        </div>
                        <div class="summary-row">
                            <span>Delivery</span>
                            <span class="summary-note">Confirmed via WhatsApp</span>
                        </div>
                        <div class="summary-divider"></div>
                        <div class="summary-row summary-total">
                            <span>Total</span>
                            <span>${formatPrice(cartTotal())}</span>
                        </div>
                        <a id="cartWhatsappBtn" class="btn gold-btn cart-wa-btn" target="_blank">
                            <i class="fab fa-whatsapp"></i> Order via WhatsApp
                        </a>
                        <button class="btn outline-btn cart-continue-btn" id="cartContinueBtn">
                            <i class="fas fa-arrow-left" style="font-size:0.75rem;"></i> Continue Shopping
                        </button>
                        <p class="cart-wa-note">Tapping the button opens WhatsApp with your full order ready to send.</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById('app').innerHTML = html;

    // Wire up WhatsApp button
    const waBtn = document.getElementById('cartWhatsappBtn');
    if (waBtn) {
        waBtn.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(buildWhatsappMessage())}`;
    }

    document.getElementById('cartContinueBtn')?.addEventListener('click', () => renderAllProducts());

    // Qty buttons
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateQty(btn.dataset.key, parseInt(btn.dataset.delta));
            // re-sync WhatsApp link after qty change
            const wa = document.getElementById('cartWhatsappBtn');
            if (wa) wa.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(buildWhatsappMessage())}`;
        });
    });

    // Remove buttons
    document.querySelectorAll('.cart-remove-btn').forEach(btn => {
        btn.addEventListener('click', () => removeFromCart(btn.dataset.key));
    });

    // Size inputs — update cart item size live and refresh WhatsApp link
    document.querySelectorAll('.cart-size-input').forEach(input => {
        input.addEventListener('input', () => {
            const item = cart.find(i => i.key === input.dataset.key);
            if (item) {
                item.size = input.value;
                const wa = document.getElementById('cartWhatsappBtn');
                if (wa) wa.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(buildWhatsappMessage())}`;
            }
        });
    });
}