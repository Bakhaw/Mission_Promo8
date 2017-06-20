var re = /camion/gi;
var rere = /voiture/gi;
var str = "Elle a le camion dans la voiture.";
var nouvelleStr = str.replace(re, "vamion");
var suite = nouvelleStr.replace(rere, "coiture") + "En outre elle se trouve dans la rue du quai";
var rerere = /rue/gi;
var rererere = /quai/gi;
var toBeContinued = suite.replace(rerere, "raie").replace(rererere, "cul");

var relou = /cool/gi;
var rerelou = /salut,/gi;
var chapTrois = "Votre histoire est cool. Allez salut, salut!";
var newChap = chapTrois.replace(relou, "nulle");
var suiteChap = newChap.replace(rerelou, "bye,");


var toBeContinuedUppercase = toBeContinued.toUpperCase();

console.log(toBeContinuedUppercase);
console.log(suiteChap);
