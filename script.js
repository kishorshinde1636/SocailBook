let settingMenu=document.querySelector(".setting_menu");

function settingMenuToggle(){
 settingMenu.classList.toggle("setting_menu_height")
}


let darkBtn=document.getElementById("dark_btn");

darkBtn.onclick=function(){
    darkBtn.classList.toggle("dark_btn_on");
    document.body.classList.toggle("dark_theme");

    if(localStorage.getItem("theme") == "light")
    {
        localStorage.setItem("theme", "dark");
    }
    else{
        localStorage.setItem("theme", "light");
    }
}

if(localStorage.getItem("theme") == "light")
{
    darkBtn.classList.remove("dark_btn_on");
    document.body.classList.remove("dark_theme");
}
else if(localStorage.getItem("theme") == "dark")
{
    darkBtn.classList.add("dark_btn_on");
    document.body.classList.add("dark_theme");
}
else{
    localStorage.setItem("theme", "light");
}

