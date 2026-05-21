// ---------- OFFICIAL CONTACT DETAILS ----------
const CONTACT = {
    email: "dressuptrendza@outlook.com",
    whatsapp: "0837511231",
    instagram: "https://www.instagram.com/dressup_trendza"
};

// ---------- PRODUCT DATABASE ----------
const products = {
men: [
    { id: "m1", name: "Balenciaga Pink T-Shirt", price: "R2500", image: "images/TopApparel/BalenciagaT-Shirt.jpeg", desc: "Premium Balenciaga-style oversized t-shirt with a bold streetwear aesthetic.", angles: ["images/TopApparel/BalenciagaT-Shirt.jpeg"] },
    { id: "m2", name: "YSL Unisex Jacket", price: "R3500", image: "images/TopApparel/BlueJacket2.jpeg", desc: "Windbreaker jacket with distinctive brown contrast panel detailing.", angles: ["images/TopApparel/BlueJacket2.jpeg", "images/TopApparel/BueJacket.jpeg"] },
    { id: "m3", name: "Louis Vuitton Unisex T-Shirt", price: "R2500", image: "images/TopApparel/ChromeT-Shirt.jpeg", desc: "Edgy Chrome-inspired t-shirt with a relaxed silhouette.", angles: ["images/TopApparel/ChromeT-Shirt.jpeg"] },
    { id: "m4", name: "Hydraulics Black T-Shirt", price: "R1300", image: "images/TopApparel/HydroT-Shirt.jpeg", desc: "Hydro-branded t-shirt with premium fabric and modern cut.", angles: ["images/TopApparel/HydroT-Shirt.jpeg", "images/TopApparel/HydroT-Shirt2.jpeg"] },
    { id: "m5", name: "Jil Sander T-Shirt", price: "R2500", image: "images/TopApparel/JilSanderT-Shirt.jpeg", desc: "Minimalist Jil Sander-inspired t-shirt for a clean, sophisticated look.", angles: ["images/TopApparel/JilSanderT-Shirt.jpeg"] },
    { id: "m6", name: "Louis Vuitton Knitted Shirt", price: "R2500", image: "images/TopApparel/LV-Shirt.jpeg", desc: "Luxury LV-inspired shirt with iconic branding.", angles: ["images/TopApparel/LV-Shirt.jpeg"] },
    { id: "m7", name: "Chrome Hearts", price: "R2500", image: "images/TopApparel/WhiteT.jpeg", desc: "Classic white t-shirt - a wardrobe essential.", angles: ["images/TopApparel/WhiteT.jpeg"] },
    { id: "m8", name: "Dolce & Gabbana ", price: "R5000", image: "images/Shoes/DG-Shoe.jpeg", desc: "Michelangelo Derby shoes in black featuring a chunky sole and DG logo.", angles: ["images/Shoes/DG-Shoe.jpeg", "images/Shoes/DG-Shoe2.jpeg"] },
    { id: "m9", name: "Gucci GG Mules", price: "R3500", image: "images/Shoes/GG-Mules.jpeg", desc: "Double canvas mules with brown leather and an embossed double G detail", angles: ["images/Shoes/GG-Mules.jpeg"] },
    { id: "m10", name: "Louis Vuitton Trainer Sneaker", price: "R5000", image: "images/Shoes/LV-Shoe2.jpeg", desc: "Trainer sneakers in black leather with embossed monogram.", angles: ["images/Shoes/LV-Shoe2.jpeg", "images/Shoes/LV-Shoe.jpeg"] },
    { id: "m11", name: "Louis Vuitton Card Holder", price: "R2000", image: "images/Accessories/LV-Wallet.jpeg", desc: "Holders in Monogram canvas with fuchsia pink leather interior.", angles: ["images/Accessories/LV-Wallet.jpeg", "images/Accessories/LV-Wallet2.jpeg"] },
    { id: "m12", name: "Black Prada Re-Nylon Baseball Cap", price: "R1500", image: "images/Accessories/PradaCap.jpeg", desc: "Baseball cap adorned with the brand's iconic enamel triangle logo.", angles: ["images/Accessories/PradaCap.jpeg", "images/Accessories/PradaCap2.jpeg"] },
     ],
    women: [
        { id: "w1", name: "Van Cleef & Arpels Necklace", price: "R3500", image: "images/Accessories/ChromeNecklace.jpeg", desc: "An 18K Yellow Gold Vintage Alhambra Pendant Necklace.", angles: ["images/Accessories/ChromeNecklace.jpeg", "images/Accessories/ChromeNecklace2.jpeg"] },
        { id: "w2", name: "DG Earrings", price: "R1600", image: "images/Accessories/DGEarings.jpeg", desc: "Elegant designer earrings for a sophisticated look.", angles: ["images/Accessories/DGEarings.jpeg"] },
        { id: "w3", name: "Dior Earrings", price: "R1600", image: "images/Accessories/DiorEarings.jpeg", desc: "Luxury Dior-inspired earrings with premium finish.", angles: ["images/Accessories/DiorEarings.jpeg"] },
        { id: "w4", name: "Black Gucci GG Marmont", price: "R3500", image: "images/Accessories/GGBag.jpeg", desc: "Designer small shoulder bag - a matelasse leather", angles: ["images/Accessories/GGBag.jpeg"] },
        { id: "w5", name: "Givenchy Bag", price: "R4500", image: "images/Accessories/GivenchyBag.jpeg", desc: "G-Tote Mini Vertica - Black/Red.", angles: ["images/Accessories/GivenchyBag.jpeg", "images/Accessories/GivenchyBag2.jpeg", "images/Accessories/GivenchyBag3.jpeg"] },
        { id: "w6", name: "Gucci Glasses", price: "R2500", image: "images/Accessories/GucciGlasses.jpeg", desc: "Statement Gucci-style glasses with UV protection.", angles: ["images/Accessories/GucciGlasses.jpeg", "images/Accessories/GucciGlasses2.jpeg"] },
        { id: "w7", name: "Jacquemus Bag", price: "R4200", image: "images/Accessories/JacquemusBag.jpeg", desc: "Jacquemus Le Bambino Long Shoulder Bag.", angles: ["images/Accessories/JacquemusBag.jpeg", "images/Accessories/JacquemusBag2.jpeg", "images/Accessories/JacquemusBag3.jpeg"] },
        { id: "w8", name: "Louis Vuitton Bag", price: "R8500", image: "images/Accessories/LVBag.jpeg", desc: "Monogram vanity-style bag - a luxury piece.", angles: ["images/Accessories/LVBag.jpeg", "images/Accessories/LVBag2.jpeg"] },
        { id: "w9", name: "Goyard Artois Tote Bag", price: "R9000", image: "images/Accessories/Orange%20Bag.jpeg", desc: "PM Tote Bag In Orange.", angles: ["images/Accessories/Orange%20Bag.jpeg"] },
        { id: "w10", name: "Black Prada Re-Nylon Baseball Cap", price: "R1500", image: "images/Accessories/PradaCap.jpeg", desc: "Baseball cap adorned with the brand's iconic enamel triangle logo.", angles: ["images/Accessories/PradaCap.jpeg", "images/Accessories/PradaCap2.jpeg"] },
        { id: "w11", name: "Louis Vuitton Trainer Sneaker", price: "R5000", image: "images/Shoes/LV-Shoe2.jpeg", desc: "Trainer sneakers in black leather with embossed monogram.", angles: ["images/Shoes/LV-Shoe2.jpeg", "images/Shoes/LV-Shoe.jpeg"] },
        { id: "w12", name: "Louis Vuitton Card Holder", price: "R2000", image: "images/Accessories/LV-Wallet.jpeg", desc: "Holders in Monogram canvas with fuchsia pink leather interior.", angles: ["images/Accessories/LV-Wallet.jpeg", "images/Accessories/LV-Wallet2.jpeg"] },
        { id: "w13", name: "Gucci GG Mules", price: "R3500", image: "images/Shoes/GG-Mules.jpeg", desc: "Double canvas mules with brown leather and an embossed double G detail", angles: ["images/Shoes/GG-Mules.jpeg"] },
        { id: "w14", name: "Gucci Flops", price: "R2400", image: "images/Shoes/Gucci-Flop.jpeg", desc: "Double canvas mules with brown leather and an embossed double G detail", angles: ["images/Shoes/Gucci-Flop.jpeg"] },
        { id: "w15", name: "Gucci Sandals", price: "R3200", image: "images/Shoes/Gucci-Sandals.jpeg", desc: "Double canvas mules with brown leather and an embossed double G detail", angles: ["images/Shoes/Gucci-Sandals.jpeg"] },
        { id: "w16", name: "YSL Unisex Jacket", price: "R3500", image: "images/TopApparel/BlueJacket2.jpeg", desc: "Windbreaker jacket with distinctive brown contrast panel detailing.", angles: ["images/TopApparel/BlueJacket2.jpeg", "images/TopApparel/BueJacket.jpeg"] },
        { id: "w17", name: "Louis Vuitton Unisex T-Shirt", price: "R2500", image: "images/TopApparel/ChromeT-Shirt.jpeg", desc: "Edgy Chrome-inspired t-shirt with a relaxed silhouette.", angles: ["images/TopApparel/ChromeT-Shirt.jpeg"] },
        { id: "w18", name: "Balenciaga Unisex Pink T-Shirt", price: "R2500", image: "images/TopApparel/BalenciagaT-Shirt.jpeg", desc: "Premium Balenciaga-style oversized t-shirt with a bold streetwear aesthetic.", angles: ["images/TopApparel/BalenciagaT-Shirt.jpeg"] },
    ],
    unisex: [
        { id: "u1", name: "Louis Vuitton Trainer Sneaker", price: "R5000", image: "images/Shoes/LV-Shoe2.jpeg", desc: "Trainer sneakers in black leather with embossed monogram.", angles: ["images/Shoes/LV-Shoe2.jpeg", "images/Shoes/LV-Shoe.jpeg"] },
        { id: "u2", name: "Louis Vuitton Card Holder", price: "R2000", image: "images/Accessories/LV-Wallet.jpeg", desc: "Holders in Monogram canvas with fuchsia pink leather interior.", angles: ["images/Accessories/LV-Wallet.jpeg", "images/Accessories/LV-Wallet2.jpeg"] },
        { id: "u3", name: "Black Prada Re-Nylon Baseball Cap", price: "R1,500", image: "images/Accessories/PradaCap.jpeg", desc: "Baseball cap adorned with the brand's iconic enamel triangle logo.", angles: ["images/Accessories/PradaCap.jpeg", "images/Accessories/PradaCap2.jpeg"] },
        { id: "u4", name: "Gucci GG Mules", price: "R3500", image: "images/Shoes/GG-Mules.jpeg", desc: "Double canvas mules with brown leather and an embossed double G detail", angles: ["images/Shoes/GG-Mules.jpeg"] },
        { id: "u5", name: "YSL Unisex Jacket", price: "R3500", image: "images/TopApparel/BlueJacket2.jpeg", desc: "Windbreaker jacket with distinctive brown contrast panel detailing.", angles: ["images/TopApparel/BlueJacket2.jpeg", "images/TopApparel/BueJacket.jpeg"] },
        { id: "u6", name: "Louis Vuitton Unisex T-Shirt", price: "R2500", image: "images/TopApparel/ChromeT-Shirt.jpeg", desc: "Edgy Chrome-inspired t-shirt with a relaxed silhouette.", angles: ["images/TopApparel/ChromeT-Shirt.jpeg"] },
        { id: "u7", name: "Balenciaga Pink T-Shirt", price: "R2500", image: "images/TopApparel/BalenciagaT-Shirt.jpeg", desc: "Premium Balenciaga-style oversized t-shirt with a bold streetwear aesthetic.", angles: ["images/TopApparel/BalenciagaT-Shirt.jpeg"] },
    ],
accessories: [
    { id: "a1", name: "Rimowa Black iPhone 17 Pro Max Case", price: "R1000", image: "images/Accessories/BlackPouch.jpeg", desc: "Black grooved iPhone 17 Pro Max Case.", angles: ["images/Accessories/BlackPouch.jpeg"] },
    { id: "a2", name: "Van Cleef & Arpels Necklace", price: "R3500", image: "images/Accessories/ChromeNecklace.jpeg", desc: "An 18K Yellow Gold Vintage Alhambra Pendant Necklace.", angles: ["images/Accessories/ChromeNecklace.jpeg", "images/Accessories/ChromeNecklace2.jpeg"] },
    { id: "a3", name: "DG Earrings", price: "R1600", image: "images/Accessories/DGEarings.jpeg", desc: "Elegant designer earrings for a sophisticated look.", angles: ["images/Accessories/DGEarings.jpeg"] },
    { id: "a4", name: "Dior Earrings", price: "R1600", image: "images/Accessories/DiorEarings.jpeg", desc: "Luxury Dior-inspired earrings with premium finish.", angles: ["images/Accessories/DiorEarings.jpeg"] },
    { id: "a5", name: "Black Gucci GG Marmont", price: "R3500", image: "images/Accessories/GGBag.jpeg", desc: "Designer small shoulder bag - a matelasse leather.", angles: ["images/Accessories/GGBag.jpeg"] },
    { id: "a6", name: "Givenchy Bag", price: "R4500", image: "images/Accessories/GivenchyBag.jpeg", desc: "G-Tote Mini Vertica - Black/Red.", angles: ["images/Accessories/GivenchyBag.jpeg", "images/Accessories/GivenchyBag2.jpeg", "images/Accessories/GivenchyBag3.jpeg"] },
    { id: "a7", name: "Gucci Glasses", price: "R2500", image: "images/Accessories/GucciGlasses.jpeg", desc: "Statement Gucci-style glasses with UV protection.", angles: ["images/Accessories/GucciGlasses.jpeg", "images/Accessories/GucciGlasses2.jpeg"] },
    { id: "a8", name: "Jacquemus Bag", price: "R4200", image: "images/Accessories/JacquemusBag.jpeg", desc: "Jacquemus Le Bambino Long Shoulder Bag.", angles: ["images/Accessories/JacquemusBag.jpeg", "images/Accessories/JacquemusBag2.jpeg", "images/Accessories/JacquemusBag3.jpeg"] },
    { id: "a9", name: "Louis Vuitton Card Holder", price: "R2000", image: "images/Accessories/LV-Wallet.jpeg", desc: "Holders in Monogram canvas with fuchsia pink leather interior.", angles: ["images/Accessories/LV-Wallet.jpeg", "images/Accessories/LV-Wallet2.jpeg"] },
    { id: "a10", name: "Louis Vuitton Bag", price: "R8500", image: "images/Accessories/LVBag.jpeg", desc: "Monogram vanity-style bag - a luxury piece.", angles: ["images/Accessories/LVBag.jpeg", "images/Accessories/LVBag2.jpeg"] },
    { id: "a11", name: "Goyard Artois Tote Bag", price: "R9000", image: "images/Accessories/Orange%20Bag.jpeg", desc: "PM Tote Bag In Orange.", angles: ["images/Accessories/Orange%20Bag.jpeg"] },
    { id: "a12", name: "Goyard Phone Case iPhone 17 Pro Max", price: "R399", image: "images/Accessories/OrangePouch.jpeg", desc: "A Goyard style orange leather phone case for an iPhone 17 Pro Max.", angles: ["images/Accessories/OrangePouch.jpeg"] },
    { id: "a13", name: "Black Prada Re-Nylon Baseball Cap", price: "R1500", image: "images/Accessories/PradaCap.jpeg", desc: "Baseball cap adorned with the brand's iconic enamel triangle logo.", angles: ["images/Accessories/PradaCap.jpeg", "images/Accessories/PradaCap2.jpeg"] },
    { id: "a14", name: "Rimowa Grey iPhone 17 Pro Max Case", price: "1000", image: "images/Accessories/WhitePouch.jpeg", desc: "Grey grooved iPhone 17 Pro Max Case.", angles: ["images/Accessories/WhitePouch.jpeg"] }  
]
};

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

