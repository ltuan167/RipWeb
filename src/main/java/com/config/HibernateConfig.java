package com.config;

import com.entities.User;
import org.apache.commons.dbcp.BasicDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.core.env.Environment;
import org.springframework.orm.hibernate5.HibernateTransactionManager;
import org.springframework.orm.hibernate5.LocalSessionFactoryBean;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import java.util.Properties;

import static org.hibernate.cfg.AvailableSettings.*;

@Configuration
@PropertySource("classpath:jdbc.properties")
@EnableTransactionManagement
public class HibernateConfig {

	@Autowired
	private Environment env;

	@Bean
	public LocalSessionFactoryBean sessionFactory() {
		LocalSessionFactoryBean factoryBean = new LocalSessionFactoryBean();

		factoryBean.setDataSource(getDataSource());
		factoryBean.setPackagesToScan("com.entities");
		factoryBean.setHibernateProperties(getHibernateProperties());

		System.out.println("[HIBERNATE] Factory Bean: " + factoryBean);
		return factoryBean;
	}

	@Bean
	public HibernateTransactionManager getTransactionManager() {
		HibernateTransactionManager transactionManager = new HibernateTransactionManager();
		transactionManager.setSessionFactory(sessionFactory().getObject());
		System.out.println("[HIBERNATE] Get Transaction Manager: " + transactionManager);
		return transactionManager;
	}

	@Bean(destroyMethod = "close")
	public BasicDataSource getDataSource() {
		BasicDataSource dataSource = new BasicDataSource();
		dataSource.setDriverClassName (env.getProperty("mysql.driver"));
		dataSource.setUrl             (env.getProperty("mysql.url"));
		dataSource.setUsername        (env.getProperty("mysql.username"));
		dataSource.setPassword        (env.getProperty("mysql.password"));
		System.out.println("[HIBERNATE] Get Data Source: " + dataSource);
		return dataSource;
	}

	private Properties getHibernateProperties() {
		Properties properties = new Properties();
		properties.put(DIALECT,                       env.getProperty("hibernate.dialect"));
		properties.put(CURRENT_SESSION_CONTEXT_CLASS, env.getProperty("hibernate.current_session_context_class"));
		properties.put(SHOW_SQL,                      env.getProperty("hibernate.show_sql"));
		System.out.println("[HIBERNATE] Hibernate Props: " + properties);
		return properties;
	}

}
