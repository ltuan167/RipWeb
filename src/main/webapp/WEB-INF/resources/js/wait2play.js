var stompClient = null;

function connect() {
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    var gamePin = document.getElementById("inputGamePin").value;
    stompClient.connect({}, function () {
        console.log('Connected');
        stompClient.subscribe('/1.0/game/'   + gamePin, function () {
            console.log("Some call back function ???? ");
        });
    });
    stompClient.onerror = function () {
        console.error(stompClient.statusText);
    };
}