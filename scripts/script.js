// ---------- OFFICIAL CONTACT DETAILS ----------
const CONTACT = {
    email: "dressuptrendza@outlook.com",
    whatsapp: "27837511231",  // Fixed: +27 83 751 1231 becomes 27837511231
    instagram: "https://www.instagram.com/dressup_trendza"
};

// ---------- GOOGLE SHEETS CONFIG ----------
// Paste your deployed Apps Script Web App /exec URL here.
const SHEET_API_URL = "https://script.google.com/macros/s/AKfycbyA7hlP0qWjJHqvlykle_2-39gg9ZHU3vJJY3fvcwWNv1wSw8tt5JmVpgQLQVH6YQcjwA/exec";

const PLACEHOLDER_IMG = "https://placehold.co/500x600/F7F4F0/3D3530?text=DRESSUP";
const CATEGORIES = ["men", "women", "unisex", "accessories"];

// Lightweight per-tab cache so repeat navigations don't re-hit the API.
const CACHE_KEY = "dressup_products_cache_v1";
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// ---------- PRODUCT STATE (populated by loadProducts) ----------
let products = {};
let allProducts = [];

// ---------- DATA HELPERS ----------
function parseAngles(raw) {
    if (raw === null || raw === undefined) return [];
    return String(raw)
        .split(",")
        .map(s => s.trim())
        .filter(Boolean);
}

function formatPrice(raw) {
    if (raw === null || raw === undefined || String(raw).trim() === "") return "Enquire";
    const s = String(raw).trim();
    // If the sheet stored a plain number (e.g. 2500) prefix the currency.
    return /^\d+(\.\d+)?$/.test(s) ? "R" + s : s;
}

// Convert one sheet row -> the exact product object the app expects.
// Returns null for rows that are too broken to use (they get skipped).
function normalizeProduct(row) {
    if (!row || typeof row !== "object") return null;

    const id = String(row.id ?? "").trim();
    const name = String(row.name ?? "").trim();
    if (!id || !name) return null; // mandatory fields

    const category = String(row.category ?? "").trim().toLowerCase();

    let angles = parseAngles(row.angles);
    let image = String(row.image ?? "").trim();

    // Fallback chain for missing images / angles.
    if (!image && angles.length) image = angles[0];
    if (!image) image = PLACEHOLDER_IMG;
    if (!angles.length) angles = [image];

    return {
        id,
        category,
        name,
        price: formatPrice(row.price),
        image,
        desc: String(row.desc ?? "").trim(),
        angles
    };
}

// ---------- CACHE HELPERS ----------
function readCache() {
    try {
        const raw = sessionStorage.getItem(CACHE_KEY);
        if (!raw) return null;
        const { ts, rows } = JSON.parse(raw);
        if (Date.now() - ts > CACHE_TTL_MS) return null;
        return Array.isArray(rows) ? rows : null;
    } catch (e) {
        return null;
    }
}

function writeCache(rows) {
    try {
        sessionStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), rows }));
    } catch (e) {
        /* storage disabled or full — non-fatal */
    }
}

// ---------- FETCH RAW ROWS FROM APPS SCRIPT ----------
async function fetchRows() {
    if (!SHEET_API_URL || SHEET_API_URL.includes("REPLACE_WITH_YOUR")) {
        throw new Error("Product API endpoint is not configured.");
    }

    const res = await fetch(SHEET_API_URL, { method: "GET", redirect: "follow" });
    if (!res.ok) throw new Error("Request failed with status " + res.status);

    let data;
    try {
        data = await res.json();
    } catch (e) {
        throw new Error("Server response was not valid JSON.");
    }

    if (data && data.success === false) {
        throw new Error(data.error || "The product service returned an error.");
    }

    // Accept either { success, products: [...] } or a bare [...] array.
    const rows = Array.isArray(data) ? data : (data && data.products);
    if (!Array.isArray(rows)) throw new Error("Unexpected data format from server.");

    return rows;
}

