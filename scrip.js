

$(document.getElementById('body')).mouseup(function (e) {
    var container = $(".div3");
    if (!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
}); 

$(document.querySelector('footer')).mouseup(function (e) {
    var container = $(".div3");
    if (!container.is(e.target) && container.has(e.target).length === 0){
        container.hide();
    }
}); 



const v = document.getElementById('dv3');
const bt = document.getElementById('btt');
 

bt.addEventListener("click", func());

function func(){

    if(v.style.display==="flex"){
        v.style.display="none";
    }
    else if(v.style.display==="none"){
        v.style.display="flex";
    }
    else{
        v.style.display="none"; 
    }
}













