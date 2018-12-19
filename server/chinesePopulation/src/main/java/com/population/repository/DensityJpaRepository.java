package com.population.repository;

import java.util.List;

import com.population.model.Density;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DensityJpaRepository extends JpaRepository<Density,Long>{

    public List<Density> findByUpperRegionStartingWith(String upperRegion);
}