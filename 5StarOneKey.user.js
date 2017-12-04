// ==UserScript==
// @name         5 Star One Key
// @version      0.25.1
// @description  Give five star with single click
// @updateURL    https://github.com/xifanu/MakeOPRGreatAgain/raw/master/5StarOneKey.user.js
// @downloadURL  https://github.com/xifanu/MakeOPRGreatAgain/raw/master/5StarOneKey.user.js
// @author       jqqqqqqqqqq(modify by xifanu)
// @match        https://opr.ingress.com/recon
// @grant        none
// ==/UserScript==


var buttons = [
	{button:"Five Star", total:5, name:5, history:5, unique:5, location:5, safety:5},
	{button:"553355", total:5, name:5, history:3, unique:3, location:5, safety:5},
        {button:"551155", total:5, name:5, history:1, unique:1, location:5, safety:5},
        {button:"552255", total:5, name:5, history:2, unique:2, location:5, safety:5},
        {button:"552155", total:5, name:5, history:2, unique:1, location:5, safety:5},
        {button:"551255", total:5, name:5, history:1, unique:2, location:5, safety:5},
	{button:"551355", total:5, name:5, history:1, unique:3, location:5, safety:5},
];

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////DO NOT EDIT THIS LINE BELOW!
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


function rate_portal(total, name, history, unique, location, safety) {
    document.querySelector("#AnswersController > form > div:nth-child(1) > div:nth-child(1) > div.btn-group > button:nth-child(" + total + ")").click();
    document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center.hidden-xs > div > div:nth-child(5) > button:nth-child(" + name + ")").click();
    document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center.hidden-xs > div > div:nth-child(10) > button:nth-child(" + history + ")").click();
    document.querySelector("#AnswersController > form > div:nth-child(1) > div.col-xs-12.col-sm-4.pull-right.text-center.hidden-xs > div > div:nth-child(15) > button:nth-child(" + unique + ")").click();
    document.querySelector("#AnswersController > form > div:nth-child(2) > div.col-xs-12.col-sm-6.text-center.col-sm-pull-6 > div:nth-child(6) > button:nth-child(" + location + ")").click();
    document.querySelector("#AnswersController > form > div:nth-child(2) > div.col-xs-12.col-sm-6.text-center.col-sm-pull-6 > div:nth-child(11) > button:nth-child(" + safety + ")").click();

}

function add_button() {
    var button_region = document.getElementById("submitDiv");
    var button_subm = document.getElementsByClassName("button big-submit-button");
    var i = 0;
    buttons.forEach(function(button_data) {
       if (i%4==0) {
           var br = document.createElement("br");
           button_region.appendChild(br);
       }
        i++;
        var button = document.createElement("button");
        var textnode = document.createTextNode(button_data["button"]);
        button.className = "button big-submit-button";
        button.appendChild(textnode);
        button_region.appendChild(button);
        button.onclick = function(){rate_portal(button_data["total"], button_data["name"], button_data["history"], button_data["unique"], button_data["location"], button_data["safety"]);};
    });
    button_region.appendChild(button_subm[0]);
}


(function() {
    add_button();
})();

