package com.ict.demo_thymleaf_jpa_mysql.service;

import com.ict.demo_thymleaf_jpa_mysql.entity.PagingVO;
import com.ict.demo_thymleaf_jpa_mysql.entity.board_entity;
import com.ict.demo_thymleaf_jpa_mysql.repository.BoardRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
public class BoardService {
    private final BoardRepository repo;
    public board_entity write(board_entity be){
        return repo.save(be);
    }
    public List<board_entity> list(PagingVO pVO){
        if(pVO.getSearchWord()==null || pVO.getSearchWord().equals(""))
            return repo.findAllByOrderByIdDesc(PageRequest.of(pVO.getNowPage()-1,pVO.getOnePageCount()));
        else return repo.findAllBySubjectContainingOrderByIdDesc(pVO.getSearchWord(),PageRequest.of(pVO.getNowPage()-1,pVO.getOnePageCount()));
    }
    public int totalRecord(PagingVO pVO){
        if(pVO.getSearchWord()==null || pVO.getSearchWord().equals("")) {
            return repo.countIdBy();
        }
        else return repo.countIdBySubjectContaining(pVO.getSearchWord());
    }
    public board_entity info(board_entity be) {
        return repo.findById(be.getId());
    }
    public void delete(board_entity be){
        repo.deleteById(be.getId());
    }

}