// ---------- MAIN LOADER ----------
async function loadProducts({ useCache = true } = {}) {
    let rows = useCache ? readCache() : null;

    if (!rows) {
        rows = await fetchRows();
        writeCache(rows);
    }

    const grouped = { men: [], women: [], unisex: [], accessories: [] };

    rows.forEach((row, i) => {
        const product = normalizeProduct(row);
        if (!product) {
            console.warn("[Dressup] Skipped invalid row at index " + i, row);
            return;
        }
        if (grouped[product.category]) {
            grouped[product.category].push(product);
        } else {
            console.warn("[Dressup] Unknown category '" + product.category + "' for id " + product.id);
        }
    });

    // Publish to module-scoped state used by every render function.
    products = grouped;
    allProducts = CATEGORIES.reduce((acc, c) => acc.concat(grouped[c]), []);

    return products;
}

// ---------- LOADING / ERROR UI ----------
function showLoadingState() {
    const app = document.getElementById("app");
    if (!app) return;
    if (typeof hideHero === "function") hideHero();
    app.innerHTML = `
        <div style="min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px;">
            <div style="width:46px;height:46px;border:4px solid #e7e0d8;border-top-color:#b8973a;border-radius:50%;animation:dressupSpin .9s linear infinite;"></div>
            <p style="margin-top:20px;color:#6b625a;">Loading the latest collection…</p>
        </div>
        <style>@keyframes dressupSpin{to{transform:rotate(360deg)}}</style>
    `;
}

function showLoadErrorState(error) {
    const app = document.getElementById("app");
    if (!app) return;
    if (typeof hideHero === "function") hideHero();
    const msg = (error && error.message) ? error.message : "Something went wrong.";
    app.innerHTML = `
        <div style="min-height:60vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:40px;">
            <i class="fas fa-triangle-exclamation" style="font-size:42px;color:#b8973a;margin-bottom:18px;"></i>
            <h2 style="margin:0 0 10px;color:#3d3530;">We couldn't load the store</h2>
            <p style="max-width:420px;color:#6b625a;margin:0 0 6px;">Please check your connection and try again.</p>
            <p style="max-width:420px;color:#b0a79e;font-size:.8rem;margin:0 0 22px;">${msg}</p>
            <button id="retryLoadBtn" class="btn dark-btn">↻ Try Again</button>
            <a href="https://wa.me/${CONTACT.whatsapp}" target="_blank" class="btn outline-btn" style="margin-top:12px;">
                <i class="fab fa-whatsapp"></i> Contact us on WhatsApp
            </a>
        </div>
    `;
    document.getElementById("retryLoadBtn")?.addEventListener("click", () => init());
}

// Remove duplicate products by name
function removeDuplicates(productArray) {
    const seen = new Set();
    return productArray.filter(product => {
        const normalizedName = product.name.trim().toLowerCase();
        if (seen.has(normalizedName)) {
            return false;
        }
        seen.add(normalizedName);
        return true;
    });
}

// allProducts is populated by loadProducts()

// ---------- HERO HELPERS ----------
function showHero() {
    const h = document.getElementById("heroSection");
    if (h) h.style.display = "";
}
function hideHero() {
    const h = document.getElementById("heroSection");
    if (h) h.style.display = "none";
}

// ---------- PRODUCT CARD TEMPLATE ----------
function renderProductCard(product, badge = '') {
    const badgeHtml = badge ? `<div class="product-badge">${badge}</div>` : '';
    return `
        <div class="product-card" data-product='${JSON.stringify(product).replace(/'/g, "&#39;")}'>
            <div class="product-image">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.name}" loading="lazy"
                     onerror="this.src='https://placehold.co/500x600/F7F4F0/3D3530?text=DRESSUP'">
                <div class="product-actions-overlay">
                    <button class="product-action-btn wa-btn card-wa" data-product='${JSON.stringify(product).replace(/'/g, "&#39;")}'>
                        <i class="fab fa-whatsapp"></i> WhatsApp
                    </button>
                    <button class="product-action-btn email-btn card-email" data-product='${JSON.stringify(product).replace(/'/g, "&#39;")}'>
                        <i class="fas fa-envelope"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <h4>${product.name}</h4>
                <p class="product-desc-text">${product.desc}</p>
                <div class="product-footer">
                    <div class="price">${product.price}</div>
                    <a class="ig-link card-ig" data-product='${JSON.stringify(product).replace(/'/g, "&#39;")}' title="View on Instagram">
                        <i class="fab fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
    `;
}

