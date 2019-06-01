function hostStart() {
    var hostPin = document.getElementById('hostpin').value;
    var xhttp = new XMLHttpRequest();
    xhttp.open("POST","http://localhost/1.0/game/start?gamePIN=" + hostPin, true);
    xhttp.onreadystatechange =  () => {
        console.log(xhttp.response);
    };
    xhttp.send();
    xhttp.onerror =  (e) => {
        console.error(xhttp.statusText);
    }
}

function showQuestion() {

}