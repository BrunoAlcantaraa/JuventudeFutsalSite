package com.juventudefutsal.futsal_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.juventudefutsal.futsal_backend.entity.Jogador;

public interface JogadorRepository extends JpaRepository<Jogador, Long> {
    // Spring vai gerar métodos
}