// ---------- CAROUSEL BUILDER ----------
function buildCarousel(containerId, productArray, badges = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const track = container.querySelector('.products-carousel');
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');
    const dotsContainer = container.querySelector('.carousel-dots');

    track.innerHTML = productArray.map((p, i) =>
        renderProductCard(p, badges[p.id] || '')
    ).join('');

    function getVisible() {
        const w = window.innerWidth;
        if (w < 700) return 1;
        if (w < 900) return 2;
        if (w < 1200) return 3;
        return 4;
    }

    let current = 0;
    const total = productArray.length;

    function maxIndex() {
        return Math.max(0, total - getVisible());
    }

    function buildDots() {
        const groups = Math.ceil(total / getVisible());
        dotsContainer.innerHTML = Array.from({ length: groups }, (_, i) =>
            `<button class="carousel-dot${i === 0 ? ' active' : ''}" data-dot="${i}"></button>`
        ).join('');

        dotsContainer.querySelectorAll('.carousel-dot').forEach(dot => {
            dot.addEventListener('click', () => {
                const idx = parseInt(dot.dataset.dot);
                current = Math.min(idx * getVisible(), maxIndex());
                update();
            });
        });
    }

    function update() {
        const cards = track.querySelectorAll('.product-card');
        if (!cards.length) return;
        const cardEl = cards[0];
        const gap = 22;
        const offset = current * (cardEl.offsetWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;
        current = Math.min(current, maxIndex());
        if (prevBtn) prevBtn.disabled = current === 0;
        if (nextBtn) nextBtn.disabled = current >= maxIndex();
        const vis = getVisible();
        dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
            dot.classList.toggle('active', i === Math.floor(current / vis));
        });
    }

    if (prevBtn) prevBtn.addEventListener('click', () => {
        current = Math.max(0, current - getVisible());
        update();
    });
    if (nextBtn) nextBtn.addEventListener('click', () => {
        current = Math.min(maxIndex(), current + getVisible());
        update();
    });

    buildDots();
    update();

    let startX = 0;
    track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
    track.addEventListener('touchend', e => {
        const diff = startX - e.changedTouches[0].clientX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) current = Math.min(maxIndex(), current + 1);
            else current = Math.max(0, current - 1);
            update();
        }
    });

    window.addEventListener('resize', () => {
        buildDots();
        current = Math.min(current, maxIndex());
        update();
    });

    attachCardEvents(container);
}

function carouselHtml(id) {
    return `
        <div class="carousel-wrapper" id="${id}">
            <div class="carousel-track-container">
                <div class="products-carousel"></div>
            </div>
            <div class="carousel-nav">
                <button class="carousel-btn carousel-prev"><i class="fas fa-arrow-left"></i></button>
                <div class="carousel-dots"></div>
                <button class="carousel-btn carousel-next"><i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `;
}

// ---------- MODAL ----------
function openModal(product) {
    document.getElementById("modalName").innerText = product.name;
    document.getElementById("modalPrice").innerText = product.price;
    document.getElementById("modalDesc").innerText = product.desc;
    document.getElementById("modalImg").innerHTML = `<img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/520x300/F7F4F0/3D3530?text=DRESSUP'">`;
    const modalEmail = document.getElementById("modalEmail");
    const modalWhatsapp = document.getElementById("modalWhatsapp");
    const modalInstagram = document.getElementById("modalInstagram");
    modalEmail.href = `mailto:${CONTACT.email}?subject=Inquiry about ${encodeURIComponent(product.name)}&body=Hi DRESSUP, I'm interested in ${product.name} (${product.price})`;
    modalWhatsapp.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hello DRESSUP! I'm interested in ${product.name} (${product.price}). Please provide more details.`)}`;
    modalInstagram.href = CONTACT.instagram;
    modalInstagram.target = '_blank';
    document.getElementById("productModal").style.display = "flex";
}

