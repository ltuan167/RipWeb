package com.listener;

import com.model.ChatMessage;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.EventListener;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.simp.stomp.StompHeaders;
import org.springframework.messaging.simp.stomp.StompSession;
import org.springframework.messaging.support.GenericMessage;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionDisconnectEvent;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;

@Component
public class SubscribeEventListener implements ApplicationListener {

	@Override
	public void onApplicationEvent(ApplicationEvent event) {
		if (event instanceof  SessionConnectedEvent) {
			SessionConnectedEvent e = (SessionConnectedEvent)event;
//			String sessionId = e.toString();
//
//			String attributes = (String)((GenericMessage)e.getMessage().getHeaders().get("simpConnectMessage")).getHeaders().get("simpSessionAttributes");
//			attributes.substring(attributes.indexOf("="))
//			String version = headerAccessor.getAck();
			System.out.println(String.format("[CONNECTED] SessionID: %s","")); // SessionID
		}
		if (event instanceof  SessionSubscribeEvent) {
			SessionSubscribeEvent e = (SessionSubscribeEvent)event;
//			System.out.println(StompHeaderAccessor.wrap(e.getMessage()).getDestination()); //GET SUBSCRIBE TOPIC
			StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(e.getMessage());
			System.out.println(headerAccessor.getSessionAttributes().get("sessionId").toString() + " CONNECTED!");
		}

//		{simpMessageType=CONNECT_ACK
//				, simpConnectMessage=GenericMessage [payload=byte[0], headers={simpMessageType=CONNECT, stompCommand=CONNECT, nativeHeaders={accept-version=[1.1,1.0], heart-beat=[10000,10000]}, simpSessionAttributes={sessionId=BF73C09AB17B64EC27537E2271863905}, simpHeartbeat=[J@78f4c962, simpSessionId=aefmmlp4}]
//			    , simpSessionId=aefmmlp4}

	}
}
