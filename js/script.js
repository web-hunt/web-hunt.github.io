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

// ===========================
// CHERRY BLOSSOMS
// ===========================

const container = document.getElementById("blossoms");

if(container){

    const total = 35;

    for(let i = 0; i < total; i++){

        const flower = document.createElement("div");

        flower.className = "blossom";
        flower.textContent = "🌸";

        flower.style.left = Math.random() * 100 + "vw";

        flower.style.fontSize =
            (16 + Math.random() * 18) + "px";

        flower.style.animationDuration =
            (8 + Math.random() * 8) + "s";

        flower.style.animationDelay =
            Math.random() * 10 + "s";

        container.appendChild(flower);

    }

}