// ---------- ATTACH CARD EVENTS ----------
function attachCardEvents(scope = document) {
    scope.querySelectorAll(".product-card").forEach(card => {
        card.addEventListener("click", e => {
            if (e.target.closest('.product-actions-overlay')) return;
            const prod = JSON.parse(card.getAttribute("data-product"));
            window.location.hash = `product/${prod.id}`;
        });
    });
    scope.querySelectorAll(".card-wa").forEach(btn => {
        btn.addEventListener("click", e => {
            e.stopPropagation();
            const prod = JSON.parse(btn.getAttribute("data-product"));
            window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi DRESSUP! I'm interested in ${prod.name} (${prod.price})`)}`, '_blank');
        });
    });
    scope.querySelectorAll(".card-email").forEach(btn => {
        btn.addEventListener("click", e => {
            e.stopPropagation();
            const prod = JSON.parse(btn.getAttribute("data-product"));
            window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(prod.name)}&body=Hi, I'm interested in ${prod.name} (${prod.price})`;
        });
    });
    scope.querySelectorAll(".card-ig").forEach(btn => {
        btn.addEventListener("click", e => {
            e.stopPropagation();
            window.open(CONTACT.instagram, '_blank');
        });
    });
}

function brandStripHtml() {
    const tags = ['Premium Quality', 'Streetwear', 'New Arrivals', 'Designer Pieces', 'Made to Impress', 'Dressup Trend', 'South Africa', 'Confidence Wear', 'Premium Quality', 'Streetwear', 'New Arrivals', 'Designer Pieces', 'Made to Impress', 'Dressup Trend', 'South Africa', 'Confidence Wear'];
    return `<div class="brand-strip"><div class="brand-strip-inner">${tags.map(t => `<span>${t}</span>`).join('')}</div></div>`;
}

