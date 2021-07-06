// menu toggle
var menuItems = document.getElementById("menuItems");
menuItems.style.maxHeight = "0px";
function menutoggle(){
    if(menuItems.style.maxHeight=="0px"){
        menuItems.style.maxHeight ="700px"
    }
    else{
        menuItems.style.maxHeight="0px";
    }
};
