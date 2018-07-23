package com.example.assignment1.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.assignment1.models.Course;

public interface CourseRepository extends CrudRepository<Course, Integer> {

}
