package com.ict.demo_thymleaf_jpa_mysql.repository;

import com.ict.demo_thymleaf_jpa_mysql.entity.joins_entity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface joinsRepository extends JpaRepository<joins_entity, Integer> {
    joins_entity findByUseridAndUserpw(String userid, String userpw);
    joins_entity findById(int id);
}
