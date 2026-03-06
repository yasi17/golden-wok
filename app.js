/* ===== Ρυθμίσεις & Αρχικοποίηση ===== */
let lang = "gr";

function setLang(l) {
    lang = l;
    updateLanguageButtons(l);
    renderWebsite();
}

// Λειτουργία για να φαίνεται ποια γλώσσα είναι επιλεγμένη
function updateLanguageButtons(currentLang) {
    const buttons = document.querySelectorAll('.lang button');
    buttons.forEach(btn => {
        // Καθαρίζουμε την κλάση active από όλα τα κουμπιά
        btn.classList.remove('active');
        
        // Προσθέτουμε την κλάση active στο κουμπί που πατήθηκε
        // (Βασίζεται στο κείμενο ή στη σειρά, εδώ χρησιμοποιούμε το onclick attribute για έλεγχο)
        if (btn.getAttribute('onclick').includes(`'${currentLang}'`)) {
            btn.classList.add('active');
        }
    });
}

function renderWebsite() {
    // Βασικά Στοιχεία
    document.getElementById("siteTitle").innerText = DB.restaurant[lang];
    document.getElementById("welcome").innerText = DB.welcome[lang];
    document.getElementById("slogan").innerText = DB.slogan[lang];
    document.getElementById("menuTitle").innerText = DB.menuTitle[lang];
    document.getElementById("locationTitle").innerText = DB.locationTitle[lang];

    // Modules
    renderOrderModule();
    renderMenu();
    renderContact();
}

function renderOrderModule() {
    document.getElementById("orderTitle").innerText = DB.orderModule.title[lang];
    document.getElementById("openingText").innerText = DB.opening[lang];
    document.getElementById("buffetTime").innerText = DB.buffetTime[lang];
    document.getElementById("buffetPrice").innerText = DB.buffetPrice[lang];
    document.getElementById("orderButton").innerText = DB.orderModule.orderButton[lang];
}

function renderMenu() {
    let html = "";

    DB.menu.forEach(category => {
        let catId = "cat_" + category.id;
        
        html += `
        <div class="category">
            <h3 onclick="toggle('${catId}')" style="cursor:pointer">
                ${category.name[lang]} <span style="font-size:0.8em">▼</span>
            </h3>
            <div id="${catId}" style="display:none">
        `;

        category.items?.forEach(food => {
            // Απλά πιάτα
            if (!food.type || food.type === "simple") {
                html += `
                <div class="food">
                    <span>${food[lang]}</span>
                    <span>€${food.price.toFixed(2)}</span>
                </div>
                `;
            }

            // Σύνθετα πιάτα (Bao Buns κλπ)
            if (food.type === "complex") {
                html += `
                <div style="padding:12px 0; text-align:left;">
                    <strong class="complex-title">${food.title[lang]}</strong>
                </div>
                `;

                food.options.forEach(opt => {
                    html += `
                    <div class="food">
                        <span style="padding-left:20px; opacity:0.9;">- ${opt[lang]}</span>
                        <span>€${opt.price.toFixed(2)}</span>
                    </div>
                    `;
                });
            }
        });

        html += "</div></div>";
    });

    document.getElementById("menuContainer").innerHTML = html;
}

function toggle(id) {
    let el = document.getElementById(id);
    if (!el) return;
    el.style.display = (el.style.display === "none") ? "block" : "none";
}

function renderContact() {
    // Διόρθωση: Πρόσβαση στο σωστό επίπεδο του DB.contact
    const info = DB.contact[lang];
    if (info) {
        document.getElementById("contactTitle").innerText = info.title;
        document.getElementById("contactPhone").innerText = info.phone;
        document.getElementById("contactAddress").innerText = info.address;
    }
}

// Εκκίνηση κατά το φόρτωμα
window.onload = () => {
    updateLanguageButtons(lang);
    renderWebsite();
};