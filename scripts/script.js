// ---------- OFFICIAL CONTACT DETAILS ----------
const CONTACT = {
    email: "dressuptrendza@outlook.com",
    whatsapp: "0837511231",
    instagram: "https://www.instagram.com/dressup_trendza"
};

// ---------- PRODUCT DATABASE ----------
const products = {
    men: [
        { id: "m1", name: "DT Signature Hoodie", price: "R899", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=600&fit=crop", desc: "Oversized signature hoodie in premium cotton fleece. A streetwear essential." },
        { id: "m2", name: "Premium Wool Jacket", price: "R1,699", image: "https://images.unsplash.com/photo-1539533113208-f6df8cc8b543?w=500&h=600&fit=crop", desc: "Tailored wool jacket with timeless elegance and a modern cut." },
        { id: "m3", name: "Oversized Statement Tee", price: "R599", image: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=500&h=600&fit=crop", desc: "Bold graphic, relaxed silhouette — a streetwear staple." },
        { id: "m4", name: "DT Cargo Pants", price: "R1,199", image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500&h=600&fit=crop", desc: "Utility cargo pants reimagined with a modern edge and premium finish." },
        { id: "m5", name: "Ripped Denim", price: "R899", image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=600&fit=crop", desc: "Distressed denim crafted for confident, bold looks." }
    ],
    women: [
        { id: "w1", name: "Vanity Jacket", price: "R1,499", image: "https://images.unsplash.com/photo-1548624313-0396c75e4b63?w=500&h=600&fit=crop", desc: "A statement jacket that's as sleek as it is fierce." },
        { id: "w2", name: "Essential Hoodie", price: "R799", image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?w=500&h=600&fit=crop", desc: "Your everyday essential in ultra-soft premium fabric." },
        { id: "w3", name: "DT Track Jacket", price: "R1,099", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&h=600&fit=crop", desc: "Sporty silhouette with a luxury finish." },
        { id: "w4", name: "Minimal DT Tee", price: "R499", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop", desc: "A minimalist essential with clean lines and premium feel." },
        { id: "w5", name: "DT Beanie", price: "R299", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=600&fit=crop", desc: "Cozy knit beanie — the perfect finishing touch." }
    ],
    unisex: [
        { id: "u1", name: "Unisex Cargo Pants", price: "R1,099", image: "https://images.unsplash.com/photo-1517438476312-10d79c077509?w=500&h=600&fit=crop", desc: "Relaxed unisex cargo pants for any occasion." },
        { id: "u2", name: "Unisex Hoodie", price: "R849", image: "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?w=500&h=600&fit=crop", desc: "Oversized hoodie designed for everyone." },
        { id: "u3", name: "Unisex Track Pants", price: "R949", image: "https://images.unsplash.com/photo-1584862109647-5d105f4d96cd?w=500&h=600&fit=crop", desc: "Tapered sporty track pants with a modern cut." },
        { id: "u4", name: "Unisex Beanie", price: "R299", image: "https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&h=600&fit=crop", desc: "Essential beanie for all seasons." },
        { id: "u5", name: "Unisex Graphic Tee", price: "R499", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&h=600&fit=crop", desc: "Bold statement tee with premium construction." }
    ],
    accessories: [
        { id: "a1", name: "DT Leather Belt", price: "R349", image: "https://images.unsplash.com/photo-1521334884684-d80222895322?w=500&h=600&fit=crop", desc: "Smooth leather belt with a signature metallic buckle." },
        { id: "a2", name: "Silver Chain Necklace", price: "R429", image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500&h=600&fit=crop", desc: "Bold silver chain that elevates every outfit." },
        { id: "a3", name: "DT Sunglasses", price: "R599", image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500&h=600&fit=crop", desc: "Modern square sunglasses with UV protection." },
        { id: "a4", name: "Leather Crossbody", price: "R899", image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=500&h=600&fit=crop", desc: "Compact crossbody bag finished with premium leather." },
        { id: "a5", name: "Embroidered Cap", price: "R279", image: "https://images.unsplash.com/photo-1520975915155-5552e3b3a1e8?w=500&h=600&fit=crop", desc: "Signature cap with embroidered Dressup Trend branding." }
    ]
};
const allProducts = [...products.men, ...products.women, ...products.unisex, ...products.accessories];

// ---------- HERO SECTION CONTROL - FORCE HIDE/SHOW ----------
function hideHero() {
    const hero = document.getElementById('heroSection');
    if (hero) {
        hero.style.display = 'none';
        hero.style.visibility = 'hidden';
        hero.style.opacity = '0';
        hero.style.height = '0';
        hero.style.margin = '0';
        hero.style.padding = '0';
        hero.style.overflow = 'hidden';
    }
}

function showHero() {
    const hero = document.getElementById('heroSection');
    if (hero) {
        hero.style.display = 'flex';
        hero.style.visibility = 'visible';
        hero.style.opacity = '1';
        hero.style.height = '';
        hero.style.margin = '';
        hero.style.padding = '';
        hero.style.overflow = '';
    }
}

// ---------- SCROLL TO TOP ----------
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'instant' });
}

// ---------- PRODUCT CARD TEMPLATE ----------
function renderProductCard(product, badge = '') {
    const badgeHtml = badge ? `<div class="product-badge">${badge}</div>` : '';
    return `
        <div class="product-card" data-product='${JSON.stringify(product).replace(/'/g, "&#39;")}'>
            <div class="product-image">
                ${badgeHtml}
                <img src="${product.image}" alt="${product.name}" loading="lazy"
                     onerror="this.src='https://placehold.co/500x600/111/B8973A?text=DRESSUP'">
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
                <p class="product-desc-text">${product.desc.substring(0, 80)}...</p>
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

// ---------- MODAL FUNCTIONS ----------
function openModal(product) {
    document.getElementById("modalName").innerText = product.name;
    document.getElementById("modalPrice").innerText = product.price;
    document.getElementById("modalDesc").innerText = product.desc;
    document.getElementById("modalImg").innerHTML = `<img src="${product.image}" alt="${product.name}" onerror="this.src='https://placehold.co/520x300/111/B8973A?text=DRESSUP'">`;
    
    const modalEmail = document.getElementById("modalEmail");
    const modalWhatsapp = document.getElementById("modalWhatsapp");
    const modalInstagram = document.getElementById("modalInstagram");

    modalEmail.href = `mailto:${CONTACT.email}?subject=Inquiry about ${encodeURIComponent(product.name)}&body=Hi DRESSUP, I'm interested in ${product.name} (${product.price})`;
    modalWhatsapp.href = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hello DRESSUP! I'm interested in ${product.name} (${product.price}). Please provide more details.`)}`;
    modalInstagram.href = CONTACT.instagram;
    modalInstagram.target = '_blank';

    document.getElementById("productModal").style.display = "flex";
}

function openWA(product) {
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(`Hi DRESSUP! I'm interested in ${product.name} (${product.price})`)}`, '_blank');
}

function openEmail(product) {
    window.location.href = `mailto:${CONTACT.email}?subject=${encodeURIComponent(product.name)}&body=Hi, I'm interested in ${product.name} (${product.price})`;
}

// ---------- ATTACH CARD EVENTS ----------
function attachCardEvents(scope = document) {
    scope.querySelectorAll(".product-card").forEach(card => {
        const newCard = card.cloneNode(true);
        card.parentNode.replaceChild(newCard, card);
        
        newCard.addEventListener("click", (e) => {
            if (e.target.closest('.product-actions-overlay') || e.target.closest('.ig-link')) return;
            const prod = JSON.parse(newCard.getAttribute("data-product"));
            openModal(prod);
        });
    });

    document.querySelectorAll(".card-wa").forEach(btn => {
        const prod = JSON.parse(btn.getAttribute("data-product"));
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            openWA(prod);
        });
    });

    document.querySelectorAll(".card-email").forEach(btn => {
        const prod = JSON.parse(btn.getAttribute("data-product"));
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            openEmail(prod);
        });
    });

    document.querySelectorAll(".card-ig").forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.stopPropagation();
            window.open(CONTACT.instagram, '_blank');
        });
    });
}

