package com.greenway.dao;

import java.util.List;

import javax.persistence.EntityManager;

import org.hibernate.query.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.greenway.modal.Business;

@Repository
public class BusinessDAOImp implements BusinessDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Business> get() {

		Session currSession = entityManager.unwrap(Session.class);
		Query<Business> query = currSession.createQuery("from Business", Business.class);
		List<Business> list = query.getResultList();
		return list;

	}

	@Override
	public Business get(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Business bus = currSession.get(Business.class, id);
		return bus;
	}
	@Override
	public void save(Business business) {
		
		Session currSession = entityManager.unwrap(Session.class);
		currSession.saveOrUpdate(business);

	}

	@Override
	public void delete(int id) {
		Session currSession = entityManager.unwrap(Session.class);
		Business bus = currSession.get(Business.class, id);
		currSession.delete(bus);

	}

}
