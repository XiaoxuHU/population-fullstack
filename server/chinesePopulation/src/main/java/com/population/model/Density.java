package com.population.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@Entity
@Table(name="population")
@JsonIgnoreProperties({"id","upperRegion"})
public class Density {
    @Id
    private Long id;
    
    private String name;
    
    private int value;
    
    @Column(name="upper_region")
    private String upperRegion;

    public Density(){}

    public Density(long id,String name,int value,String upperRegion) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.upperRegion = upperRegion;
    }

    public long getId() {
        return this.id;
    }
    public String getName() {
        return this.name;
    }
    public int getValue() {
        return this.value;
    }
    public String getUpperReigon(){
        return this.upperRegion;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }
    public void setValue(int value) {
        this.value = value;
    }
    public void setUpperReigon(String upperReigon) {
        this.upperRegion = upperReigon;
    }
}