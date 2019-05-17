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
			System.out.println(String.format("[WS][NEW CONNECTION]: %s", e)); // SessionID
		}
		if (event instanceof  SessionSubscribeEvent) {
			SessionSubscribeEvent e = (SessionSubscribeEvent)event;
			StompHeaderAccessor headerAccessor = StompHeaderAccessor.wrap(e.getMessage());
			String subscribedTopic = StompHeaderAccessor.wrap(e.getMessage()).getDestination(); //GET SUBSCRIBE TOPIC
			String sessionId = headerAccessor.getSessionAttributes().get("sessionId").toString();
			System.out.println(String.format("[WS][SESSIONID=%s] SUBSCRIBED [%s]", sessionId, subscribedTopic));
		}
	}

}
