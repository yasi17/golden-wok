const DB = {

/* ===== 餐厅信息 ===== */

restaurant:{
zh:"金鼎",
en:"Golden Wok",
gr:"Golden Wok"
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
zh:"1. 蔬菜春卷（2个）",
en:"1. Spring rolls with vegetables (2pcs)",
gr:"1. Spring Rolls με λαχανικά (2 τμχ.)",
price:3.8
},

{
zh:"2. 炸起司云吞（6个）",
en:"2. Fried cheese Wonton (6pcs)",
gr:"2. Τηγανητά Wonton με τυρί (6 τμχ.)",
price:4.5
},

{
zh:"3. 芝麻炸鸡 （6个）",
en:"3. Fried chicken with sesame (6 pcs)",
gr:"3. Τηγανητό κοτόπουλο με σουσάμι (6 τμχ.)",
price:5.5
},

{
zh:"4. 鸡翅 （4个）",
en:"4. Chicken wings (4 pcs)",
gr:"4. Φτερούγες κοτόπουλου (4 τμχ.)",
price:4.8
},

{
zh:"5. 蒸或炸肉饺子 （6个）",
en:"5. Steam or fried meat Dumpings (6 pcs)",
gr: "5. Ατμού ή τηγανητά Dumplings κρέατος (6 τμχ.)",
price:4.8
},

{
zh:"6. BBQ 酱烧排骨（6块）",
en:"6. BBQ Spare ribs (6 pcs)",
gr:"6. BBQ Παϊδάκια (Spare ribs) με σάλτσα (6 τμχ.)",
price: 4.8
},

{
zh:" 7. 炸馒头 (2个)",
en:"7. Fried chinese bread (2 pcs)",
gr:"7. Τηγανητό κινέζικο ψωμί (2 τμχ.)",
price: 3.2
},

{
zh:"8. 双人开胃菜拼盘 (包含 1, 2, 3, 4, 5, 6)",
en:"8. Appetizer for 2 (including 1, 2, 3, 4, 5, 6)",
gr:"8. Ποικιλία ορεκτικών για 2 άτομα (περιλαμβάνει 1, 2, 3, 4, 5, 6)",
price: 9.2
},

{
zh:"9. 单人开胃菜拼盘",
en:"9. Appetizer for 1",
gr:"9. Ποικιλία ορεκτικών για 1 άτομο",
price: 5.2
},

{
type:"complex",

title:{
zh:"10. 包子 （2个）",
en:"10. Bao Bun (2 pcs)",
gr:"10. Bao Bun (2 τμχ.)"
},

options:[
{
zh:"猪肉",
en:"with pork",
gr:"με χοιρινό",
price:7.8
},

{
zh:"牛肉",
en:"with beef",
gr:"με μοσχάρι",
price:9.8
},

{
zh:"水煮金枪鱼",
en:"with boiled tuna",
gr:"με βρασμένος τόνος",
price:9.8
},

{
zh:"炸虾",
en:"with fried shrimps",
gr:"με τηγανητές γαρίδες",
price:9.8
}
]
}


]


},

{
id:"soups",
name:{
zh:"🥣 汤类",
en:"🥣 Soups",
gr:"🥣 Σούπες"
},

items:[
{
zh:"11. 云吞汤",
en:"11. Wonton soup",
gr:"11. Σούπα wonton",
price:4.5
},

{
zh:"12. 酸辣汤",
en:"12. Hot & sour soup",
gr:"12. Ξινή και καυτερή σούπα",
price:4.5
},

{
zh:"13. 鸡肉玉米汤",
en:"13. Chicken corn soup",
gr:"13. Σούπα κοτόπουλο με καλαμπόκι",
price:4.5
},

{
zh:"14. 海鲜汤",
en:"14. Seafood soup",
gr:"14. Θαλασσινή σούπα",
price:5.8
},

{
zh:"15. 鸡肉面条汤",
en:"15. Chicken noodle soup",
gr:"15. Κοτόσουπα με ζυμαρικά",
price:4.5
}
]
},

{
id:"salads",
name:{
zh:"🥗沙拉与🥦蔬菜",
en:"🥗Salads & 🥦vegetables",
gr:"🥗Σαλάτες & 🥦λαχανικά"
},

items:[
{
zh:"21. 酸甜沙拉",
en:"21. Sweet & sour salad",
gr:"21. Γλυκόξινη σαλάτα",
price:4.8
},

{
zh:"22. 蔬菜沙拉",
en:"22. Vegetable salad",
gr:"22. Σαλάτα λαχανικών",
price:4.8
},

{
zh:"23. 虾仁沙拉",
en:"23. Shrimps salad",
gr:"23. Γαριδοσαλάτα",
price:5.8
},

{
zh:"24. 水果沙拉",
en:"24. Fruit salad",
gr:"24. Φρουτοσαλάτα",
price:6.8
},

{
zh:"25. 鸡肉沙拉",
en:"25. Chicken salad",
gr:"25. Κοτοσαλάτα",
price:5.2
},

{
zh:"26. 什锦蔬菜沙拉",
en:"26. Mixed vegetable salad",
gr:"26. Ανάμεικτη σαλάτα λαχανικών",
price:5.2
},

{
zh:"27. 冬菇笋尖沙拉",
en:"27. Chinese mushroom & bamboo salad",
gr:"27. Σαλάτα με κινέζικα μανιτάρια και μπαμπού",
price:5.2
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
en:"Fried rice with chicken",
gr:"Ρύζι με κοτόπουλο",
price:6.8
},

{
zh:"虾炒饭",
en:"Shrimp fried rice",
gr:"Ρύζι με γαρίδες",
price:7.8
}
]
}

]

}
