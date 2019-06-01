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

function hostCreatGame() {
    let hostQuesId = document.getElementById("hostQuesId").value;
    for (var i=0; i<5; i++)
        postRest("http://localhost/1.0/game/create?questionCollectionId="+hostQuesId, null);
}


function postRest(url, jsonData) {
    var jqxhr = $.post(url ,jsonData, (data) => {
        // alert("success: " + JSON.stringify(data));
        console.log(JSON.stringify(data));
    })
        .done((data) => {
            // alert("second success");
        })
        .fail(() => {
            console.log("Error: " + url);
            // alert("error");
        })
        .always(() => {
            // alert("finished");
        });

    // Perform other work here ...
    // Set another completion function for the request above
    // jqxhr.always(function() {
    //     alert( "second finished" );
    // });
}