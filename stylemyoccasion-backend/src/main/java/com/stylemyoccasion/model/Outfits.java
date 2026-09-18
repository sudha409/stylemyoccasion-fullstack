package com.stylemyoccasion.model;

import jakarta.persistence.*;

@Entity
@Table(name = "outfits")
public class Outfits {
    @Id
    private String title;

    private String name;

    private String img;

    @Lob
    @Column(columnDefinition = "TEXT")
    private String description;

    private String link;

    @ManyToOne
    @JoinColumn(name = "occasion_id")
    private Occasion occasion;

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

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Occasion getOccasion() {
        return occasion;
    }

    public void setOccasion(Occasion occasion) {
        this.occasion = occasion;
    }
}
