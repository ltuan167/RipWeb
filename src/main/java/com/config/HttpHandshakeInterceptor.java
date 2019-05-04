package com.config;

import org.springframework.http.server.ServerHttpRequest;
import org.springframework.http.server.ServerHttpResponse;
import org.springframework.http.server.ServletServerHttpRequest;
import org.springframework.web.socket.WebSocketHandler;
import org.springframework.web.socket.server.HandshakeInterceptor;

import javax.servlet.http.HttpSession;
import java.util.Map;

public class HttpHandshakeInterceptor implements HandshakeInterceptor {

	@Override
	public boolean beforeHandshake(ServerHttpRequest serverHttpRequest, ServerHttpResponse serverHttpResponse, WebSocketHandler webSocketHandler, Map<String, Object> attributes) throws Exception {
		if (serverHttpRequest instanceof ServletServerHttpRequest) {
			ServletServerHttpRequest servletRequest = (ServletServerHttpRequest) serverHttpRequest;
			HttpSession session = servletRequest.getServletRequest().getSession();

			attributes.put("sessionId", session.getId());
			System.out.println("Begin handshake with " + session.getId());
		}
		return true;
	}

	@Override
	public void afterHandshake(org.springframework.http.server.ServerHttpRequest serverHttpRequest, ServerHttpResponse serverHttpResponse, WebSocketHandler webSocketHandler, Exception e) {
		ServletServerHttpRequest servletRequest = (ServletServerHttpRequest) serverHttpRequest;
		HttpSession session = servletRequest.getServletRequest().getSession();
		System.out.println("End handshake with " + session.getId());
	}

}
