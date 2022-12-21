CREATE DATABASE projetinho_biblioteca_INSF2022;

CREATE TABLE tb_curso(
	id_curso				INT PRIMARY KEY AUTO_INCREMENT,
    nm_curso                VARCHAR(100)
);

CREATE TABLE tb_turma_curso(
	id_turma_curso			INT PRIMARY KEY AUTO_INCREMENT,
    id_curso				INT,
    nm_turma				VARCHAR(10),
    FOREIGN KEY (id_curso) REFERENCES tb_curso ( id_curso )
);

CREATE TABLE tb_usuario(
	id_usuario				INT PRIMARY KEY AUTO_INCREMENT,
    id_curso				INT,
    id_turma_curso			INT,
    nm_usuario				VARCHAR(100),
    nr_telefone				VARCHAR(100),
    ds_codigo				VARCHAR(10),
    ds_observacoes			VARCHAR(1000),
    ds_foto_perfil			VARCHAR(100),
    nr_livros_lidos			INT,
    nr_livros_atrasados		INT,
    FOREIGN KEY (id_curso) REFERENCES tb_curso (id_curso),
    FOREIGN KEY (id_turma_curso) REFERENCES tb_turma_curso (id_turma_curso)
);

CREATE TABLE tb_autor(
	id_autor					INT PRIMARY KEY AUTO_INCREMENT,
    nm_autor    				VARCHAR(100),
    nm_nascionalidade			VARCHAR(100),
    ds_observacoes				VARCHAR(1000)
);

CREATE TABLE tb_livro(
	id_livro				INT PRIMARY KEY AUTO_INCREMENT,
    id_autor				INT,
    nm_livro				VARCHAR(100),
    ds_observacoes			VARCHAR(1000),
    ds_imagem				VARCHAR(100),
    ds_codigo               VARCHAR(10),
    FOREIGN KEY (id_autor) REFERENCES tb_autor (id_autor)
);


CREATE TABLE tb_emprestimo(
	id_emprestimo			INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario				INT,
    id_livro				INT,
    dt_retirada				DATETIME,
    dt_entrega				DATETIME,
    FOREIGN KEY (id_usuario) REFERENCES tb_usuario (id_usuario),
    FOREIGN KEY (id_livro) REFERENCES tb_livro (id_livro)
);