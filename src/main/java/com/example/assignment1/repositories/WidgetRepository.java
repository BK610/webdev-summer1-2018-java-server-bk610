package com.example.assignment1.repositories;

import org.springframework.data.repository.CrudRepository;

import com.example.assignment1.models.Widget;

public interface WidgetRepository extends CrudRepository<Widget, Integer> {

}
