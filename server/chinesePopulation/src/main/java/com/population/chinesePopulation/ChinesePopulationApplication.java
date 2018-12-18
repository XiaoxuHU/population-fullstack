package com.population.chinesePopulation;

import java.util.List;

import com.population.data.Density;
import com.population.repository.DensityJpaRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;


@SpringBootApplication
@RestController
public class ChinesePopulationApplication {
	
	@Autowired DensityJpaRepository repository; 
	public static void main(String[] args) {
		System.out.print("App is running");
		SpringApplication.run(ChinesePopulationApplication.class, args);
	}
	
	@GetMapping(value="/{province}")
	public List<Density> getName(@PathVariable String province) {
		return repository.findByUpperRegionStartingWith(province);
	}
	
	
	
}

