

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





var button = document.getElementById('rights');
button.onclick = function () {
    var container = document.getElementById('dgnotes');
    sideScroll(container,'right',15,200,10);
};

var back = document.getElementById('lefts');
back.onclick = function () {
    var container = document.getElementById('dgnotes');
    sideScroll(container,'left',15,200,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}




var button1 = document.getElementById('rights1');
button1.onclick = function () {
    var container = document.getElementById('oncourses');
    sideScroll(container,'right',15,200,10);
};

var back1 = document.getElementById('lefts1');
back1.onclick = function () {
    var container = document.getElementById('oncourses');
    sideScroll(container,'left',15,200,10);
};

function sideScroll(element,direction,speed,distance,step){
    scrollAmount = 0;
    var slideTimer = setInterval(function(){
        if(direction == 'left'){
            element.scrollLeft -= step;
        } else {
            element.scrollLeft += step;
        }
        scrollAmount += step;
        if(scrollAmount >= distance){
            window.clearInterval(slideTimer);
        }
    }, speed);
}














