
function bgChanger() {
    
    var label = document.getElementById("label1");
    const tema = document.body.classList.toggle('dark');

    if (tema) {
        label.innerHTML='<i class="fas fa-sun"></i>'
        
    } else{
        label.innerHTML='<i class="fas fa-moon"></i>'
    }

}
function cardChanger() {
    var card = document.querySelectorAll(".card");
    console.log(card);
    card.classList.toggle('cards-expand');
    
    

    

}