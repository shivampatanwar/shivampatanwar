

const body = document.getElementById('body');


const toggles = document.getElementById('toggleDark1');

let darkMode = localStorage.getItem("darkMode");

if (darkMode == "true") {
    addDarkMode();
}

toggles.addEventListener('click', function(){

    this.classList.toggle('bi-moon');

    darkMode = localStorage.getItem("darkMode");
    if (darkMode == "true") {
        removeDarkMode();
    } else {
        addDarkMode();
    }
})


function addDarkMode() {
    darkMode = localStorage.setItem("darkMode", "true");
    document.getElementsByTagName("body")[0].classList.add("darkMode");
    
   
  }
  
  function removeDarkMode() {
    darkMode = localStorage.setItem("darkMode", "false");
    document.getElementsByTagName("body")[0].classList.remove("darkMode");
  }



  
const toggles1 = document.getElementById('toggleDark');


toggles1.addEventListener('click', function(){

    this.classList.toggle('bi-moon');

    darkMode = localStorage.getItem("darkMode");
    if (darkMode == "true") {
        removeDarkMode1();
    } else {
        addDarkMode1();
    }
})


function addDarkMode1() {
    darkMode = localStorage.setItem("darkMode", "true");
    document.getElementsByTagName("body")[0].classList.add("darkMode");
    
   
  }
  
  function removeDarkMode1() {
    darkMode = localStorage.setItem("darkMode", "false");
    document.getElementsByTagName("body")[0].classList.remove("darkMode");
  }
