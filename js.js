document.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("vid").play();

    // yes this is janky whoops
    // :`)
    // the box animation/video only plays in chrome not firefox it's some kind of firefox thing??

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

    document.getElementById("fun").addEventListener("click", function () {
        var funLink = document.getElementById("fun");
        var funMenu = document.getElementById("funMenu");
        var giftsPosition = document.getElementById("gifts").getBoundingClientRect();
        funMenu.style.top = (giftsPosition.top + 30) + "px";
        funMenu.style.left = (giftsPosition.right - 80) + "px";
        funMenu.style.display = "block";
        funMenu.addEventListener("mouseover", function () {
            console.log('mouseover');
            funMenu.addEventListener("mouseout", function () {
                console.log('mouseout');
                funMenu.style.display = "none";
            });

        });

    });

});