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
    
INSERT INTO tb_nascionalidade(nm_nascionalidade)
	VALUES('Brasil');

INSERT INTO tb_nascionalidade(nm_nascionalidade)
	VALUES('Inglaterra');

INSERT INTO tb_autor(nm_autor, id_nascionalidade)
	VALUES('J. K. Rowling', 2);
    
INSERT INTO tb_genero(nm_genero)
	VALUES('Ficção');
    
INSERT INTO tb_livro(id_autor, id_genero,nm_livro, ds_observacoes, ds_codigo)
	VALUES(1, 1,'Harry Potter e a Pedra Filosofal', 'Parcialmente danificado', '1d-2c-9a');
    
INSERT INTO tb_emprestimo(id_usuario, id_livro, dt_retirada, dt_entrega, bl_ativo)
	VALUES(1, 1, "2022-12-28 22:30:21", "2023-1-10 10:10:10", true);
    
INSERT INTO tb_adm(nm_adm, dt_nascimento, ds_cpf)
	VALUES('admin', "2022-12-25", "123.456.789-10");
    
INSERT INTO tb_adm_login(id_adm, ds_chave_login, ds_senha)
	VALUES(1, "admin@admin.com", "frei@isnsf");
    
    
-- SELECT'S

SELECT 	*
		FROM tb_adm_login
    WHERE ds_chave_login = 'admin@admin.com'
		AND ds_senha = 'frei@isnsf';
        
SELECT count(id_emprestimo) as Emprestimos_Ativos
	FROM tb_emprestimo
    where bl_ativo = 1;
    
DELETE FROM tb_emprestimo 
	WHERE id_emprestimo = 3;

SELECT id_autor 		id,
		nm_autor		nome
	FROM tb_autor
		WHERE nm_autor like '%%';
        
        
        
INSERT INTO tb_autor(nm_autor, id_nascionalidade)
	VALUES ('C. S. Lewis', 1); 