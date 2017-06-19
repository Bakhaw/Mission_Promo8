var re = /choix/gi;
var rere = /date/gi;
var str = "Elle a le choix dans la date. ";
var nouvelleStr = str.replace(re, "doigt");
var suite = nouvelleStr.replace(rere, "chatte") + "En outre elle se trouve dans la rue du quai";
var rerere = /rue/gi;
var rererere = /quai/gi;
var toBeContinued = suite.replace(rerere, "raie").replace(rererere, "cul")
toBeContinued
