-- Script base

drop database juventude_bd;

create database juventude_bd;

use juventude_bd;

create table jogador (
	id_jogador int auto_increment primary key,
    nome_jogador varchar(255),
    posicao_jogador varchar(255),
    foto_jogador varchar(255)
);