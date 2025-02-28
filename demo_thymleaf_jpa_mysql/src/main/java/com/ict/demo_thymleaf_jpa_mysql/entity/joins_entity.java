package com.ict.demo_thymleaf_jpa_mysql.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UpdateTimestamp;

@Entity
@Data
@Table(name="JOINS_ENTITY")
@AllArgsConstructor
@NoArgsConstructor
public class joins_entity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="JOINS_ID")
    private int id;

    @Column(nullable = false, length = 15, unique = true)
    private String userid;

    @Column(nullable = false, length = 15)
    private String userpw;

    @Column(nullable = false,length = 10)
    private String username;

    @Column(length = 15)
    private String tel;
    private String email;

    @UpdateTimestamp
    @Column(columnDefinition = "DATETIME default now()")
    private String writedate;
}