function scrollToEl(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---------- PAGE RENDER FUNCTIONS ----------
function renderCategoryPage(title, subtitle, productArray) {
    hideHero();
    const html = `
        <div class="page-hero">
            <div class="container">
                <h1>${title}</h1>
                <p>${subtitle}</p>
            </div>
        </div>
        <div class="container" style="padding: 48px 0 60px;">
            <div class="products-grid">
                ${productArray.map(p => renderProductCard(p)).join('')}
            </div> 
        </div>
    `;
    document.getElementById("app").innerHTML = html;
    attachCardEvents();
}

function renderHome() {
    showHero();
    if (window.location.hash !== '#home') window.location.hash = 'home';
    
    const featuredBadges = { m1: 'Bestseller', m2: 'New', w1: 'New', m4: 'Limited' };
    const arrivalBadges = { w2: 'New', w3: 'New', m5: 'New', u1: 'New' };
    const featured = [products.men[0], products.men[1], products.women[0], products.men[3], products.women[2]].filter(Boolean);
    const arrivals = [products.women[0], products.women[1], products.women[2], products.men[4], products.unisex[0], products.unisex[2]].filter(Boolean);

    const html = `
        <div class="container">
        <div id="categoriesSection" class="category-row scroll-target">
            <!-- MEN -->
            <div class="category-card">
                <div class="category-bg" style="background-image:url('https://www.mrporter.com/variants/images/1647597311455189/ou/w2000_q60.jpg');"></div>
                <div class="category-overlay"></div>
                <div class="category-content">
                    <h3>Men</h3>
                    <button class="shop-now-btn men-shop">Shop Now <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <!-- WOMEN -->
            <div class="category-card">
                <div class="category-bg" style="background-image:url('https://tse2.mm.bing.net/th/id/OIP.aaCRtzCrcgeVN3cNIqSQCQHaJQ?r=0&rs=1&pid=ImgDetMain&o=7&rm=3');"></div>
                <div class="category-overlay"></div>
                <div class="category-content">
                    <h3>Women</h3>
                    <button class="shop-now-btn women-shop">Shop Now <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
            <!-- UNISEX -->
            <div class="category-card">
                <div class="category-bg" style="background-image:url('https://blog.etiquetaunica.com.br/wp-content/uploads/2025/08/nova-bolsa-balenciaga-le-city-east-west-conheca-a-nova-versao-da-bolsa-classica-210825.jpg');"></div>
                <div class="category-overlay"></div>
                <div class="category-content">
                    <h3>Unisex</h3>
                    <button class="shop-now-btn unisex-shop">Shop Now <i class="fas fa-arrow-right"></i></button>
                </div>
            </div>
        </div>
        <div class="section-header" style="margin-top:72px;"><div><h2 class="section-title">Featured Pieces</h2><p class="section-subtitle">Handpicked designer essentials</p></div><a class="view-all-link" id="viewAllFeatured">View all <i class="fas fa-arrow-right"></i></a></div>
            ${carouselHtml('featuredCarousel')}
            ${brandStripHtml()}
            <div class="story-section"><div class="story-img-wrap"><img src="https://tse1.mm.bing.net/th/id/OIP.IFuiX9_i2RIEj70VPe9TXgHaE8?r=0&rs=1&pid=ImgDetMain&o=7&rm=3" alt="Our Story"></div><div class="story-text-wrap"><h2>More Than Clothes.<br><em>It's a Lifestyle.</em></h2><p>At Dressup Trend, we don't just sell clothes — we create identity. Our designer pieces are crafted for individuals who want to stand out, move differently, and wear confidence every day.</p><button id="storyBtn" class="btn dark-btn">Discover Our Story <i class="fas fa-arrow-right"></i></button><div class="story-stats"><div class="stat-item"><h3>15+</h3><p>Designer Pieces</p></div><div class="stat-item"><h3>3</h3><p>Collections</p></div><div class="stat-item"><h3>SA</h3><p>Proudly Local</p></div></div></div></div>
            <div class="section-header"><div><h2 class="section-title">New Arrivals</h2><p class="section-subtitle">Fresh drops — be the first</p></div><a class="view-all-link" id="viewAllArrivals">View all <i class="fas fa-arrow-right"></i></a></div>
            ${carouselHtml('arrivalsCarousel')}
            <div class="benefits"><div class="benefit"><div class="benefit-icon"><i class="fas fa-truck"></i></div><div class="benefit-text"><h3>Fast Delivery</h3><p>Quick and reliable delivery to your door.</p></div></div><div class="benefit"><div class="benefit-icon"><i class="fas fa-lock"></i></div><div class="benefit-text"><h3>Secure Payment</h3><p>Your payment information is always safe.</p></div></div><div class="benefit"><div class="benefit-icon"><i class="fas fa-gem"></i></div><div class="benefit-text"><h3>Premium Quality</h3><p>Designer quality you can see and feel.</p></div></div></div>
            <div class="newsletter"><p class="eyebrow">Exclusive Offer</p><h2>Get 10% Off Your First Order</h2><p>Join the Dressup Trend community and shop ahead in fashion.</p><div class="newsletter-form"></div></div>
        </div>
    `;
    document.getElementById("app").innerHTML = html;
    
    setTimeout(() => {
        buildCarousel('featuredCarousel', featured, featuredBadges);
        buildCarousel('arrivalsCarousel', arrivals, arrivalBadges);
    }, 50);
    
    document.querySelectorAll(".men-shop").forEach(b => b.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'men'; }));
    document.querySelectorAll(".women-shop").forEach(b => b.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'women'; }));
    document.querySelectorAll(".unisex-shop").forEach(b => b.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'unisex'; }));
    document.getElementById("storyBtn")?.addEventListener("click", () => { window.location.hash = 'story'; });
    document.getElementById("viewAllFeatured")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'all'; });
    document.getElementById("viewAllArrivals")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'all'; });
    attachCardEvents();
}

function renderMenPage() { renderCategoryPage("Men's Collection", "Premium streetwear and designer essentials for men.", products.men); }
function renderWomenPage() { renderCategoryPage("Women's Collection", "Bold, sophisticated designer pieces for women.", products.women); }
function renderUnisexPage() { renderCategoryPage("Unisex Collection", "Versatile designer pieces for everyone.", products.unisex); }
function renderAccessoriesPage() { renderCategoryPage("Accessories", "Curated designer accessories to complete your look.", products.accessories); }
function renderAllProducts() { 
    renderCategoryPage(
        "All Products",
        "Browse the complete Dressup Trend collection.",
        removeDuplicates(allProducts)
    ); 
}

