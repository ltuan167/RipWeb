package com.listener;

import org.springframework.context.ApplicationEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.stereotype.Component;
import org.springframework.web.socket.messaging.SessionConnectedEvent;
import org.springframework.web.socket.messaging.SessionSubscribeEvent;

@Component
public class SubscribeEventListener implements ApplicationListener {

	@Override
	public void onApplicationEvent(ApplicationEvent event) {
		if (event instanceof  SessionConnectedEvent) {
			SessionConnectedEvent e = (SessionConnectedEvent)event;
//			String sessionId = e.toString();
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
	}

}
