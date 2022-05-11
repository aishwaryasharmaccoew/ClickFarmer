window.addEventListener('load', function () {
    updateClickLabels();
})


function colorClicked(color) {

    console.log("color clicked", color);
    var xhttp = new XMLHttpRequest();

    xhttp.open("PUT", "/api/clicks/" + color, true);
    xhttp.send();


    updateClickLabels();

}

function transformDiv(color, number) {

    if (number < 16) {
        const tran = document.querySelector(".color-button-" + color);

        if (number == 1)
            number = 11
        else if (number == 2)
            number = 13
        else
            number = (number * 0.5) * 10
        console.log('number:', number)
        tran.style.transform = "scale(" + 1 + "." + number + ")";
    }
    else if (number >= 16) {
        const tran = document.querySelector(".color-button-" + color);
        tran.style.transform = "scale(1.8)";
    }
}


function updateClickLabels() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var response = JSON.parse(this.responseText);
            document.getElementById("color-label-red").innerHTML = "red: " + response.redClicks
            transformDiv('red', response.redClicks)
            document.getElementById("color-label-green").innerHTML = "green: " + response.greenClicks
            transformDiv('green', response.greenClicks)
            document.getElementById("color-label-blue").innerHTML = "blue: " + response.blueClicks
            transformDiv('blue', response.blueClicks)

        }
    };
    xhttp.open("GET", "/api/clicks", true);
    xhttp.send();
}

