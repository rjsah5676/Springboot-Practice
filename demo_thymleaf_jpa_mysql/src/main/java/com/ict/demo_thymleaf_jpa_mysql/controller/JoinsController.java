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
        joins_entity je2 = service.createJoins(je);
        if(je2 != null && je2.getId()>0) {
            return ResponseEntity.ok("ok");
        } else {
            return ResponseEntity.badRequest().body("failed");
        }
    }

    @PostMapping("/loginOk")
    public joins_entity loginOk(@RequestBody joins_entity je){
        return service.loginChk(je);
    }

    @PostMapping("selectUser")
    public joins_entity selectUser(@RequestBody joins_entity je) {
        return service.selectUser(je);
    }

    @PostMapping("/EditOk")
    public ResponseEntity<String> EditOk(@RequestBody joins_entity je) {
        joins_entity je2 = null;
        if(service.selectUser(je).getUserpw().equals(je.getUserpw())) {
            je2 = service.createJoins(je);
        }
        if(je2 != null && je2.getId()>0) {
            return ResponseEntity.ok("ok");
        } else {
            return ResponseEntity.badRequest().body("failed");
        }
    }
}
