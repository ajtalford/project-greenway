package com.greenway.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.greenway.service.BusinessService;
import com.greenway.modal.Business;

@RestController
@RequestMapping("/api")
public class BusinessController {
	
	@Autowired
	private BusinessService businessService;
	
	@GetMapping("/business")
	public List<Business> get() {
		return businessService.get();
	}
	
	@PostMapping("/business")
	public Business save(@RequestBody Business business) {
		businessService.save(business);
		return business;
	}
	
	@GetMapping("/business/{id}")
	public Business get(@PathVariable int id) {
		return businessService.get(id);
	}
	
	@DeleteMapping("/business/{id}")
	public String delete(@PathVariable int id) {

		businessService.delete(id);
		return "Business removed with id "+id;
	}
	
	@PutMapping("/business")
	public Business update(@RequestBody Business business) {
		businessService.save(business);
		return business;
	}
} 
