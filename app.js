let lang="gr"
//Όταν πατάς κουμπί γλώσσας: αλλάζει η μεταβλητή ξαναφορτώνει το site.
function setLang(l){
lang=l
renderWebsite()
}

function renderWebsite(){

    //Παίρνει το όνομα του εστιατορίου από το DB.
    document.getElementById("siteTitle").innerText=
    DB.restaurant[lang]

    document.getElementById("welcome").innerText=
    DB.welcome[lang]

    document.getElementById("slogan").innerText=
    DB.slogan[lang]

    renderOrderModule()
    renderMenu()
    renderContact()
    renderLocation()
    renderMenuTitle()
    // renderFooter()

}


function renderOrderModule(){

    document.getElementById("orderTitle").innerText=
        DB.orderModule.title[lang]

    document.getElementById("openingText").innerText=
        DB.opening[lang]

    document.getElementById("buffetTime").innerText=
        DB.buffetTime[lang]

    document.getElementById("buffetPrice").innerText=
        DB.buffetPrice[lang]

    document.getElementById("orderButton").innerText=
        DB.orderModule.orderButton[lang]
}

function renderMenu(){
    let html=""

    DB.menu.forEach(category=>{

        let catId="cat_"+category.id

        html+=`
        <div class="category">
            <h3 onclick="toggle('${catId}')">
            ${category.name[lang]} ▼
            </h3>

            <div id="${catId}" style="display:none">
        `

        category.items.forEach(food=>{

            html+=`
            <div class="food">
                <span>${food[lang]}</span>
                <span>€${food.price}</span>
            </div>
            `

        })

        html+=`
            </div>
        </div>
        `

    })

    document.getElementById("menuContainer").innerHTML=html

}

//Ανοίγει ή κλείνει μια κατηγορία μενού.
function toggle(id){

    let el=document.getElementById(id)

    el.style.display =
    el.style.display==="none"?"block":"none"

}

function renderContact(){

    document.getElementById("contactTitle").innerText=
        DB.contact[lang].title

    document.getElementById("contactPhone").innerText=
        DB.contact[lang].phone

    document.getElementById("contactAddress").innerText=
        DB.contact[lang].address

}

function renderLocation(){

    document.getElementById("locationTitle").innerText=
        DB.locationTitle[lang]

}

function renderMenuTitle(){

    document.getElementById("menuTitle").innerText=
    DB.menuTitle[lang]

}

// function renderFooter(){}


//     document.querySelectorAll(".category h3").forEach(h=>{

//     h.addEventListener("click",()=>{

//     let target=h.nextElementSibling

//     if(!target)return

//         target.style.display =
//         target.style.display==="block"?"none":"block"

// })

// })

window.onload=renderWebsite







