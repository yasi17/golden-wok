let lang="gr"

function setLang(l){
lang=l
renderWebsite()
}

function renderWebsite(){

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

category.items?.forEach(food=>{

/* ===== 普通菜品 ===== */

if(!food.type || food.type==="simple"){

html+=`
<div class="food">
<span>${food[lang]}</span>
<span>€${food.price}</span>
</div>
`

}

/* ===== 复杂菜品（专业版） ===== */

if(food.type==="complex"){

html+=`
<div style="padding:12px 0">
<strong class="complex-title">
${food.title[lang]}
</strong>
</div>
`

food.options.forEach(opt=>{

html+=`
<div class="food">
<span style="padding-left:20px">
- ${opt[lang]}
</span>
<span>€${opt.price}</span>
</div>
`

})

}

})

html+="</div></div>"

})

document.getElementById("menuContainer").innerHTML=html

}
function toggle(id){

let el=document.getElementById(id)
if(!el) return

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





window.onload=renderWebsite
