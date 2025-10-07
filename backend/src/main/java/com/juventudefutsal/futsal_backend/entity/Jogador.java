package com.juventudefutsal.futsal_backend.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "jogador")
public class Jogador {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_jogador")
    private long idJogador;

    @Column(name = "nome_jogador")
    private String nomeJogador;

    @Column(name = "foto_jogador")
    private String fotoJogador;

    @Column(name = "posicao_jogador")
    private String PosicaoJogador;

    public long getIdJogador() {
        return idJogador;
    }

    public void setIdJogador(long idJogador) {
        this.idJogador = idJogador;
    }
    
    public String getNomeJogador() {
        return nomeJogador;
    }

    public void setNomeJogador(String nomeJogador) {
        this.nomeJogador = nomeJogador;
    }

    public String getFotoJogador() {
        return fotoJogador;
    }

    public void setFotoJogador(String fotoJogador) {
        this.fotoJogador = fotoJogador;
    }

    public String getPosicaoJogador() {
        return PosicaoJogador;
    }

    public void setPosicaoJogador(String posicaoJogador) {
        PosicaoJogador = posicaoJogador;
    }

}
