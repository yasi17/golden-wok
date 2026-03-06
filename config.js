const DB = {

/* ===== 餐厅信息 ===== */

restaurant:{
zh:"金鼎",
en:"Golden Wok",
gr:"Golden Wok "
},

menuTitle:{
zh:"🍜 菜单",
en:"🍜 Menu",
gr:"🍜 Μενού"
},

slogan:{
zh:"正宗中华料理 雅典中餐厅",
en:"Authentic Chinese Food in Athens",
gr:"Αυθεντικό Κινέζικο Φαγητό"
},

welcome:{
zh:"欢迎来到金鼎",
en:"Welcome to Golden Wok",
gr:"Καλώς ήρθατε στο Golden Wok"
},

opening:{
zh:"营业时间：每天 13:00 - 23:00",
en:"Opening Hours: Every day 13:00 - 23:00",
gr:"Ώρες λειτουργίας: Κάθε μέρα 13:00 - 23:00"
},

buffetPrice:{ 
zh:"自助餐价格：周三周五 18€  （ 儿童 6-12岁 10€ ） | 周六周日 20€ （ 儿童 6-12岁 12€ ）", 
en:"Buffet Price: Wed Fri 18€ ( Children 6-12 10€ ) | Thu Sat 20€ ( Children 6-12 years 12€ )", 
gr:"Τιμή μπουφέ: Τετ Παρ 18€ ( Παιδιά 6-12 ετών 10€ ) | Πεμ Σαβ 20€ ( Παιδιά 6-12 ετών 12€ )" 
},

buffetTime:{
zh:"自助餐时间：周三周五周六 19：00 - 23：00 | 周日 13：30-17：00",
en:"Buffet Time: Wed Fri Sat 19:00 - 23:00 | Sun 13:30-17:00",
gr:"Ώρα μπουφέ: Τετ Παρ Σαβ 19:00 - 23:00 | Κυρ 13:30-17:00 "
},

orderModule:{
title:{
zh:"🕒 营业时间 & 🍜 点餐",
en:"🕒 Opening Hours & 🍜 Order",
gr:"🕒 Ώρες & 🍜 Παραγγελία"
},

orderButton:{
zh:"🍜 eFood 在线点餐",
en:"🍜 Order on eFood",
gr:"🍜 Παραγγελία στο eFood"
}
},

contact:{
zh:{
title:"联系方式",
phone:"电话：+30 XXXXXXXX",
address:"地址：Leof. Andrea Siggrou 207, Nea Smirni 171 21"
},

en:{
title:"Contact",
phone:"Phone: +30 XXXXXXXX",
address:"Address: Leof. Andrea Siggrou 207, Nea Smirni 171 21"
},

gr:{
title:"Επικοινωνία",
phone:"Τηλέφωνο: +30 XXXXXXXX",
address:"Διεύθυνση: Λεωφ. Ανδρέα Συγγρού 207, Νέα Σμύρνη 171 21"
}
},

locationTitle:{
zh:"📍 位置",
en:"📍 Location",
gr:"📍 Τοποθεσία"
},

/* ===== 菜单数据库（终极版三语言） ===== */

menu:[

{
id:"appetizers",
name:{
zh:"🥟 前菜 ",
en:"🥟 Appetizers",
gr:"🥟 Ορεκτικά"
},

items:[
{
zh:"春卷",
en:"Spring Rolls",
gr:"Spring Rolls"
price:3.8
},

{
zh:"鸡翅",
en:"Chicken Wings",
gr:"Φτερούγες Κοτόπουλου",
price:4.8
}
]
},

{
id:"rice",
name:{
zh:"🍚 米饭",
en:"🍚 Rice",
gr:"🍚 Ρύζι"
},

items:[
{
zh:"鸡肉炒饭",
en:"Fried Rice with Chicken",
gr:"Ρύζι με κοτόπουλο",
price:6.8
},

{
zh:"虾炒饭",
en:"Shrimp Fried Rice",
gr:"Ρύζι με γαρίδες",
price:7.8
}
]
}

]

}

