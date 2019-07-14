function invertColors() {
    var theButton = document.getElementById("invertedmode");
    var chapters = document.querySelectorAll("h1");
    var elements = document.getElementsByClassName("main");

    if (theButton.innerHTML == 'My eyes hurt!' || theButton.innerHTML == 'Ok go back' ) {
        var en_ = true;
    }
    else {
        var en_ = false;
    }

    if (theButton.innerHTML == "My eyes hurt!" || theButton.innerHTML == "Aïe mes yeux!") {
        document.body.style.backgroundColor = 'black';

        for (var i = 0; i < chapters.length; i++) {
            chapters[i].style.color = 'white';
        }

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = '#bababa';
        }

        theButton.style.backgroundColor = "grey";
        theButton.style.color = 'white';
        if (en_) {
            theButton.innerHTML = "Ok go back";
        }
        else {
            theButton.innerHTML = "Ok retourne au normal";
        }

        try {
            document.getElementById("shitpost").setAttribute("class", "shitpostB")
        } catch (e) {}

        try {
            var icons = document.getElementById("platforms").getElementsByTagName('svg');
            for (var i = 0; i < icons.length; i++) {
                icons[i].setAttribute("fill", "#91120f")
            }
            eva.replace()

        } catch (e) {}


    } else {
        document.body.style.backgroundColor = 'white';

        for (var i = 0; i < chapters.length; i++) {
            chapters[i].style.color = 'black';
        }

        for (var i = 0; i < elements.length; i++) {
            elements[i].style.color = '#454545';
        }

        theButton.style.backgroundColor = "";
        theButton.style.color = 'black';

        if (en_) {
            theButton.innerHTML = "My eyes hurt!";
        }
        else {
            theButton.innerHTML = "Aïe mes yeux!";
        }

        try {
            document.getElementById("shitpost").setAttribute("class", "shitpostW")
        } catch (e) {}

                try {
            var icons = document.getElementById("platforms").getElementsByTagName('svg');
            for (var i = 0; i < icons.length; i++) {
                icons[i].setAttribute("fill", "#000000")
            }
            eva.replace()

        } catch (e) {}


    }
}