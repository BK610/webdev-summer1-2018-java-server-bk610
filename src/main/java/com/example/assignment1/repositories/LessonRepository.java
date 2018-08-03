package com.example.assignment1.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.assignment1.models.Lesson;

public interface LessonRepository extends CrudRepository<Lesson, Integer>{

}