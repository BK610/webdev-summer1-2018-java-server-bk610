package com.example.assignment1.repositories;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.assignment1.models.Course;

public interface CourseRepository extends CrudRepository<Course, Integer> {
	@Query("SELECT course FROM Course course")
	public Iterable<Course> findAll();
}
