package com.controller;

import com.model.Greeting;
import com.model.HelloMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessageSendingOperations;
import org.springframework.stereotype.Controller;
import org.springframework.web.util.HtmlUtils;

@Controller
public class MessageController {

	@Autowired
	public SimpMessageSendingOperations messagingTemplate;

	@MessageMapping("/hello")
	public Greeting greeting(HelloMessage message, SimpMessageHeaderAccessor headerAccessor) {
		String sessionId = headerAccessor.getSessionAttributes().get("sessionId").toString();
		String echoMessage = message.getName();

		System.out.println(String.format("[WS][RECEIVED][FROM %s]: %s", sessionId, echoMessage));

		Greeting greeting = new Greeting("Hellooooooo, " + HtmlUtils.htmlEscape(echoMessage) + "!");

		messagingTemplate.convertAndSend("/topic/" + sessionId, greeting);
		return greeting;
	}

}
