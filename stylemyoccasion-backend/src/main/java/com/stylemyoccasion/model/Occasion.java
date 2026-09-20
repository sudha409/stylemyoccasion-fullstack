package com.stylemyoccasion.model;

import jakarta.persistence.*;

import static org.springframework.data.jpa.domain.AbstractPersistable_.id;

@Entity
@Table(name = "occasions")
public class Occasion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column
    private Long id;
    private String img;
    private String title;
    private String name;
    private String link;


    public Occasion() {
    }

    public Occasion(Long id, String img, String title, String name, String link) {
        this.id = id;
        this.img = img;
        this.title = title;
        this.name = name;
        this.link = link;

    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }


    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }


}