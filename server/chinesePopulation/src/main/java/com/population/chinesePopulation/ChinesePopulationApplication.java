package com.population.chinesePopulation;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class ChinesePopulationApplication {

	public static void main(String[] args) {
		System.out.print("App is running");
		SpringApplication.run(ChinesePopulationApplication.class, args);
	}
	@GetMapping(value="/china") 
	public String getValue() {
		return "Hello,world";
	}
	@GetMapping(value="/{city}")
	
}

