// ---------- PRODUCT DETAILS PAGE ----------
function renderProductDetailsPage(product) {
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
    document.getElementById("backBtn").addEventListener("click", () => renderHome());
}
