package com.population.data;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
public class Density {
    @Id
    @GeneratedValue
    @JsonIgnore
    private Long id;
    
    @NotNull
    private String name;
    
    @NotNull
    private int value;
    
    @NotNull
    @JsonIgnore
    private String upperRegion;
}