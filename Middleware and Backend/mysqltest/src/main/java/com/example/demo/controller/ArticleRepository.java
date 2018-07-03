package com.example.demo.controller;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
public interface ArticleRepository extends JpaRepository<Article, String> {

}
