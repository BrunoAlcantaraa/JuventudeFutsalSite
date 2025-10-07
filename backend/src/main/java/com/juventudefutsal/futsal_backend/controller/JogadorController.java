package com.juventudefutsal.futsal_backend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.juventudefutsal.futsal_backend.entity.Jogador;
import com.juventudefutsal.futsal_backend.repository.JogadorRepository;

@RestController
@RequestMapping("/api/jogadores")
@CrossOrigin(origins = "http://127.0.0.1:5500")
public class JogadorController {

    @Autowired
    private JogadorRepository repositoryJogadores;

    @GetMapping
    public List<Jogador> listarTodos() {
        return repositoryJogadores.findAll();
    }

}
