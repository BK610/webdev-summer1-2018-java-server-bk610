package com.example.assignment1.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.assignment1.models.Widget;
import com.example.assignment1.repositories.WidgetRepository;

@RestController
@CrossOrigin(origins = "*")
public class WidgetService {
	@Autowired
	WidgetRepository widgetRepository;

	@GetMapping("/api/widget/")
	public List<Widget> findAllWidgets() {
		return (List<Widget>) widgetRepository.findAll();
	}

	@PostMapping("/api/widget")
	public List<Widget> saveWidgets(@RequestBody List<Widget> widgets) {
		return widgets;
	}
}