// ---------- OFFICIAL CONTACT DETAILS ----------
const CONTACT = {
    email: "dressuptrendza@outlook.com",
    whatsapp: "0837511231",
    instagram: "https://www.instagram.com/dressup_trendza"
};

// ---------- PRODUCT DATABASE ----------
const products = {
    men: [
        { id: "m1", name: "DT Signature Hoodie", price: "R899", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=600&fit=crop", desc: "Oversized signature hoodie in premium cotton fleece. A streetwear essential.", angles: ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1556821552-7a0fb3a117e8?w=500&h=600&fit=crop"] },
        { id: "m2", name: "Premium Wool Jacket", price: "R1,699", image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=500&h=600&fit=crop", desc: "Tailored wool jacket with timeless elegance and a modern cut.", angles: ["https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1539533056867-12bc999c38a0?w=500&h=600&fit=crop"] },
        { id: "m3", name: "Oversized Statement Tee", price: "R599", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=600&fit=crop", desc: "Bold graphic, relaxed silhouette — a streetwear staple.", angles: ["https://images.unsplash.com/photo-15０３３４２２１７５０５-b０a１５ec３２６１c?w=５００&h=６００&fit=crop", "https://images.unsplash.com/photo-１５２１５７２１６３４７４-６８６４f９cf１７ab?w=５００&h=６００&fit=crop", "https://images.unsplash.com/photo-１５１６１７０１９５９１２-４８１９１７a６１b６３?w=５００&h=６００&fit=crop"] },
        { id: "m4", name: "DT Cargo Pants", price: "R1,199", image: "https://images.unsplash.com/photo-₁₅₁₇₄₃₈₄₇₆₃₁₂-₁₀d₇₉c₀₇₇₅₀₉?w=５₀₀&h=６₀₀&fit=crop", desc: "Utility cargo pants reimagined with a modern edge and premium finish.", angles: ["https://images.unsplash.com/photo-₁₅₁₇₄₃₈₄₇₆₃₁₂-₁₀d₇₉c₀₇₇₅₀₉?w=５₀₀&h=６₀₀&fit=crop", "https://images.unsplash.com/photo-₁₅⁴²²⁷²⁹⁰⁶-⁵ffd⁴f⁶d⁶³⁵b?w=⁵⁰⁰&h=⁶⁰⁰&fit=crop", "https://images.unsplash.com/photo-₁⁵⁴²¹¹³¹⁰¹-fa²f⁹⁵c²³⁴¹⁴?w=⁵⁰⁰&h=⁶⁰⁰&fit=crop"] },
        { id: "m៥", name: "Ripped Denim", price: "R899", image: "https://images.unsplash.com/photo-₁៥៥¹°³³¹¹³₂°८-f६df८cc८b५४³?w = ५०० & h = ६०० & fit = crop ", desc :  "Distressed denim crafted for confident, bold looks.\ ", angles : [ " https : // images . unsplash . com / photo - ₁៥៥¹°³³¹¹³₂°८-f६df८cc८b५४³ ? w = ५०० & h = ६०० & fit = crop \ ", " https : // images . unsplash . com / photo - ₁ᵬ²²七十零六 - 伍ffd四f六d六叁伍b ? w = ৫০০ & h = ৬০০ & fit = crop \ ", " https : // images . unsplash . com / photo - ₁ᵬ²¹壹壹叁壹零壹 - fa²f九伍c²叁肆壹肆 ? w = ৫০০ & h = ৬০০ & fit = crop \ "] }
    ],
    women: [
        { id: "w1", name: "Vanity Jacket", price: "R1,499", image: "https://images.unsplash.com/photo-1548624313-0396c75e4b63?w=500&h=600&fit=crop", desc: "A statement jacket that's as sleek as it is fierce.", angles: ["https://images.unsplash.com/photo-1548624313-0396c75e4b63?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1542272604-787c62d465d1?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1539533056867-12bc999c38a0?w=500&h=600&fit=crop"] },
        { id: "w2", name: "Essential Hoodie", price: "R799", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=600&fit=crop", desc: "Your everyday essential in ultra-soft premium fabric.", angles: ["https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1556821552-7a0fb3a117e8?w=500&h=600&fit=crop"] },
        { id: "w3", name: "DT Track Jacket", price: "R1,099", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop", desc: "Sporty silhouette with a luxury finish.", angles: ["https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1542272906-5ffd4f6d635b?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1516170195912-481917a61b63?w=500&h=600&fit=crop"] },
        { id: "w4", name: "Minimal DT Tee", price: "R499", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop", desc: "A minimalist essential with clean lines and premium feel.", angles: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1516170195912-481917a61b63?w=500&h=600&fit=crop"] },
        { id: "w5", name: "DT Beanie", price: "R299", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=600&fit=crop", desc: "Cozy knit beanie — the perfect finishing touch.", angles: ["https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1585399619871-d3e3eaa4e01b?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop"] }
    ],
    unisex: [
        { id: "u1", name: "Unisex Cargo Pants", price: "R1,099", image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500&h=600&fit=crop", desc: "Relaxed unisex cargo pants for any occasion.", angles: ["https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1542272906-5ffd4f6d635b?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1542113101-fa2f95c23414?w=500&h=600&fit=crop"] },
        { id: "u2", name: "Unisex Hoodie", price: "R849", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=600&fit=crop", desc: "Oversized hoodie designed for everyone.", angles: ["https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1556821552-7a0fb3a117e8?w=500&h=600&fit=crop"] },
        { id: "u3", name: "Unisex Track Pants", price: "R949", image: "https://images.unsplash.com/photo-1584862109647-5d105f4d96cd?w=500&h=600&fit=crop", desc: "Tapered sporty track pants with a modern cut.", angles: ["https://images.unsplash.com/photo-1584862109647-5d105f4d96cd?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1542272906-5ffd4f6d635b?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500&h=600&fit=crop"] },
        { id: "u4", name: "Unisex Beanie", price: "R299", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=600&fit=crop", desc: "Essential beanie for all seasons.", angles: ["https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1585399619871-d3e3eaa4e01b?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop"] },
        { id: "u5", name: "Unisex Graphic Tee", price: "R499", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop", desc: "Bold statement tee with premium construction.", angles: ["https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1516170195912-481917a61b63?w=500&h=600&fit=crop"] }
    ],
    accessories: [
        { id: "a1", name: "DT Leather Belt", price: "R349", image: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=500&h=600&fit=crop", desc: "Smooth leather belt with a signature metallic buckle.", angles: ["https://images.unsplash.com/photo-1521334884684-d80222895322?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1591637281649-4b64210b2d5f?w=500&h=600&fit=crop"] },
        { id: "a2", name: "Silver Chain Necklace", price: "R429", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=600&fit=crop", desc: "Bold silver chain that elevates every outfit.", angles: ["https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop"] },
        { id: "a3", name: "DT Sunglasses", price: "R599", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&h=600&fit=crop", desc: "Modern square sunglasses with UV protection.", angles: ["https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1508296695146-25773b16bed0?w=500&h=600&fit=crop"] },
        { id: "a4", name: "Leather Crossbody", price: "R899", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&h=600&fit=crop", desc: "Compact crossbody bag finished with premium leather.", angles: ["https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=500&h=600&fit=crop"] },
        { id: "a5", name: "Embroidered Cap", price: "R279", image: "https://images.unsplash.com/photo-1520975915155-5552e3b3a1e8?w=500&h=600&fit=crop", desc: "Signature cap with embroidered Dressup Trend branding.", angles: ["https://images.unsplash.com/photo-1520975915155-5552e3b3a1e8?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1585399619871-d3e3eaa4e01b?w=500&h=600&fit=crop", "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=600&fit=crop"] }
    ]
};
const allProducts = [...products.men, ...products.women, ...products.unisex, ...products.accessories];

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

    // Fill track
    track.innerHTML = productArray.map((p, i) =>
        renderProductCard(p, badges[p.id] || '')
    ).join('');

    // Responsive: how many cards visible
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

    // Build dots
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
        // Card width
        const cards = track.querySelectorAll('.product-card');
        if (!cards.length) return;
        const cardEl = cards[0];
        const gap = 22;
        const offset = current * (cardEl.offsetWidth + gap);
        track.style.transform = `translateX(-${offset}px)`;

        // Clamp
        current = Math.min(current, maxIndex());

        // Btn states
        if (prevBtn) prevBtn.disabled = current === 0;
        if (nextBtn) nextBtn.disabled = current >= maxIndex();

        // Dots
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

    // Touch/swipe
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

    // Rebuild on resize
    window.addEventListener('resize', () => {
        buildDots();
        current = Math.min(current, maxIndex());
        update();
    });

    attachCardEvents(container);
}

// ---------- CAROUSEL HTML TEMPLATE ----------
function carouselHtml(id) {
    return `
        <div class="carousel-wrapper" id="${id}">
            <div class="carousel-track-container">
                <div class="products-carousel"></div>
            </div>
            <div class="carousel-nav">
                <button class="carousel-btn carousel-prev" aria-label="Previous">
                    <i class="fas fa-arrow-left"></i>
                </button>
                <div class="carousel-dots"></div>
                <button class="carousel-btn carousel-next" aria-label="Next">
                    <i class="fas fa-arrow-right"></i>
                </button>
            </div>
        </div>
    `;
}

// ---------- MODAL ----------
function openModal(product) {
    document.getElementById("modalName").innerText = product.name;
    document.getElementById("modalPrice").innerText = product.price;
    document.getElementById("modalDesc").innerText = product.desc;
    document.getElementById("modalImg").innerHTML =
        `<img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/520x300/F7F4F0/3D3530?text=DRESSUP'">`;

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
            renderProductDetailsPage(prod);
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

// ---------- BRAND STRIP ----------
function brandStripHtml() {
    const tags = ['Premium Quality', 'Streetwear', 'New Arrivals', 'Designer Pieces', 'Made to Impress', 'Dressup Trend', 'South Africa', 'Confidence Wear', 'Premium Quality', 'Streetwear', 'New Arrivals', 'Designer Pieces', 'Made to Impress', 'Dressup Trend', 'South Africa', 'Confidence Wear'];
    return `<div class="brand-strip"><div class="brand-strip-inner">${tags.map(t => `<span>${t}</span>`).join('')}</div></div>`;
}

// ---------- SCROLL HELPERS ----------
function scrollToEl(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ---------- HOME PAGE ----------
function renderHome() {
    const featuredBadges = { m1: 'Bestseller', m2: 'New', w1: 'New', m4: 'Limited' };
    const arrivalBadges = { w2: 'New', w3: 'New', m5: 'New', u1: 'New' };

    const html = `
        <div class="container">
            <!-- CATEGORIES -->
            <div id="categoriesSection" class="category-row scroll-target">
                <div class="category-card">
                    <div class="category-bg" style="background-image:url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop');"></div>
                    <div class="category-overlay"></div>
                    <div class="category-content">
                        <h3>Men</h3>
                        <button class="shop-now-btn men-shop">Shop Now <i class="fas fa-arrow-right" style="font-size:0.75rem;"></i></button>
                    </div>
                </div>
                <div class="category-card">
                    <div class="category-bg" style="background-image:url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop');"></div>
                    <div class="category-overlay"></div>
                    <div class="category-content">
                        <h3>Women</h3>
                        <button class="shop-now-btn women-shop">Shop Now <i class="fas fa-arrow-right" style="font-size:0.75rem;"></i></button>
                    </div>
                </div>
                <div class="category-card">
                    <div class="category-bg" style="background-image:url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop');"></div>
                    <div class="category-overlay"></div>
                    <div class="category-content">
                        <h3>Unisex</h3>
                        <button class="shop-now-btn unisex-shop">Shop Now <i class="fas fa-arrow-right" style="font-size:0.75rem;"></i></button>
                    </div>
                </div>
            </div>

            <!-- FEATURED CAROUSEL -->
            <div class="section-header" style="margin-top:72px;">
                <div>
                    <h2 class="section-title" style="margin-top:0;">Featured Pieces</h2>
                    <p class="section-subtitle">Handpicked designer essentials for every wardrobe</p>
                </div>
                <a class="view-all-link" id="viewAllFeatured">View all <i class="fas fa-arrow-right" style="font-size:0.75rem;"></i></a>
            </div>
            ${carouselHtml('featuredCarousel')}

            ${brandStripHtml()}

            <!-- STORY SECTION -->
            <div class="story-section">
                <div class="story-img-wrap">
                    <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=900&auto=format&fit=crop" alt="Our Story">
                </div>
                <div class="story-text-wrap">
                    <h2>More Than Clothes.<br><em>It's a Lifestyle.</em></h2>
                    <p>At Dressup Trend, we don't just sell clothes — we create identity. Our designer pieces are crafted for individuals who want to stand out, move differently, and wear confidence every day.</p>
                    <p>From downtown energy to high-fashion minimalism, every piece tells a story.</p>
                    <button id="storyBtn" class="btn dark-btn">Discover Our Story <i class="fas fa-arrow-right" style="font-size:0.8rem;"></i></button>
                    <div class="story-stats">
                        <div class="stat-item"><h3>15+</h3><p>Designer Pieces</p></div>
                        <div class="stat-item"><h3>3</h3><p>Collections</p></div>
                        <div class="stat-item"><h3>SA</h3><p>Proudly Local</p></div>
                    </div>
                </div>
            </div>

            <!-- NEW ARRIVALS CAROUSEL -->
            <div class="section-header">
                <div>
                    <h2 class="section-title" style="margin-top:0;">New Arrivals</h2>
                    <p class="section-subtitle">Fresh drops — be the first to wear them</p>
                </div>
                <a class="view-all-link" id="viewAllArrivals">View all <i class="fas fa-arrow-right" style="font-size:0.75rem;"></i></a>
            </div>
            ${carouselHtml('arrivalsCarousel')}

            <!-- BENEFITS -->
            <div class="benefits">
                <div class="benefit">
                    <div class="benefit-icon"><i class="fas fa-truck"></i></div>
                    <div class="benefit-text">
                        <h3>Fast Delivery</h3>
                        <p>Quick and reliable delivery straight to your door, wherever you are.</p>
                    </div>
                </div>
                <div class="benefit">
                    <div class="benefit-icon"><i class="fas fa-lock"></i></div>
                    <div class="benefit-text">
                        <h3>Secure Payment</h3>
                        <p>Your payment information is always safe and protected.</p>
                    </div>
                </div>
                <div class="benefit">
                    <div class="benefit-icon"><i class="fas fa-gem"></i></div>
                    <div class="benefit-text">
                        <h3>Premium Quality</h3>
                        <p>Designer quality you can see and feel in every thread.</p>
                    </div>
                </div>
            </div>

            <!-- NEWSLETTER -->
            <div class="newsletter">
                <p class="eyebrow">Exclusive Offer</p>
                <h2>Get 10% Off Your First Order</h2>
                <p>Join the Dressup Trend community and shop ahead in fashion.</p>
                <div class="newsletter-form">
                    <input type="email" id="subEmail" placeholder="Enter your email address">
                    <button id="subscribeBtn" class="btn gold-btn">Subscribe</button>
                </div>
            </div>
        </div>
    `;

    document.getElementById("app").innerHTML = html;

    // Build carousels
    const featured = [products.men[0], products.men[1], products.women[0], products.men[3], products.women[2]];
    const arrivals = [products.women[0], products.women[1], products.women[2], products.men[4], products.unisex[0], products.unisex[2]];

    buildCarousel('featuredCarousel', featured, featuredBadges);
    buildCarousel('arrivalsCarousel', arrivals, arrivalBadges);

    // Events
    document.querySelectorAll(".men-shop").forEach(b => b.addEventListener("click", () => renderMenPage()));
    document.querySelectorAll(".women-shop").forEach(b => b.addEventListener("click", () => renderWomenPage()));
    document.querySelectorAll(".unisex-shop").forEach(b => b.addEventListener("click", () => renderUnisexPage()));
    document.getElementById("storyBtn")?.addEventListener("click", () => renderStoryPage());
    document.getElementById("viewAllFeatured")?.addEventListener("click", () => renderAllProducts());
    document.getElementById("viewAllArrivals")?.addEventListener("click", () => renderAllProducts());
    document.getElementById("subscribeBtn")?.addEventListener("click", () => {
        const val = document.getElementById("subEmail")?.value;
        if (val && val.includes('@')) {
            alert("🎉 Thanks for subscribing! Your 10% off code is on its way.");
        } else {
            alert("Please enter a valid email address.");
        }
    });

    reattachExploreBtn(() => scrollToEl('categoriesSection'));
}

// ---------- CATEGORY / ALL PRODUCTS PAGE ----------
function renderCategoryPage(title, subtitle, productArray) {
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
            <div class="view-all-container">
                <button id="viewAllBtn" class="btn dark-btn">View All Products <i class="fas fa-arrow-right" style="font-size:0.8rem;"></i></button>
            </div>
        </div>
    `;
    document.getElementById("app").innerHTML = html;
    attachCardEvents();
    document.getElementById("viewAllBtn")?.addEventListener("click", () => renderAllProducts());
    reattachExploreBtn(() => { renderHome(); setTimeout(() => scrollToEl('categoriesSection'), 120); });
}

function renderMenPage() { renderCategoryPage("Men's Collection", "Premium streetwear and designer essentials for men.", products.men); }
function renderWomenPage() { renderCategoryPage("Women's Collection", "Bold, sophisticated designer pieces for women.", products.women); }
function renderUnisexPage() { renderCategoryPage("Unisex Collection", "Versatile designer pieces for everyone.", products.unisex); }
function renderAccessoriesPage() { renderCategoryPage("Accessories", "Curated designer accessories to complete your look.", products.accessories); }
function renderAllProducts() { renderCategoryPage("All Products", "Browse the complete Dressup Trend collection.", allProducts); }

// ---------- STORY PAGE ----------
function renderStoryPage() {
    const html = `
        <div class="story-page">
            <div class="hero-eyebrow" style="display:inline-flex; margin-bottom:24px; background:var(--gold-pale); border:1px solid rgba(184,151,58,0.3); color:var(--gold);">
                <i class="fas fa-star" style="font-size:0.6rem;"></i> Our Story
            </div>
            <h1>Born From the Streets.<br>Built for the Bold.</h1>
            <p>Dressup Trend was born from the desire to blend streetwear edge with luxury craftsmanship. We create for individuals who refuse to blend in.</p>
            <p>More than clothing, we are a movement of self-expression. Every piece tells a story — from downtown energy to high-fashion minimalism. We believe what you wear shapes how you move through the world.</p>
            <p>Proudly South African. Globally inspired. Unapologetically bold.</p>
            <button id="backHome" class="btn dark-btn">← Back to Home</button>
        </div>
    `;
    document.getElementById("app").innerHTML = html;
    document.getElementById("backHome")?.addEventListener("click", () => renderHome());
    reattachExploreBtn(() => { renderHome(); setTimeout(() => scrollToEl('categoriesSection'), 120); });
}

// ---------- EXPLORE BUTTON ----------
function reattachExploreBtn(handler) {
    const btn = document.getElementById("exploreBtn");
    if (!btn) return;
    const fresh = btn.cloneNode(true);
    btn.parentNode.replaceChild(fresh, btn);
    fresh.addEventListener("click", handler);
}

// ---------- INIT ----------
function init() {
    renderHome();

    const exploreBtn = document.getElementById("exploreBtn");
    if (exploreBtn) exploreBtn.addEventListener("click", () => scrollToEl('categoriesSection'));

    document.getElementById("navHome")?.addEventListener("click", () => renderHome());
    document.getElementById("navMen")?.addEventListener("click", () => renderMenPage());
    document.getElementById("navWomen")?.addEventListener("click", () => renderWomenPage());
    document.getElementById("navUnisex")?.addEventListener("click", () => renderUnisexPage());
    document.getElementById("navAccessories")?.addEventListener("click", () => renderAccessoriesPage());
    document.getElementById("navAll")?.addEventListener("click", () => renderAllProducts());
    document.getElementById("discoverStoryBtn")?.addEventListener("click", () => renderStoryPage());

    document.getElementById("footerHome")?.addEventListener("click", () => renderHome());
    document.getElementById("footerMen")?.addEventListener("click", () => renderMenPage());
    document.getElementById("footerWomen")?.addEventListener("click", () => renderWomenPage());
    document.getElementById("footerUnisex")?.addEventListener("click", () => renderUnisexPage());
    document.getElementById("footerAccessories")?.addEventListener("click", () => renderAccessoriesPage());
    document.getElementById("footerAll")?.addEventListener("click", () => renderAllProducts());
    document.getElementById("footerStory")?.addEventListener("click", () => renderStoryPage());
    document.getElementById("footerContact")?.addEventListener("click", () =>
        alert(`📧 ${CONTACT.email}\n📞 WhatsApp: ${CONTACT.whatsapp}\n📸 Instagram: @dressup_trendza`)
    );
    document.getElementById("footerIG")?.addEventListener("click", () => window.open(CONTACT.instagram, '_blank'));
    document.getElementById("footerSocialIG")?.addEventListener("click", () => window.open(CONTACT.instagram, '_blank'));
    document.getElementById("footerSocialWA")?.addEventListener("click", () =>
        window.open(`https://wa.me/${CONTACT.whatsapp}`, '_blank')
    );
    document.getElementById("footerSocialEmail")?.addEventListener("click", () =>
        window.location.href = `mailto:${CONTACT.email}`
    );

    // Modal
    const modal = document.getElementById("productModal");
    document.querySelector(".close-modal")?.addEventListener("click", () => modal.style.display = "none");
    window.addEventListener("click", e => { if (e.target === modal) modal.style.display = "none"; });
    document.addEventListener("keydown", e => { if (e.key === "Escape") modal.style.display = "none"; });
}

window.addEventListener("DOMContentLoaded", init);