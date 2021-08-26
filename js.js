document.addEventListener("DOMContentLoaded", (event) => {

    // yes this is janky whoops
    // :`)

    document.getElementById("gifts").addEventListener("click", function () {

        var giftsLink = document.getElementById("gifts");

        var giftsMenu = document.getElementById("giftsMenu");

        var giftsPosition = document.getElementById("gifts").getBoundingClientRect();

        giftsMenu.style.top = (giftsPosition.top + 30) + "px";

        giftsMenu.style.left = (giftsPosition.right - 80) + "px";

        giftsMenu.style.display = "block";

        giftsMenu.addEventListener("mouseover", function () {

            console.log('mouseover');

            giftsMenu.addEventListener("mouseout", function () {

                console.log('mouseout');

                giftsMenu.style.display = "none";

            });

        });

    });

});