const allProducts = removeDuplicates([
    ...products.men,
    ...products.women,
    ...products.unisex,
    ...products.accessories
]);
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
            // Navigate to product details page using hash routing
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
    document.getElementById("viewAllBtn")?.addEventListener("click", () => { window.location.hash = 'all'; });
}

function renderHome() {
    showHero();
    if (window.location.hash !== '#home') window.location.hash = 'home';
    
    const featuredBadges = { m1: 'Bestseller', m2: 'New', w1: 'New', m4: 'Limited' };
    const arrivalBadges = { w2: 'New', w3: 'New', m5: 'New', u1: 'New' };
    const featured = [products.men[0], products.men[1], products.women[0], products.men[3], products.women[2]];
    const arrivals = [products.women[0], products.women[1], products.women[2], products.men[4], products.unisex[0], products.unisex[2]];

    const html = `
        <div class="container">
            <div id="categoriesSection" class="category-row scroll-target">
                <div class="category-card"><div class="category-bg" style="background-image:url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop');"></div><div class="category-overlay"></div><div class="category-content"><h3>Men</h3><button class="shop-now-btn men-shop">Shop Now <i class="fas fa-arrow-right"></i></button></div></div>
                <div class="category-card"><div class="category-bg" style="background-image:url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1000&fit=crop');"></div><div class="category-overlay"></div><div class="category-content"><h3>Women</h3><button class="shop-now-btn women-shop">Shop Now <i class="fas fa-arrow-right"></i></button></div></div>
                <div class="category-card"><div class="category-bg" style="background-image:url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1000&fit=crop');"></div><div class="category-overlay"></div><div class="category-content"><h3>Unisex</h3><button class="shop-now-btn unisex-shop">Shop Now <i class="fas fa-arrow-right"></i></button></div></div>
            </div>
            <div class="section-header" style="margin-top:72px;"><div><h2 class="section-title">Featured Pieces</h2><p class="section-subtitle">Handpicked designer essentials</p></div><a class="view-all-link" id="viewAllFeatured">View all <i class="fas fa-arrow-right"></i></a></div>
            ${carouselHtml('featuredCarousel')}
            ${brandStripHtml()}
            <div class="story-section"><div class="story-img-wrap"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&auto=format" alt="Our Story"></div><div class="story-text-wrap"><h2>More Than Clothes.<br><em>It's a Lifestyle.</em></h2><p>At Dressup Trend, we don't just sell clothes — we create identity. Our designer pieces are crafted for individuals who want to stand out, move differently, and wear confidence every day.</p><button id="storyBtn" class="btn dark-btn">Discover Our Story <i class="fas fa-arrow-right"></i></button><div class="story-stats"><div class="stat-item"><h3>15+</h3><p>Designer Pieces</p></div><div class="stat-item"><h3>3</h3><p>Collections</p></div><div class="stat-item"><h3>SA</h3><p>Proudly Local</p></div></div></div></div>
            <div class="section-header"><div><h2 class="section-title">New Arrivals</h2><p class="section-subtitle">Fresh drops — be the first</p></div><a class="view-all-link" id="viewAllArrivals">View all <i class="fas fa-arrow-right"></i></a></div>
            ${carouselHtml('arrivalsCarousel')}
            <div class="benefits"><div class="benefit"><div class="benefit-icon"><i class="fas fa-truck"></i></div><div class="benefit-text"><h3>Fast Delivery</h3><p>Quick and reliable delivery to your door.</p></div></div><div class="benefit"><div class="benefit-icon"><i class="fas fa-lock"></i></div><div class="benefit-text"><h3>Secure Payment</h3><p>Your payment information is always safe.</p></div></div><div class="benefit"><div class="benefit-icon"><i class="fas fa-gem"></i></div><div class="benefit-text"><h3>Premium Quality</h3><p>Designer quality you can see and feel.</p></div></div></div>
            <div class="newsletter"><p class="eyebrow">Exclusive Offer</p><h2>Get 10% Off Your First Order</h2><p>Join the Dressup Trend community and shop ahead in fashion.</p><div class="newsletter-form"><input type="email" id="subEmail" placeholder="Enter your email address"><button id="subscribeBtn" class="btn gold-btn">Subscribe</button></div></div>
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
    document.getElementById("subscribeBtn")?.addEventListener("click", () => {
        const val = document.getElementById("subEmail")?.value;
        if (val && val.includes('@')) alert("Thanks for subscribing! Your 10% off code is on its way.");
        else alert("Please enter a valid email address.");
    });
    attachCardEvents();
}

function renderMenPage() { renderCategoryPage("Men's Collection", "Premium streetwear and designer essentials for men.", products.men); }
function renderWomenPage() { renderCategoryPage("Women's Collection", "Bold, sophisticated designer pieces for women.", products.women); }
function renderUnisexPage() { renderCategoryPage("Unisex Collection", "Versatile designer pieces for everyone.", products.unisex); }
function renderAccessoriesPage() { renderCategoryPage("Accessories", "Curated designer accessories to complete your look.", products.accessories); }
function renderAllProducts() { renderCategoryPage("All Products", "Browse the complete Dressup Trend collection.", allProducts); }

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

// ---------- PRODUCT DETAILS PAGE ----------
function renderProductDetailsPage(product) {
    hideHero();

    // Store the current route before going to product details
    const previousRoute = window.location.hash.slice(1) || 'home';
    
    // Update URL hash to product details page
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
                        <label for="sizeSelect">Select Size</label>
                        <select id="sizeSelect" class="size-select">
                            <option value="">-- Choose a size --</option>
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                            <option value="One Size">One Size</option>
                        </select>
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
        const size = document.getElementById("sizeSelect").value;
        if (!size) {
            alert("Please select a size before adding to cart.");
            return;
        }
        if (typeof addToCart === 'function') {
            addToCart(product, size, 1);
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
    
    // Check if it's a product details route (format: product/ID)
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
    
    // Check if it's cart route
    if (hash === 'cart') {
        if (typeof renderCartPage === 'function') {
            renderCartPage();
        } else {
            renderHome();
        }
        return;
    }
    
    // Regular routes
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

// ---------- INITIALIZATION WITH ROUTING ----------
function init() {
    // Listen for back/forward buttons
    window.addEventListener('hashchange', handleRoute);
    
    // Initial load
    if (!window.location.hash || window.location.hash === '#') {
        window.location.hash = 'home';
    } else {
        handleRoute();
    }
    
    // Navigation bar buttons
    document.getElementById("navHome")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'home'; });
    document.getElementById("navMen")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'men'; });
    document.getElementById("navWomen")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'women'; });
    document.getElementById("navUnisex")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'unisex'; });
    document.getElementById("navAccessories")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'accessories'; });
    document.getElementById("navAll")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'all'; });
    document.getElementById("navCart")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'cart'; });
    document.getElementById("discoverStoryBtn")?.addEventListener("click", (e) => { e.preventDefault(); window.location.hash = 'story'; });
    
    // Explore button
    document.getElementById("exploreBtn")?.addEventListener("click", () => { window.location.hash = 'all'; });
    
    // Footer buttons
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
    
    // Modal close
    const modal = document.getElementById("productModal");
    document.querySelector(".close-modal")?.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });
    document.addEventListener("keydown", e => { if (e.key === "Escape") modal.style.display = "none"; });
}

window.addEventListener("DOMContentLoaded", init);