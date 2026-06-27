// ===========================
// SEARCH
// ===========================

const search = document.getElementById("search");

if(search){

    search.addEventListener("keyup", function(){

        const value = search.value.toLowerCase();

        document.querySelectorAll(".grid .card").forEach(function(card){

            if(card.innerText.toLowerCase().includes(value)){
                card.style.display = "";
            }else{
                card.style.display = "none";
            }

        });

    });

}

