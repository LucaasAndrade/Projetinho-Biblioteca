INSERT INTO tb_curso (nm_curso)
	VALUES ('Informática');
    
INSERT INTO tb_turma_curso (id_curso, nm_turma)
	VALUES (1, 'A');
    
INSERT INTO tb_turma_curso (id_curso, nm_turma)
	VALUES (1, 'B');
    
INSERT INTO tb_turma_curso (id_curso, nm_turma)
	VALUES (1, 'C');
    
INSERT INTO tb_turma_curso (id_curso, nm_turma)
	VALUES (1, 'D');
    
INSERT INTO tb_usuario(id_curso, id_turma_curso, nm_usuario, nr_telefone, ds_codigo, ds_observacoes, nr_livros_lidos, nr_livros_atrasados)
	VALUES(1, 4, 'Lucas Andrade', '(11) 95348-9023', 'ADR12', 'Sem observação', 3, 0);
    

INSERT INTO tb_autor(nm_autor, nm_nascionalidade)
	VALUES('J. K. Rowling', 'Inglaterra');
    
INSERT INTO tb_livro(id_autor, nm_livro, ds_observacoes, ds_codigo)
	VALUES(1, 'Harry Potter e a Pedra Filosofal', 'Parcialmente danificado', '1d-2c-9a');
    
INSERT INTO tb_emprestimo(id_usuario, id_livro, dt_retirada, dt_entrega)
	VALUES(1, 1, "2022-12-10 22:30:21", "2022-12-20 22:30:21");

INSERT INTO tb_adm(nm_adm, dt_nascimento, ds_cpf)
	VALUES('admin', "2022-12-25", "123.456.789-10");
    
INSERT INTO tb_adm_login(id_adm, ds_chave_login, ds_senha)
	VALUES(1, "admin@admin.com", "frei@isnsf");