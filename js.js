document.addEventListener("DOMContentLoaded", (event) => {

    document.getElementById("vid").play();

    // this is stupid but it works and I was running OUT OF TIME

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

    document.getElementById("home").addEventListener("click", function () {
        var funLink = document.getElementById("home");
        var funMenu = document.getElementById("homeMenu");
        var giftsPosition = document.getElementById("gifts").getBoundingClientRect();
        homeMenu.style.top = (giftsPosition.top + 30) + "px";
        homeMenu.style.left = (giftsPosition.right - 80) + "px";
        homeMenu.style.display = "block";
        homeMenu.addEventListener("mouseover", function () {
            console.log('mouseover');
            homeMenu.addEventListener("mouseout", function () {
                console.log('mouseout');
                homeMenu.style.display = "none";
            });

        });

    });

    document.getElementById("kitchen").addEventListener("click", function () {
        var funLink = document.getElementById("kitchen");
        var funMenu = document.getElementById("kitchenMenu");
        var giftsPosition = document.getElementById("gifts").getBoundingClientRect();
        kitchenMenu.style.top = (giftsPosition.top + 30) + "px";
        kitchenMenu.style.left = (giftsPosition.right - 80) + "px";
        kitchenMenu.style.display = "block";
        kitchenMenu.addEventListener("mouseover", function () {
            console.log('mouseover');
            kitchenMenu.addEventListener("mouseout", function () {
                console.log('mouseout');
                kitchenMenu.style.display = "none";
            });

        });

    });

    document.getElementById("jewelry").addEventListener("click", function () {
        var funLink = document.getElementById("jewelry");
        var funMenu = document.getElementById("jewelryMenu");
        var giftsPosition = document.getElementById("gifts").getBoundingClientRect();
        jewelryMenu.style.top = (giftsPosition.top + 30) + "px";
        jewelryMenu.style.left = (giftsPosition.right - 80) + "px";
        jewelryMenu.style.display = "block";
        jewelryMenu.addEventListener("mouseover", function () {
            console.log('mouseover');
            jewelryMenu.addEventListener("mouseout", function () {
                console.log('mouseout');
                jewelryMenu.style.display = "none";
            });

        });

    });

    document.getElementById("women").addEventListener("click", function () {
        var funLink = document.getElementById("women");
        var funMenu = document.getElementById("womenMenu");
        var giftsPosition = document.getElementById("gifts").getBoundingClientRect();
        womenMenu.style.top = (giftsPosition.top + 30) + "px";
        womenMenu.style.left = (giftsPosition.right - 80) + "px";
        womenMenu.style.display = "block";
        womenMenu.addEventListener("mouseover", function () {
            console.log('mouseover');
            womenMenu.addEventListener("mouseout", function () {
                console.log('mouseout');
                womenMenu.style.display = "none";
            });

        });

    });

    document.getElementById("men").addEventListener("click", function () {
        var funLink = document.getElementById("men");
        var funMenu = document.getElementById("menMenu");
        var giftsPosition = document.getElementById("gifts").getBoundingClientRect();
        menMenu.style.top = (giftsPosition.top + 30) + "px";
        menMenu.style.left = (giftsPosition.right - 80) + "px";
        menMenu.style.display = "block";
        menMenu.addEventListener("mouseover", function () {
            console.log('mouseover');
            menMenu.addEventListener("mouseout", function () {
                console.log('mouseout');
                menMenu.style.display = "none";
            });

        });

    });

    document.getElementById("kids").addEventListener("click", function () {
        var funLink = document.getElementById("kids");
        var funMenu = document.getElementById("kidsMenu");
        var giftsPosition = document.getElementById("gifts").getBoundingClientRect();
        kidsMenu.style.top = (giftsPosition.top + 30) + "px";
        kidsMenu.style.left = (giftsPosition.right - 80) + "px";
        kidsMenu.style.display = "block";
        kidsMenu.addEventListener("mouseover", function () {
            console.log('mouseover');
            kidsMenu.addEventListener("mouseout", function () {
                console.log('mouseout');
                kidsMenu.style.display = "none";
            });

        });

    });

    document.getElementById("featured").addEventListener("click", function () {
        var funLink = document.getElementById("featured");
        var funMenu = document.getElementById("featuredMenu");
        var giftsPosition = document.getElementById("gifts").getBoundingClientRect();
        featuredMenu.style.top = (giftsPosition.top + 30) + "px";
        featuredMenu.style.left = (giftsPosition.right - 80) + "px";
        featuredMenu.style.display = "block";
        featuredMenu.addEventListener("mouseover", function () {
            console.log('mouseover');
            featuredMenu.addEventListener("mouseout", function () {
                console.log('mouseout');
                featuredMenu.style.display = "none";
            });

        });

    });

});