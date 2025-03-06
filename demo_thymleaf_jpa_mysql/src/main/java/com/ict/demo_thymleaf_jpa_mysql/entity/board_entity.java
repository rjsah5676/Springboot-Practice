package com.ict.demo_thymleaf_jpa_mysql.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name="BOARD_ENTITY")
public class board_entity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="BOARD_ID")
    private int id;

    @Column(columnDefinition = "LONGTEXT")
    private String content;

    @Column(columnDefinition = "int default 0")
    private int hit;

    @Column(nullable = false, length=200)
    private String subject;

    @CreationTimestamp
    @Column(columnDefinition = "datetime default now()")
    private String writedate;

    @ManyToOne
    @JoinColumn(name="joins_id")
    private joins_entity je;
}
