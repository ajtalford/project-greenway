package com.greenway.modal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "info")
public class Business {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private Integer id;

	@Column
	private String bname;

	@Column
	private String blocation;

	@Column
	private String link;

	@Column
	private String review;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getBName() {
		return bname;
	}

	public void setBName(String bname) {
		this.bname = bname;
	}

	public String getBLocation() {
		return blocation;
	}

	public void setBLocation(String blocation) {
		this.blocation = blocation;
	}

	public String getLink() {
		return link;
	}

	public void setLink(String link) {
		this.link = link;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	@Override
	public String toString() {
		return "Business{" + "id=" + id + ", name='" + bname + '\'' + ", location='" + blocation + '\'' + ", link='"
				+ link + '\'' + ", review='" + review + '\'' + '}';
	}
}