// ---------- CAROUSEL BUILDER ----------
function buildCarousel(containerId, productArray, badges = {}) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const track = container.querySelector('.products-carousel');
    const prevBtn = container.querySelector('.carousel-prev');
    const nextBtn = container.querySelector('.carousel-next');
    const dotsContainer = container.querySelector('.carousel-dots');

    if (!track) return;

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
        if (!dotsContainer) return;
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

        if (prevBtn) prevBtn.disabled = current === 0;
        if (nextBtn) nextBtn.disabled = current >= maxIndex();

        if (dotsContainer) {
            const vis = getVisible();
            dotsContainer.querySelectorAll('.carousel-dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === Math.floor(current / vis));
            });
        }
    }

    if (prevBtn) {
        const newPrev = prevBtn.cloneNode(true);
        prevBtn.parentNode.replaceChild(newPrev, prevBtn);
        newPrev.addEventListener('click', () => {
            current = Math.max(0, current - getVisible());
            update();
        });
    }

    if (nextBtn) {
        const newNext = nextBtn.cloneNode(true);
        nextBtn.parentNode.replaceChild(newNext, nextBtn);
        newNext.addEventListener('click', () => {
            current = Math.min(maxIndex(), current + getVisible());
            update();
        });
    }

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

// ---------- CAROUSEL HTML ----------
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

