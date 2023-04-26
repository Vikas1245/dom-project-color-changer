let btn = document.getElementById("button");

const rendamColor= () => {
    var num ="0123456789ABCDEF";
    var cont = "#";
    for(var i=0; i<6; i++){
        cont = cont+ num[Math.floor(Math.random()*16)];
    }
    return cont;
}

function rendamColorChanger  () {
    document.body.style.background = rendamColor();
}

btn.addEventListener("click" ,rendamColorChanger);