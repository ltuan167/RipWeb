package com.controller;

import com.model.Greeting;
import com.model.HelloMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.MessageHeaders;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.messaging.simp.SimpMessageType;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class MessageController {

	@Autowired
	public SimpMessageSendingOperations messagingTemplate;

	@MessageMapping("/hello")
//	@SendTo("/topic/greetings")
	public Greeting greeting(HelloMessage message, SimpMessageHeaderAccessor headerAccessor) throws Exception {
//		String sessionId = headerAccessor.getSessionAttributes().get("sessionId").toString();
		String sessionId = headerAccessor.getSessionId();
//		headerAccessor.getSessionAttributes()
//		String sessionId = headerAccessor.getSessionId();
		System.out.println(sessionId + ": " + message.getName());
		Greeting greeting = new Greeting("Hellooooooo, " + HtmlUtils.htmlEscape(message.getName()) + "!");
		messagingTemplate.convertAndSend("/topic/greetings", greeting);
//		System.out.println(headerAccessor.getUser().getName());
		return greeting;
	}

//	@MessageMapping("/message")
//	public void processMessageFromClient(@Payload String message, SimpMessageHeaderAccessor  headerAccessor) throws Exception {
//		headerAccessor.setSessionId(sessionId);
//		messagingTemplate.convertAndSend("/topic/reply", new Gson().fromJson(message, Map.class).get("name"));
//	}

}
