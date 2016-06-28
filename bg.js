/*
App Details
================
Name: TutorialsPoint_Easy_Read
Desciption: Read tutorials from TutorialsPoint easily.

Author Details
================
Name: Ahmedur Rahman Shovon
Website: http://datamate.ws/ 
Github: https://github.com/arsho
*/
var s = document.createElement('script');
// TODO: add "app_script.js" to web_accessible_resources in manifest.json
s.src = chrome.extension.getURL('app_script.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);