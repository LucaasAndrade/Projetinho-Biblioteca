CREATE DATABASE projetinho_biblioteca_INSF2022;
USE projetinho_biblioteca_INSF2022;

-- DROP DATABASE projetinho_biblioteca_INSF2022;

CREATE TABLE tb_curso(
	id_curso				INT PRIMARY KEY AUTO_INCREMENT,
    nm_curso                VARCHAR(100)
);

CREATE TABLE tb_turma_curso(
	id_turma_curso			INT PRIMARY KEY AUTO_INCREMENT,
    id_curso				INT,
    nm_turma				VARCHAR(10),
    nr_ano                  VARCHAR(5),
    FOREIGN KEY (id_curso) REFERENCES tb_curso ( id_curso )
);

CREATE TABLE tb_usuario(
	id_usuario				INT PRIMARY KEY AUTO_INCREMENT,
    id_curso				INT,
    id_turma_curso			INT,
    nm_usuario				VARCHAR(100),
    nr_telefone				VARCHAR(100),
    ds_cpf                  VARCHAR(15),
    ds_observacoes			VARCHAR(1000),
    ds_foto_perfil			VARCHAR(100),   
    nr_livros_atrasados		INT,
    FOREIGN KEY (id_curso) REFERENCES tb_curso (id_curso),
    FOREIGN KEY (id_turma_curso) REFERENCES tb_turma_curso (id_turma_curso)
);

CREATE TABLE tb_nascionalidade(
	id_nascionalidade			INT PRIMARY KEY AUTO_INCREMENT,
    nm_nascionalidade			VARCHAR(100)
);

CREATE TABLE tb_autor(
	id_autor					INT PRIMARY KEY AUTO_INCREMENT,
	id_nascionalidade           INT,
    nm_autor    				VARCHAR(100),
    ds_observacoes				VARCHAR(1000),
    FOREIGN KEY (id_nascionalidade) REFERENCES tb_nascionalidade (id_nascionalidade)
);

CREATE TABLE tb_genero(
	id_genero					INT PRIMARY KEY AUTO_INCREMENT,
    nm_genero					VARCHAR(100)
);

CREATE TABLE tb_cor(
	id_cor						INT PRIMARY KEY AUTO_INCREMENT,
    nm_cor						VARCHAR(100)
);

CREATE TABLE tb_situacao(
	id_situacao					INT PRIMARY KEY AUTO_INCREMENT,
    nm_situacao					VARCHAR(100)
);

CREATE TABLE tb_prateleira(
	id_prateleira				INT PRIMARY KEY AUTO_INCREMENT,
    nr_prateleira				INT
);

CREATE TABLE tb_livro(
	id_livro				INT PRIMARY KEY AUTO_INCREMENT,
    id_autor				INT,
    id_genero               INT,
    id_cor                  INT,
    id_situacao             INT,
    id_prateleira			INT,
    nm_livro				VARCHAR(100),
    ds_observacoes			VARCHAR(1000),
    ds_imagem				VARCHAR(100),
    ds_codigo				VARCHAR(10),
    FOREIGN KEY (id_autor) REFERENCES tb_autor (id_autor),
    FOREIGN KEY (id_genero) REFERENCES tb_genero (id_genero),
    FOREIGN KEY (id_cor) REFERENCES tb_cor (id_cor),
    FOREIGN KEY (id_situacao) REFERENCES tb_situacao (id_situacao)
);


CREATE TABLE tb_situacao_emprestimo(
	id_situacao_emprestimo	INT PRIMARY KEY AUTO_INCREMENT,
    nm_situacao_emprestimo	varchar(100)
);

CREATE TABLE tb_emprestimo(
	id_emprestimo			INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario				INT,
    id_livro				INT,
    id_situacao_emprestimo	INT,
    dt_retirada				DATE,
    dt_entrega				DATE,
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario (id_usuario),
    FOREIGN KEY (id_livro) REFERENCES tb_livro (id_livro),
    FOREIGN KEY (id_situacao_emprestimo) REFERENCES tb_situacao_emprestimo (id_situacao_emprestimo)
);


CREATE TABLE tb_adm(
	id_adm				INT PRIMARY KEY AUTO_INCREMENT,
    nm_adm				VARCHAR(100),
    dt_nascimento		DATE,
    ds_cpf				VARCHAR(100)
);

CREATE TABLE tb_adm_login(
	id_adm_login		INT PRIMARY KEY AUTO_INCREMENT,
    id_adm				INT,
    ds_chave_login		VARCHAR(100),
    ds_senha			VARCHAR(100),
    FOREIGN KEY (id_adm) REFERENCES tb_adm (id_adm)
);