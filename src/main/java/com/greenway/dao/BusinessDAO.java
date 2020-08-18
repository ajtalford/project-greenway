package com.greenway.dao;

import java.util.List;

import com.greenway.modal.Business;

public interface BusinessDAO {
	
	List<Business> get();

	Business get(int id);
	
	void save(Business business);
	
	void delete(int id);

}
