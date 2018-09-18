const a = 8;
if (a < 6) {
    console.log("onvoldoende");// a kleiner dan 6 geeft een onvoldoende in de log
}
else if (a >= 6 && a < 7) {
    console.log("voldoende");// a groter of gelijk aan 6 en kleiner dan 7 geeft een voldoende in de log
}
else if (a >= 7 && a < 9) {
    console.log("goed");     // a groter of gelijk aan 7 en kleiner dan 9 geeft een voldoende in de log
}
else if (a >= 9) {
    console.log("uitmuntend"); // a groter of gelijk aan 9 geeft een uitmuntend in de log
}


const b = 6;
switch (true) {
    case (b < 6):
        console.log("onvoldoende");// a kleiner dan 6 geeft een onvoldoende in de log
        break;
    case (b >= 6 && b < 7):
        console.log("voldoende");// a groter of gelijk aan 6 en kleiner dan 7 geeft een voldoende in de log
        break;
    case (b >= 7 && b < 9):
        console.log("goed");     // a groter of gelijk aan 7 en kleiner dan 9 geeft een voldoende in de log
        break;
    case (b >= 9):
        console.log("uitmuntend"); // a groter of gelijk aan 9 geeft een uitmuntend in de log
        
}

purchasedBook = true;
job = "teacher";
inTrain = true;

if (purchasedBook == true && job == "teacher" && inTrain == true){
  console.log("‘finally i can enjoy my book!’.");
}
else if (purchasedBook == false || job != "teacher" || inTrain == false){
  console.log ("i wont have time to read today");
}