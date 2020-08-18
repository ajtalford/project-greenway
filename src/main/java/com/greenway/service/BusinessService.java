package com.greenway.service;

import java.util.List;

import com.greenway.modal.Business;

public interface BusinessService {
	

	List<Business> get();

	Business get(int id);
	
	void save(Business business);
	
	void delete(int id);
	

}
