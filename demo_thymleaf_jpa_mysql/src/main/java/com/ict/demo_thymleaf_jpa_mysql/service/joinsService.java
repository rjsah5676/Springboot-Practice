package com.ict.demo_thymleaf_jpa_mysql.service;

import com.ict.demo_thymleaf_jpa_mysql.entity.joins_entity;
import com.ict.demo_thymleaf_jpa_mysql.repository.joinsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@RequiredArgsConstructor
@Service
public class joinsService{
    private final joinsRepository repo;
    public joins_entity createJoins(joins_entity je){
        return repo.save(je);
    }
    public joins_entity loginChk(joins_entity je) {
        return repo.findByUseridAndUserpw(je.getUserid(), je.getUserpw());
    }
    public joins_entity selectUser(joins_entity je) {
        return repo.findById(je.getId());
    }
}