// ---------- PAGE RENDERING FUNCTIONS ----------
function renderCategoryPage(title, subtitle, productArray) {
    // FORCE HIDE HERO SECTION
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
            <div class="view-all-container">
                <button id="viewAllBtn" class="btn dark-btn">View All Products <i class="fas fa-arrow-right"></i></button>
            </div>
        </div>
    `;
    document.getElementById("app").innerHTML = html;
    attachCardEvents();
    document.getElementById("viewAllBtn")?.addEventListener("click", () => renderAllProducts());
    scrollToTop();
}

function renderMenPage() { renderCategoryPage("Men's Collection", "Premium streetwear and designer essentials for men.", products.men); }
function renderWomenPage() { renderCategoryPage("Women's Collection", "Bold, sophisticated designer pieces for women.", products.women); }
function renderUnisexPage() { renderCategoryPage("Unisex Collection", "Versatile designer pieces for everyone.", products.unisex); }
function renderAccessoriesPage() { renderCategoryPage("Accessories", "Curated designer accessories to complete your look.", products.accessories); }
function renderAllProducts() { renderCategoryPage("All Products", "Browse the complete Dressup Trend collection.", allProducts); }

function renderStoryPage() {
    // FORCE HIDE HERO SECTION
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
    document.getElementById("backHome")?.addEventListener("click", () => renderHome());
    scrollToTop();
}

function renderHome() {
    // SHOW HERO SECTION ONLY ON HOME
    showHero();
    
    const featuredBadges = { m1: 'Bestseller', m2: 'New', w1: 'New', m4: 'Limited' };
    const arrivalBadges = { w2: 'New', w3: 'New', m5: 'New', u1: 'New' };
    
    const featured = [products.men[0], products.men[1], products.women[0], products.men[3], products.women[2]];
    const arrivals = [products.women[0], products.women[1], products.women[2], products.men[4], products.unisex[0], products.unisex[2]];

    const html = `
        <div class="container">
            <div id="categoriesSection" class="category-row scroll-target">
                <div class="category-card">
                    <div class="category-bg" style="background-image:url('https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&h=1000&fit=crop');"></div>
                    <div class="category-overlay"></div>
                    <div class="category-content">
                        <h3>Men</h3>
                        <button class="shop-now-btn men-shop">Shop Now <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div class="category-card">
                    <div class="category-bg" style="background-image:url('https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&h=1000&fit=crop');"></div>
                    <div class="category-overlay"></div>
                    <div class="category-content">
                        <h3>Women</h3>
                        <button class="shop-now-btn women-shop">Shop Now <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div class="category-card">
                    <div class="category-bg" style="background-image:url('https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=1000&fit=crop');"></div>
                    <div class="category-overlay"></div>
                    <div class="category-content">
                        <h3>Unisex</h3>
                        <button class="shop-now-btn unisex-shop">Shop Now <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
                <div class="category-card">
                    <div class="category-bg" style="background-image:url('https://images.unsplash.com/photo-1521334884684-d80222895322?w=800&h=1000&fit=crop');"></div>
                    <div class="category-overlay"></div>
                    <div class="category-content">
                        <h3>Accessories</h3>
                        <button class="shop-now-btn accessories-shop">Shop Now <i class="fas fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>

            <div class="section-header" style="margin-top:72px;">
                <div>
                    <h2 class="section-title">Featured Pieces</h2>
                    <p class="section-subtitle">Handpicked designer essentials for every wardrobe</p>
                </div>
            </div>
            ${carouselHtml('featuredCarousel')}
            
            <div class="brand-strip"><div class="brand-strip-inner">${['Premium Quality', 'Streetwear', 'New Arrivals', 'Designer Pieces', 'Made to Impress', 'Dressup Trend', 'South Africa', 'Confidence Wear'].map(t => `<span>${t}</span>`).join('')}${['Premium Quality', 'Streetwear', 'New Arrivals', 'Designer Pieces', 'Made to Impress', 'Dressup Trend', 'South Africa', 'Confidence Wear'].map(t => `<span>${t}</span>`).join('')}</div></div>
            
            <div class="story-section">
                <div class="story-img-wrap">
                    <img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=900&auto=format" alt="Our Story">
                </div>
                <div class="story-text-wrap">
                    <h2>More Than Clothes.<br><em>It's a Lifestyle.</em></h2>
                    <p>At Dressup Trend, we don't just sell clothes — we create identity. Our designer pieces are crafted for individuals who want to stand out, move differently, and wear confidence every day.</p>
                    <button id="storyBtn" class="btn dark-btn">Discover Our Story <i class="fas fa-arrow-right"></i></button>
                    <div class="story-stats">
                        <div class="stat-item"><h3>15+</h3><p>Designer Pieces</p></div>
                        <div class="stat-item"><h3>3</h3><p>Collections</p></div>
                        <div class="stat-item"><h3>SA</h3><p>Proudly Local</p></div>
                    </div>
                </div>
            </div>

            <div class="section-header">
                <div>
                    <h2 class="section-title">New Arrivals</h2>
                    <p class="section-subtitle">Fresh drops — be the first to wear them</p>
                </div>
            </div>
            ${carouselHtml('arrivalsCarousel')}
            
            <div class="benefits">
                <div class="benefit"><div class="benefit-icon"><i class="fas fa-truck"></i></div><div class="benefit-text"><h3>Fast Delivery</h3><p>Quick and reliable delivery straight to your door.</p></div></div>
                <div class="benefit"><div class="benefit-icon"><i class="fas fa-lock"></i></div><div class="benefit-text"><h3>Secure Payment</h3><p>Your payment information is always safe.</p></div></div>
                <div class="benefit"><div class="benefit-icon"><i class="fas fa-gem"></i></div><div class="benefit-text"><h3>Premium Quality</h3><p>Designer quality you can see and feel.</p></div></div>
            </div>

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
    
    setTimeout(() => {
        buildCarousel('featuredCarousel', featured, featuredBadges);
        buildCarousel('arrivalsCarousel', arrivals, arrivalBadges);
    }, 50);
    
    // Shop Now buttons
    document.querySelectorAll(".men-shop").forEach(b => b.addEventListener("click", (e) => {
        e.preventDefault();
        renderMenPage();
    }));
    document.querySelectorAll(".women-shop").forEach(b => b.addEventListener("click", (e) => {
        e.preventDefault();
        renderWomenPage();
    }));
    document.querySelectorAll(".unisex-shop").forEach(b => b.addEventListener("click", (e) => {
        e.preventDefault();
        renderUnisexPage();
    }));
    document.querySelectorAll(".accessories-shop").forEach(b => b.addEventListener("click", (e) => {
        e.preventDefault();
        renderAccessoriesPage();
    }));
    
    document.getElementById("storyBtn")?.addEventListener("click", () => renderStoryPage());
    document.getElementById("subscribeBtn")?.addEventListener("click", () => {
        const val = document.getElementById("subEmail")?.value;
        if (val && val.includes('@')) alert("🎉 Thanks for subscribing! Your 10% off code is on its way.");
        else alert("Please enter a valid email address.");
    });
    
    attachCardEvents();
    scrollToTop();
}

// ---------- INITIALIZATION ----------
function init() {
    renderHome();
    
    // Navigation bar buttons
    document.getElementById("navHome")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderHome();
    });
    document.getElementById("navMen")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderMenPage();
    });
    document.getElementById("navWomen")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderWomenPage();
    });
    document.getElementById("navUnisex")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderUnisexPage();
    });
    document.getElementById("navAccessories")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderAccessoriesPage();
    });
    document.getElementById("navAll")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderAllProducts();
    });
    document.getElementById("exploreBtn")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderAllProducts();
    });
    document.getElementById("discoverStoryBtn")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderStoryPage();
    });
    
    // Footer buttons
    document.getElementById("footerHome")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderHome();
    });
    document.getElementById("footerMen")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderMenPage();
    });
    document.getElementById("footerWomen")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderWomenPage();
    });
    document.getElementById("footerUnisex")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderUnisexPage();
    });
    document.getElementById("footerAccessories")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderAccessoriesPage();
    });
    document.getElementById("footerAll")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderAllProducts();
    });
    document.getElementById("footerStory")?.addEventListener("click", (e) => {
        e.preventDefault();
        renderStoryPage();
    });
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