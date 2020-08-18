package com.greenway.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.greenway.dao.BusinessDAO;
import com.greenway.modal.Business;

@Service
public class BusinessServiceImp implements BusinessService {
	
	@Autowired
	private BusinessDAO businessDao;

	@Transactional
	@Override
	public List<Business> get() {
		return businessDao.get();
	}

	@Transactional
	@Override
	public Business get(int id) {
		return businessDao.get(id);
	}

	@Transactional
	@Override
	public void save(Business business) {
		businessDao.save(business);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		businessDao.delete(id);
		
	}

}
