var dot = "html";
var page = window.location.href.split("/").pop();
page = page.replace(".html", "");
document.title = "エラー - " + page;
$(function(){
    $(".url").text(window.location.href);
   });