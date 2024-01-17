
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




const toggle = document.getElementById('toggleDark');
const body = document.getElementById('body');

toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');

    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }

    else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})


const toggles = document.getElementById('toggleDark1');

toggles.addEventListener('click', function(){
    this.classList.toggle('bi-moon');

    if(this.classList.toggle('bi-brightness-high-fill')){
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }

    else{
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s';
    }
})





