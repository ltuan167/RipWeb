var stompClient = null;
function connectAndSubscribeWs(gamePIN) {
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({},  () =>  {
        console.log('Connected');
        stompClient.subscribe('/game/'+ gamePIN, (data) => {
            let msg = JSON.parse(data.body);
            console.log("Type: " + msg.type);
            if (msg.type == "NEXT_QUESTION")
                showScreen("playScreen");
        });
    });
    stompClient.onerror = () => {
        console.error(stompClient.statusText);
    };
}