package com.ict.demo_thymleaf_jpa_mysql.controller;

import com.ict.demo_thymleaf_jpa_mysql.entity.PagingVO;
import com.ict.demo_thymleaf_jpa_mysql.entity.board_entity;
import com.ict.demo_thymleaf_jpa_mysql.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/board")
@RequiredArgsConstructor
public class BoardController {
    private final BoardService service;

    @PostMapping("/write")
    public ResponseEntity<String> write(@RequestBody board_entity be){
        service.write(be);
        return ResponseEntity.ok("ok");
    }

    @GetMapping("/list")
    public Map list(PagingVO pVO, @PageableDefault(sort="id", direction = Sort.Direction.DESC) Pageable page) {
        pVO.setTotalRecord(service.totalRecord(pVO));
        Map map = new HashMap();
        map.put("pVO",pVO);
        map.put("list", service.list(pVO));
        return map;
    }

    @PostMapping("/info")
    public board_entity info(@RequestBody board_entity be) {
        return service.info(be);
    }
    @PostMapping("/delete")
    public String delete(@RequestBody board_entity be) {
        service.delete(be);
        return "ok";
    }
}
