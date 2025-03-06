package com.ict.demo_thymleaf_jpa_mysql.repository;

import com.ict.demo_thymleaf_jpa_mysql.entity.board_entity;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BoardRepository extends JpaRepository<board_entity,Integer> {
    List<board_entity> findAllByOrderByIdDesc(PageRequest p);

    int countIdBy();

    int countIdBySubjectContaining(String searchWord);

    List<board_entity> findAllBySubjectContainingOrderByIdDesc(String searchWord, PageRequest of);

    board_entity findById(int id);

    void deleteById(int id);
}
