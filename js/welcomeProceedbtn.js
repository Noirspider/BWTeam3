function handleSubmit(e) {
    e.preventDefault();
    checkTheFlag();
}

let checkBox = document.querySelector("form div input");

function redirect() {
    window.location.href = "../PaginaDomande.html"
}

function checkTheFlag (){
    if(checkBox.checked){
        document.getElementById("welcomeProceedBtn").onclick(redirect())
    } else {
        alert("Spunta la checkbox prima di continuare")
    }
}
 

window.onload= function(){
    let form = document.querySelector("form");
    form.addEventListener("submit", handleSubmit);
}