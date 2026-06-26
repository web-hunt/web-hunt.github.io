const search = document.getElementById("search");

search.addEventListener("keyup", function () {

    const value = search.value.toLowerCase();

    document.querySelectorAll(".grid .card").forEach(function (card) {

        if (card.innerText.toLowerCase().includes(value)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});
