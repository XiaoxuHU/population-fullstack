package com.population.repository;

import java.util.List;

import com.population.data.Density;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DensityJpaRepository extends JpaRepository<Density,Long> {
    List<Density> findByUpperRegionStartingWith(String upperRegion);
}