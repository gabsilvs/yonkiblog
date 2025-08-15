package com.spring.yonkiblog.repository;

import com.spring.yonkiblog.model.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CodeblogRepository extends JpaRepository<Post, Long> {
}
