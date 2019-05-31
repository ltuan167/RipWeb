var stompClient = null;
function connectAndSubscribeWs(gamePIN) {
    var socket = new SockJS('/ws');
    stompClient = Stomp.over(socket);
    stompClient.connect({},  () =>  {
        console.log('Connected');
        stompClient.subscribe('/game/'+ gamePIN, (data) => {
            let msg = JSON.parse(data.body);
            console.log(msg.content);
            if (msg.content == "next_question")
                showScreen("playScreen");
        });
    });
    stompClient.onerror = () => {
        console.error(stompClient.statusText);
    };
}