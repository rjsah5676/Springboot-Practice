package com.ict.demo_thymleaf_jpa_mysql.controller;

import com.ict.demo_thymleaf_jpa_mysql.entity.joins_entity;
import com.ict.demo_thymleaf_jpa_mysql.service.joinsService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/joins")
@RequiredArgsConstructor
public class JoinsController {

    private final joinsService service;

    @PostMapping("/formOk")
    public ResponseEntity<String> formOk(@RequestBody joins_entity je){
        System.out.println(je);
        joins_entity je2 = service.createJoins(je);
        System.out.println(je2);
        if(je2 != null && je2.getId()>0) {
            return ResponseEntity.ok("ok");
        } else {
            return ResponseEntity.badRequest().body("failed");
        }
    }

    @PostMapping("/loginOk")
    public joins_entity loginOk(@RequestBody joins_entity je){
        System.out.println(je);
        joins_entity je2 = service.loginChk(je);
        System.out.println(je2);
        return je2;
    }

    @PostMapping("selectUser")
    public joins_entity selectUser(@RequestBody joins_entity je) {
        return service.selectUser(je);
    }
}
