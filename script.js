document.querySelector("form").addEventListener("submit", function(event) {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    
    if (nome.trim() === "" || !email.includes("@")) {
        alert("Preencha corretamente o nome e e-mail.");
        event.preventDefault();
    }
});

document.querySelector("button").addEventListener("mouseover", function() {
    this.style.backgroundColor = "#008CBA";
});