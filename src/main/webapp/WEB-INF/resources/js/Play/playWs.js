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
                questionid = msg.content;
                showScreen("playScreen");
            if (msg.type == "END_GAME")
                showScreen("endScreen");
            if (msg.type == "END_QUESTION")
                showScreen("waitNextScreen")
        });
    });
    stompClient.onerror = () => {
        console.error(stompClient.statusText);
    };
}