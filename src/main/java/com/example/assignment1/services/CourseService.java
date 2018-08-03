package com.example.assignment1.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.assignment1.models.Course;
import com.example.assignment1.repositories.CourseRepository;

@RestController
@CrossOrigin(origins="*")
public class CourseService {
	@Autowired
	CourseRepository courseRepository;

	@GetMapping("/api/course")
	public List<Course> findAllCourses() {
		return (List<Course>) courseRepository.findAll();
	}

	@GetMapping("/api/course/{courseId}")
	public Optional<Course> findCourseById(@PathVariable("courseId") int id) {
		return courseRepository.findById(id);
	}

	@PostMapping("/api/course")
	public Course createCourse(
			@RequestBody Course course) {
		return courseRepository.save(course);
	}

	@DeleteMapping("/api/course/{courseId}")
	public void deleteCourse(@PathVariable("courseId") int id) {

		courseRepository.deleteById(id);

//		Optional<Course> optional = courseRepository.findById(id);
//		if(optional.isPresent()) {
//			Course course = optional.get();
//			courseRepository.delete(course);
//		}
	}

	@PutMapping("/api/course/{courseId}")
	public Course updateCourse(
			@PathVariable("courseId") int id,
			@RequestBody Course newCourse) {
		Optional<Course> optional = courseRepository.findById(id);
		if(optional.isPresent()) {
			Course course = optional.get();
			course.setTitle(newCourse.getTitle());
			courseRepository.save(course);
			return course;
		}
		return null;
	}
}
