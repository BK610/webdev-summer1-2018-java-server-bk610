package com.example.assignment1.services;

import java.util.ArrayList;
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
import com.example.assignment1.models.Lesson;
import com.example.assignment1.models.Module;
import com.example.assignment1.repositories.CourseRepository;
import com.example.assignment1.repositories.LessonRepository;
import com.example.assignment1.repositories.ModuleRepository;

@RestController
@CrossOrigin(origins = "*", maxAge = 3600)
public class LessonService {
    @Autowired
    CourseRepository courseRepository;
    @Autowired
    ModuleRepository moduleRepository;
    @Autowired
    LessonRepository lessonRepository;

    @PostMapping("/api/course/{courseId}/module/{moduleId}/lesson")
    public Lesson createLesson(@RequestBody Lesson lesson,
                               @PathVariable("courseId") int courseId,
                               @PathVariable("moduleId") int moduleId) {
        Optional<Module> optional = moduleRepository.findById(moduleId);
        if (optional.isPresent()) {
            Module curr = optional.get();
            lesson.setModule(curr);
            Course course = courseRepository.findById(courseId).get();
            return lessonRepository.save(lesson);
        }
        return null;
    }

    @DeleteMapping("/api/lesson/{lessonId}")
    public void deleteLesson(@PathVariable("lessonId") int id) {
        Optional<Lesson> optional = lessonRepository.findById(id);
        if (optional.isPresent()) {
            Lesson l = optional.get();
            Module curr = l.getModule();
            Course course = curr.getCourse();
        }
        lessonRepository.deleteById(id);
    }

    @GetMapping("/api/lesson")
    public List<Lesson> findAllLessons() {
        return (List<Lesson>) lessonRepository.findAll();
    }

    @GetMapping("api/lesson/{lessonId}")
    public Lesson findLessonById(@PathVariable("lessonId") int lessonId) {
        Optional<Lesson> optional = lessonRepository.findById(lessonId);
        if (optional.isPresent()) {
            return optional.get();
        } else {
            return null;
        }
    }

    @GetMapping("/api/course/{courseId}/module/{moduleId}/lesson")
    public List<Lesson> findAllLessonsForModule(@PathVariable("moduleId") int modId) {
        Optional<Module> optional = moduleRepository.findById(modId);
        if (optional.isPresent()) {
            Module m = optional.get();
            return m.getLessons();
        } else {
            List<Lesson> lessons = new ArrayList<Lesson>();
            return lessons;
        }
    }

    @PutMapping("api/lesson/{lessonId}")
    public Lesson updateLesson(@PathVariable("lessonId") int lessonId,
                               @RequestBody Lesson newLesson) {
        Optional<Lesson> optional = lessonRepository.findById(lessonId);
        if (optional.isPresent()) {
            Lesson lesson = optional.get();
            if (newLesson.getTitle() != null) {
                lesson.setTitle(newLesson.getTitle());
            }
            if (newLesson.getModule() != null) {
                lesson.setModule(newLesson.getModule());
            }
            lessonRepository.save(lesson);
            return lesson;
        } else {
            return null;
        }
    }
}