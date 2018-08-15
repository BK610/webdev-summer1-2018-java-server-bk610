package com.example.assignment1.services;

import java.util.List;
import java.util.Optional;

import com.example.assignment1.models.Lesson;
import com.example.assignment1.repositories.LessonRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.assignment1.models.Widget;
import com.example.assignment1.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*")
public class WidgetService {
    @Autowired
    LessonRepository lessonRepository;
    @Autowired
    WidgetRepository widgetRepository;

    @GetMapping("/api/widget")
    public List<Widget> findAllWidgets() {
        return (List<Widget>) widgetRepository.findAll();
    }

    @GetMapping("/api/widget/{widgetId}")
    public Optional<Widget> findWidgetById(@PathVariable("widgetId") int widgetId) {
        return widgetRepository.findById(widgetId);
    }

    @GetMapping("/api/lesson/{lessonId}/widget")
    public List<Widget> findAllWidgetsForLesson(@PathVariable("lessonId") int lessonId) {
        Optional<Lesson> data = lessonRepository.findById(lessonId);
        if (data.isPresent()) {
            Lesson lesson = data.get();
            return lesson.getWidgets();
        }
        return null;
    }

    @PostMapping("/api/widget")
    public List<Widget> saveWidgets(@RequestBody List<Widget> widgets) {
        return widgets;
    }

    @PostMapping("/api/lesson/{lessonId}/widget")
    public Widget createWidget(@RequestBody Widget widget,
                               @PathVariable("lessonId") int lessonId) {
        Optional<Lesson> lesson = lessonRepository.findById(lessonId);
        if (lesson.isPresent()) {
            Lesson l = lesson.get();
            widget.setLesson(l);
            return widgetRepository.save(widget);
        }
        return null;
    }

    @PutMapping("/api/widget/{widgetId}")
    public Widget updateWidget(@PathVariable("widgetId") int widgetId,
                               @RequestBody Widget newWidget) {
        Optional<Widget> data = widgetRepository.findById(widgetId);
        if (data.isPresent()) {
            Widget widget = data.get();
            if (newWidget.getWidgetType() != null) {
                widget.setWidgetType(newWidget.getWidgetType());
            }
            if (newWidget.getText() != null) {
                widget.setText(newWidget.getText());
            }
            if (newWidget.getLesson() != null) {
                widget.setLesson(newWidget.getLesson());
            }
            widgetRepository.save(widget);
            return widget;
        }
        return null;
    }

    @DeleteMapping("/api/widget/{widgetId}")
    public void deleteWidget(@PathVariable("widgetId") int widgetId) {
        widgetRepository.deleteById(widgetId);
    }

    @PostMapping("/api/lesson/{lessonId}/widget/save")
    public void saveWidgets(@PathVariable("lessonId") int lessonId,
                               @RequestBody List<Widget> widgets) {
        Optional<Lesson> data = lessonRepository.findById(lessonId);
        if (data.isPresent()) {
            Lesson lesson = data.get();
            List<Widget> filterThisList = lesson.getWidgets();
            for (Widget w : filterThisList) {
                if (!widgets.contains(w)) {
                    widgetRepository.delete(w);
                }
            }
            for (Widget w : widgets) {
                Optional<Widget> widget = widgetRepository.findById(w.getId());
                if (widget.isPresent()) {
                    widgetRepository.delete(widget.get());
                }
                w.setLesson(lesson);
                widgetRepository.save(w);
            }
            lesson.setWidgets(widgets);
        }
    }
}