function renderStoryPage() {
    hideHero();
    const html = `
        <div class="story-page">
            <div class="hero-eyebrow" style="display:inline-flex; margin-bottom:24px; background:rgba(184,151,58,0.15);">
                <i class="fas fa-star"></i> Our Story
            </div>
            <h1>Born From the Streets.<br>Built for the Bold.</h1>
            <p>Dressup Trend was born from the desire to blend streetwear edge with luxury craftsmanship. We create for individuals who refuse to blend in.</p>
            <p>More than clothing, we are a movement of self-expression. Every piece tells a story — from downtown energy to high-fashion minimalism. We believe what you wear shapes how you move through the world.</p>
            <p>Proudly South African. Globally inspired. Unapologetically bold.</p>
            <button id="backHome" class="btn dark-btn">← Back to Home</button>
        </div>
    `;
    document.getElementById("app").innerHTML = html;
    document.getElementById("backHome")?.addEventListener("click", () => { window.location.hash = 'home'; });
    attachCardEvents();
}

// ---------- PRODUCT DETAILS PAGE (NO SIZE SELECTION) ----------
function renderProductDetailsPage(product) {
    hideHero();

    const previousRoute = window.location.hash.slice(1) || 'home';
    window.location.hash = `product/${product.id}`;

    const angles = product.angles || [product.image];
    const angleButtons = angles.map((img, idx) => 
        `<button class="angle-btn${idx === 0 ? ' active' : ''}" data-angle="${idx}" title="View ${idx + 1}">View ${idx + 1}</button>`
    ).join('');

    const html = `
        <div class="product-details-page">
            <div class="details-container">
                <button id="backBtn" class="back-btn"><i class="fas fa-arrow-left"></i> Back</button>
                <div class="gallery-section">
                    <div class="main-image">
                        <img id="mainProductImg" src="${angles[0]}" alt="${product.name}" onerror="this.src='https://placehold.co/600x700/F7F4F0/3D3530?text=DRESSUP'">
                    </div>
                    <div class="angle-selector">
                        ${angleButtons}
                    </div>
                </div>
                <div class="details-info">
                    <h1>${product.name}</h1>
                    <div class="details-price">${product.price}</div>
                    <div class="details-description">
                        <h3>Product Description</h3>
                        <p>${product.desc}</p>
                    </div>
                    <div class="details-features">
                        <h3>Key Features</h3>
                        <ul>
                            <li>Premium quality materials</li>
                            <li>Designer crafted</li>
                            <li>Comfortable fit</li>
                            <li>Multiple color options available</li>
                        </ul>
                    </div>

                    <div class="add-to-cart-section">
                        <button class="add-to-cart-btn" id="addToCartBtn">
                            <i class="fas fa-shopping-bag"></i> Add to Cart
                        </button>
                    </div>

                    <div class="details-buttons">
                        <a id="detailsWhatsapp" class="btn gold-btn" target="_blank"><i class="fab fa-whatsapp"></i> Contact on WhatsApp</a>
                        <a id="detailsEmail" class="btn outline-btn"><i class="fas fa-envelope"></i> Send Email</a>
                        <a id="detailsInstagram" class="btn outline-btn" target="_blank"><i class="fab fa-instagram"></i> View on Instagram</a>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.getElementById("app").innerHTML = html;

    const detailsEmail = document.getElementById("detailsEmail");
    const detailsWhatsapp = document.getElementById("detailsWhatsapp");
    const detailsInstagram = document.getElementById("detailsInstagram");

    detailsEmail.href = `mailto:${CONTACT.email}?subject=Inquiry about ${encodeURIComponent(product.name)}&body=Hi DRESSUP, I'm interested in ${product.name} (${product.price})`;
    detailsWhatsapp.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hello DRESSUP! I'm interested in ${product.name} (${product.price}). Please provide more details.`)}`;
    detailsInstagram.href = CONTACT.instagram;

    document.querySelectorAll(".angle-btn").forEach((btn, idx) => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".angle-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            document.getElementById("mainProductImg").src = angles[idx];
        });
    });

    document.getElementById("addToCartBtn").addEventListener("click", () => {
        if (typeof addToCart === 'function') {
            addToCart(product, "", 1);
        } else {
            alert("Cart function not available. Please contact us directly.");
        }
    });

    document.getElementById("backBtn").addEventListener("click", () => {
        window.location.hash = previousRoute;
    });
}

