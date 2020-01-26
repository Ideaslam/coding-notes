

//db.tableTest.find().pretty();
//db.tableTest.find({"by":"tutorials point"}).pretty();
//db.tableTest.find({"likes":{$lt:50}}).pretty();
//.tableTest.find({"likes":{$gte:100}}).pretty();
//db.tableTest.find({"likes":{$lt:50},"by":"tutorials point"}).pretty(); // and 
//db.tableTest.find({$and:[{"likes":{$lt:50}},{"by":"tutorials point"}]}).pretty(); // and 
//db.tableTest.find({$and:[{"title":{$ne:"isal"}  },  {$or:[{"likes":{$gte:50}},{"by":{$ne:"islan"}}]  }]}).pretty();
 
 
  // db.tableTest.update({"title":"NOSQL DATABASE"},{$set:{"title":"New NoSQL Title"}});
    // db.tableTest.update({"title":"NOSQL DATABASE"},{$set:{"title":"New NoSQL Title"}},{multi:true});

// db.tableTest.find().pretty();
 
// db.tableTest.update({"likes":{$gte:50}} , {$set:{"likes":200}},{multi:true});
//  db.tableTest.save({"likes":{$gte:50}  , {"":""});
//db.tableTest.remove({"likes":200});

 // projection
 
// db.tableTest.insert([
//    {
//    "ID":"tala" ,"name_En":"Tala Castle" ,"name_Ar":"قصور تالا" , "sort":"1",
//    "details_En":"At  Tala  district in Riyadh city, the company implemented a palace on a total area of 3442 square meters. <br> <br> The company also established a residential villa with full implementation area of 1933 square meters ", 
//    "details_Ar":"بحي تالا في مدينة الرياض، نفذت الشركة قصر سكني علـــى إجمالـــي مســـطحات  متـــر مربـــع 3442  .<br><br> كما أنشأت الشركة فلة سكنية بنفيذ كامل بمساحة 1933 متـــر  مربع", 
//    "cost":" ",
//    "size":"",
//    "owner_En":"ٍSawaii Company",
//    "owner_Ar":"شركة سواعي",
//    "finish":"",
//    "count":"",
//    "img":["images/projects/tala-1-390-250.png",
//    "images/projects/tala/tala-11-1920-800.png",
//    "images/projects/tala/tala-22-1920-800.png",
//    "images/projects/tala/tala-33-1920-800.png",
//    "images/projects/tala/tala-44-1920-800.png"
//    ]
//      ,
//     "mainImg":"images/projects/tala-2-370-256.png"
//
//},
//    {"ID":"deyafa" ,"name_En":"Guest rooms" ,"name_Ar":"قاعات الضيافة","sort":"2",
//    "details_En":"The Company did the project's establishment and full implementation of high-level guest rooms on an area of 422 square meters", 
//    "details_Ar":"قامت الشركة بإنشاء وتنفيذ بالكامـــل  قاعـــات ضيافـــة عاليـــة المســـتوى علـــى مســـاحة  .4250متـــر مربع في إمتـــداد شـــارع التخصصـــي بمدينـــة الريـــاض", 
//    "cost":"4,500,340",
//    "size":"4250",
//    "owner_En":" شركة أجوان الخليج  ",
//    "owner_Ar":" شركة أجوان الخليج",
//    "finish":"100 %",
//    "count":"",
//     "img":["images/projects/deyafa-1-390-250.png",
//    "images/projects/deyafa/deyafa-11-1920-800.png",
//    "images/projects/deyafa/deyafa-22-1920-800.png",
//    "images/projects/deyafa/deyafa-33-1920-800.png",
//    "images/projects/deyafa/deyafa-44-1920-800.png"
//    ],
//     "mainImg":"images/projects/deyafa-2-370-464.png"
//    },
//
//    {"ID":"yasmine" ,"name_En":"Yasmine Villas" ,"name_Ar":"فلل الياسمين " ,"sort":"3",
//    "details_En":"In this project, we have established and implemented a residential complex consisting of 30 villas between duplexes and divided, with a total area of 20100 square meters and an average of 670 square meters in Jasmine district in Riyadh", 
//    "details_Ar":"عقدنـــا بهـــذا المشـــروع إنشـــاء وتنفيـــذ مجمـــع ســـكني مكـــون مـــن ثلاثـــون فيلا ســـكنية مـــا بيـــن دوبلكـــس  ومفصول علـــى إجمالـــي مســـطحات  20100متـــر مربـــع، وللفيلا الواحـــدة بمتوسط  670 متر مربع بحي الياسمين بمدينة الرياض", 
//    "cost":"34,730,014",
//    "size":"20100",
//    "owner_En":"ٍSawaii Company",
//    "owner_Ar":"سواعى التعمير للمقاولات",
//    "finish":"100 %",
//    "count":"30",
//    "img":["images/projects/yasmine-1-390-250.png",
//    "images/projects/yasmine/yasmine-11-1920-800.png",
//    "images/projects/yasmine/yasmine-22-1920-800.png",
//    "images/projects/yasmine/yasmine-33-1920-800.png"
//    ],
//     "mainImg":"images/projects/yasmine-2-370-256.png"
//    },
//    {"ID":"qadsia" ,"name_En":"Qadsia Villas" ,"name_Ar":"فلل القادسية" ,"sort":"4",
//    "details_En":"In this project we have established and implemented a residential complex consisting of 18 residential units on a total of 14,760 square meters, an average of 820 villas per one, in Qadisia district in Riyadh", 
//    "details_Ar":"عقدنـــا بهـــذا المشـــروع إنشـــاء وتنفيـــذ مجمـــع ســـكني مكـــون مـــن 18  ســـكنية علـــى إجمالـــي   14760 متـــر  مربع، بمتوسط 820 للفيلا الواحـــدة، بحي القاديسية في مدينة الرياض", 
//    "cost":"25,416,300",
//    "size":"14760",
//    "owner_En":"ٍSawaii Company",
//    "owner_Ar":"سواعى التعمير للمقاولات",
//    "finish":"100 %",
//    "count":"18",
//    "img":["images/projects/qadsia-1-390-250.png",
//    "images/projects/qadsia/qadsia-11-1920-800.png",
//    "images/projects/qadsia/qadsia-22-1920-800.png"
//    ],
//     "mainImg":"images/projects/qadsia-2-370-464.png"
//},
//    {"ID":"nada" ,"name_En":"Nada Villas" ,"name_Ar":"فلل الندى" ,"sort":"5",
//    "details_En":"In this project we have established and implemented a residential complex consisting of 8 villas on a total area of 62400 square meters in Al Nada district in Riyadh city.", 
//    "details_Ar":"عقدنـــا بهـــذا المشـــروع إنشـــاء وتنفيـــذ مجمـــع ســـكني مكـــون مـــن 8 فيلـــل ســـكنية علـــى إجمالـــي مســـطحات 62400 متـــر مربـــع في حي الندى بمدينة الرياض.", 
//    "cost":"18,890,100",
//    "size":"6240",
//    "owner_En":"ٍSawaii Company",
//    "owner_Ar":"سواعى التعمير للمقاولات",
//    "finish":"100 %",
//    "count":"8",
//    "img":["images/projects/nada-1-390-250.png",
//    "images/projects/nada/nada-11-1920-800.png",
//    "images/projects/nada/nada-22-1920-800.png",
//    "images/projects/nada/nada-33-1920-800.png"
//    ],
//     "mainImg":"images/projects/nada-2-370-464.png"
//    },
//    {"ID":"farm" ,"name_En":"Amariyah Farm" ,"name_Ar":"مزرعة العمارية" ,"sort":"6",
//    "details_En":"In Al-Aynah area in Riyadh city, the company has developed and rehabilitated a farm with a total area of 17000 square meters", 
//    "details_Ar":"في منطقة العيينة بمدينة الرياض، قامت الشركة بمشروع تطويـــر وتأهيـــل مزرعـــة علـــى إجمالـــي مســـاحة الأرض 17000متـــر مربـــع", 
//    "cost":"3,616,700",
//    "size":"17000",
//    "owner_En":"ٍفهد بن سلمان الفاضل",
//    "owner_Ar":"فهد بن سلمان الفاضل",
//    "finish":"100 %",
//    "count":"",
//    "img":["images/projects/farm-1-390-250.png",
//    "images/projects/farm/farm-11-1920-800.png",
//    "images/projects/farm/farm-22-1920-800.png",
//    "images/projects/farm/farm-33-1920-800.png",
//    "images/projects/farm/farm-44-1920-800.png"
//    ],
//     "mainImg":"images/projects/farm-2-370-256.png"
//     }
//     ,
//    {"ID":"narsis" ,"name_En":"Narsis Tower" ,"name_Ar":"برج فندق نارسيس" ,"sort":"7",
//    "details_En":"Our contract with this project is the implementation of exterior cladding works by expanding the Narciss Hotel in Al-Olaya district in Riyadh. <br><br>The area of the project works, which assigned the company 3000 square meters out of 10,000 square meters of the project's location.", 
//    "details_Ar":"عقدنـــا بهـــذا المشـــروع هـــو تنفيـــذ أعمـــال تكســـية الواجهـــات الخارجيـــه بتوســـعة فنـــدق نارســـيس في حي العليا بمدينة الرياض وكانـــت  مســـاحة أعمـــال المشـــروع التـــي أوكلـــت للشـــركة  3آلاف متر مربـــع، من أصل10 ألف متـــر مربـــع مـــن أصـــل مكان المشروع", 
//    "cost":"4,210,900",
//    "size":"3251",
//    "owner_En":"ٍSawaii Company",
//    "owner_Ar":"شركة سواعي",
//    "finish":"100 %",
//    "count":"",
//    "img":["images/projects/Narsis-1-390-250.png",
//     "images/projects/narsis/narsis-11-1920-800.png"
//     ],
//     "mainImg":"images/projects/qadsia-2-370-256.png"
//    }
//,
//
//    {"ID":"Widyan" ,"name_En":"AlWidyan Company Project" ,"name_Ar":"مشروع شركة الوديان" ,"sort":"8",
//        "details_En":"We worked in the infrastructure works and Landscape of the development of  Al Wedian  project, in the road of Salbukh in Riyadh against the western entrance of the Special Security Forces, with a total area of 14 kilometers", 
//        "details_Ar":"عقدنـــا بهـــذا المشـــروع جـــزء مـــن أعمـــال البنية التحتية وأعمال اللاند سكيب،  بمشـــروع تطويـــر الوديـــان في طريـــق صلبـــوخ بمدينـــة الريـــاض مقابـــل المدخـــل الغربـــي لقـــوات الأمـــن الخاصـــة، 14بإجمالـــى مســـاحة تقـــدر بـ14 كيلو متر", 
//        "cost":"53,940,680",
//        "size":"14000",
//        "owner_En":"ٍSawaii Company",
//        "owner_Ar":"الشركه العقاريه السعوديه ",
//        "finish":"60 %",
//        "count":"",
//        "img":["images/projects/Narsis-1-390-250.png",
//         "images/projects/widyan/widyan-11-1920-800.png",
//         "images/projects/widyan/widyan-22-1920-800.png",
//         "images/projects/widyan/widyan-33-1920-800.png",
//         "images/projects/widyan/widyan-44-1920-800.png"
//        ],
//         "mainImg":"images/projects/qadsia-2-370-256.png"
//    }
//
//    ,
//    {"ID":"other" ,"name_En":"Other Projects" ,"name_Ar":"مشاريع أخرى" , "sort":"9",
//        "details_En":"Our pre-design solutions include analysis and planning ", 
//        "details_Ar":"أعمال مشتركة مع شركات أخرى", 
//        "cost":"1,236,582",
//        "size":"6000",
//        "owner_En":"ٍSawaii Company",
//        "owner_Ar":"شركة سواعي",
//        "finish":"100 %",
//        "count":"18",
//        "img":["images/projects/other-33-1920-800.png",
//         "images/projects/other/other-11-1920-800.png",
//         "images/projects/other/other-22-1920-800.png",
//         "images/projects/other/other-33-1920-800.png"
//         
//        ],
//         "mainImg":"images/projects/qadsia-2-370-256.png"
//    }
//    
//])
// 



 //  db.tableTest.find().pretty();
//db.tableTest.find({"ID":{$ne:"tala"}},{"ID":1,_id:0}).pretty();
//db.tableTest.find({},{"ID":1,_id:0}).limit(1).skip(3).pretty();
 
 
// db.tableTest.aggregate([{$group:{_id:"$owner_En",project_did:{$sum:1}}}])
 //  db.tableTest.findOne({"ID":"tala"},{"img":1} );
  // db.tableTest.find(  {"img":db.tableTest.findOne({"ID":"tala"},{"img":1} )["img"]}).pretty();
   
   
   
   
   //db.tableTest.find({} ,{ID:1,_id:0,img:[1]}).pretty();

db.users.find({"hobby.sports":"FootBall"},{"hobby.sports":1}).pretty();












