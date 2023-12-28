
const v = document.getElementById('dv2');
const bt = document.getElementById('btt');

bt.addEventListener("click", func);

function func(){

    if(v.style.display=="flex"){
        v.style.display="none";
    }
    else if(v.style.display=="none"){
        v.style.display="flex";
    }
    else{
        v.style.display="none";
    }
}




const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("dark")
})