// ---------- ROUTING WITH HASH (FIXES BACK BUTTON) ----------
function handleRoute() {
    const hash = window.location.hash.slice(1) || 'home';
    
    if (hash.startsWith('product/')) {
        const productId = hash.split('/')[1];
        const product = allProducts.find(p => p.id === productId);
        if (product && typeof renderProductDetailsPage === 'function') {
            renderProductDetailsPage(product);
        } else {
            renderHome();
        }
        return;
    }
    
    if (hash === 'cart') {
        if (typeof renderCartPage === 'function') {
            renderCartPage();
        } else {
            renderHome();
        }
        return;
    }
    
    switch(hash) {
        case 'home': renderHome(); break;
        case 'men': renderMenPage(); break;
        case 'women': renderWomenPage(); break;
        case 'unisex': renderUnisexPage(); break;
        case 'accessories': renderAccessoriesPage(); break;
        case 'all': renderAllProducts(); break;
        case 'story': renderStoryPage(); break;
        default: renderHome();
    }
}

// ---------- GLOBAL LISTENERS (attached once, after products load) ----------
let listenersAttached = false;

function attachGlobalListeners() {
    if (listenersAttached) return;
    listenersAttached = true;

    window.addEventListener('hashchange', handleRoute);

    document.getElementById("navHome")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'home'; });
    document.getElementById("navMen")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'men'; });
    document.getElementById("navWomen")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'women'; });
    document.getElementById("navUnisex")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'unisex'; });
    document.getElementById("navAccessories")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'accessories'; });
    document.getElementById("navAll")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'all'; });
    document.getElementById("navCart")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'cart'; });
    document.getElementById("discoverStoryBtn")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'story'; });

    document.getElementById("exploreBtn")?.addEventListener("click", () => { window.location.hash = 'all'; });

    document.getElementById("footerHome")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'home'; });
    document.getElementById("footerMen")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'men'; });
    document.getElementById("footerWomen")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'women'; });
    document.getElementById("footerUnisex")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'unisex'; });
    document.getElementById("footerAccessories")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'accessories'; });
    document.getElementById("footerAll")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'all'; });
    document.getElementById("footerStory")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'story'; });
    document.getElementById("footerContact")?.addEventListener("click", () => alert(`📧 ${CONTACT.email}\n📞 WhatsApp: ${CONTACT.whatsapp}\n📸 Instagram: @dressup_trendza`));
    document.getElementById("footerIG")?.addEventListener("click", () => window.open(CONTACT.instagram, '_blank'));
    document.getElementById("footerSocialIG")?.addEventListener("click", () => window.open(CONTACT.instagram, '_blank'));
    document.getElementById("footerSocialWA")?.addEventListener("click", () => window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank'));
    document.getElementById("footerSocialEmail")?.addEventListener("click", () => window.location.href = `mailto:${CONTACT.email}`);

    const modal = document.getElementById("productModal");
    document.querySelector(".close-modal")?.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });
    document.addEventListener("keydown", e => { if (e.key === "Escape") modal.style.display = "none"; });
}

// ---------- ASYNC INITIALIZATION WITH ROUTING ----------
async function init() {
    showLoadingState();

    try {
        await loadProducts();
    } catch (err) {
        console.error("[Dressup] Failed to load products:", err);
        showLoadErrorState(err);
        return; // stop — no routing, no crash
    }

    if (!allProducts.length) {
        showLoadErrorState(new Error("No products are available at the moment."));
        return;
    }

    attachGlobalListeners();

    if (!window.location.hash || window.location.hash === '#') {
        window.location.hash = 'home';   // triggers hashchange -> handleRoute
    } else {
        handleRoute();                   // deep-link / refresh case
    }
}

window.addEventListener("DOMContentLoaded", init);