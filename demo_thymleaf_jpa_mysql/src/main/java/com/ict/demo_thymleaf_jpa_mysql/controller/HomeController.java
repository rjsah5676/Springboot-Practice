package com.ict.demo_thymleaf_jpa_mysql.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@Slf4j
@RestController
public class HomeController {
    @GetMapping("/")
    public ModelAndView home(){
        ModelAndView mav = new ModelAndView();
        mav.setViewName("index");
        return mav;
    }

    @CrossOrigin(origins="*")
    @GetMapping("/reactTest")
    public String reactTest(@RequestParam("msg") String msg){
        System.out.println("리액트->스프링부트: "+msg);

        return "슿흫흫허후뷁웳";
    }
}
