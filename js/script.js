document.addEventListener("DOMContentLoaded", function(event) 
{ 
    let chbx = document.getElementById("checkbox-menu");
    let hideMenu = document.getElementById("hide-menu");
    chbx.onchange = function(){
       console.log(document.body.clientWidth);
     if (chbx.checked && document.body.clientWidth <= 765)
     {
        hideMenu.style.height = "400px";
        hideMenu.style.padding = "10px";
        hideMenu.style.visibility = "visible";
     } else {
        hideMenu.style.height = "0";
        hideMenu.style.padding = "0";
        hideMenu.style.visibility = "hidden";
     }
    };
    
});

