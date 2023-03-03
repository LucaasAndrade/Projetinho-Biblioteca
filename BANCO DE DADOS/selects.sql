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

SELECT  id_autor			id,
		nm_autor			nome,
        nm_nascionalidade   nascionalidade
	FROM tb_autor
    INNER JOIN tb_nascionalidade ON tb_autor.id_nascionalidade = tb_nascionalidade.id_nascionalidade
		WHERE nm_autor like '%j%';
        
SELECT *
	FROM tb_autor
    where id_autor = 1;

INSERT INTO tb_autor(nm_autor, id_nascionalidade)
	VALUES ('C. S. Lewis', 2); 
    
    
SELECT id_nascionalidade      id,
		nm_nascionalidade     nacionalidade
	FROM tb_nascionalidade
		WHERE nm_nascionalidade LIKE '%B%';
        
INSERT INTO tb_nascionalidade(nm_nascionalidade)
	VALUES('Alemanha');
    
SELECT tb_livro.id_livro            id,
	   nm_autor            autor,
	   nm_genero           genero,
       nm_livro            livro,
       tb_livro.ds_observacoes      observacoes,
       ds_codigo            codigo
	FROM tb_livro
		INNER JOIN tb_autor ON tb_livro.id_autor = tb_autor.id_autor
        INNER JOIN tb_genero ON tb_livro.id_genero = tb_genero.id_genero
        order by id_livro;
    
INSERT INTO tb_livro(id_autor, id_genero, nm_livro, ds_observacoes, ds_codigo)
	VALUES (2, 1, "As Crônicas de Nárnia", "Nenhuma Observação", "2k-3p-1a");
    
SHOW TABLES;
    
SELECT 
		id_usuario                 id,
        nm_usuario                 leitor,
		nm_curso                   curso,
        nm_turma                   turma,
        nr_livros_lidos            livros_lidos,
        nr_livros_atrasados        livros_atrasados,
        ds_codigo                  codigo
	FROM tb_usuario
		INNER JOIN tb_curso ON tb_usuario.id_curso = tb_curso.id_curso
        INNER JOIN tb_turma_curso ON tb_usuario.id_turma_curso = tb_turma_curso.id_turma_curso;
    
    
INSERT INTO tb_curso(nm_curso)
	VALUES('Administração');
    
SELECT id_turma_curso                  id,
	   nm_curso                        curso,
       nm_turma                        turma
	FROM tb_turma_curso
		INNER JOIN tb_curso ON tb_turma_curso.id_curso = tb_curso.id_curso
	WHERE tb_curso.id_curso = 1;
    
INSERT INTO tb_turma_curso(id_curso, nm_turma)
	VALUES(2, 'A');
    
SELECT *
	FROM tb_curso;
    
SELECT 	id_emprestimo             				id,
		tb_usuario.nm_usuario                	usuario,
        tb_livro.nm_livro                  		livro,
        tb_curso.nm_curso                       curso,
        tb_turma_curso.nm_turma           turma,
        dt_retirada               				data_de_retirada,
        dt_entrega                				data_para_entregar,
        bl_ativo                                ativo
	FROM tb_emprestimo
		INNER JOIN tb_usuario ON tb_usuario.id_usuario = tb_emprestimo.id_usuario
		INNER JOIN tb_livro   ON tb_livro.id_livro = tb_emprestimo.id_livro
        INNER JOIN tb_curso   ON tb_curso.id_curso = tb_usuario.id_curso
        INNER JOIN tb_turma_curso ON tb_turma_curso.id_turma_curso = tb_curso.id_curso;
        
SELECT *
	FROM tb_turma_curso;
    
    
SELECT 	*
	FROM tb_autor;
    
    
INSERT INTO tb_genero(nm_genero)
	VALUES('Romance');
    
SELECT *	
	FROM tb_nascionalidade
		order by nm_nascionalidade;

        SELECT      
            tb_livro.id_livro            id,
            nm_autor                     autor,
            nm_genero                    genero,
            nm_livro                     livro,
            tb_livro.ds_observacoes      observacoes,
            ds_codigo                    codigo
        FROM tb_livro
            INNER JOIN tb_autor ON tb_livro.id_autor = tb_autor.id_autor
            INNER JOIN tb_genero ON tb_livro.id_genero = tb_genero.id_genero
        WHERE id_livro = 3;
        
        
SELECT *
	FROM tb_livro;
    
UPDATE tb_livro
	SET 
		id_autor = ?,
		id_genero = ?,
        nm_livro = ?,
		ds_observacoes = ?
WHERE id_livro = 1;
    

SELECT *
	FROM tb_usuario;


SELECT id_usuario,
		tb_usuario.id_curso,
        tb_curso.nm_curso,
        tb_usuario.id_turma_curso,
        tb_turma_curso.nm_turma,
        nm_usuario,
        nr_telefone,
        ds_codigo
	FROM tb_usuario
		INNER JOIN tb_curso ON tb_usuario.id_curso = tb_curso.id_curso
		INNER JOIN tb_turma_curso ON tb_usuario.id_turma_curso = tb_turma_curso.id_turma_curso
    WHERE ds_codigo = 'n6d68x4';
    
    
SELECT id_livro,
		tb_livro.id_autor,
        tb_autor.nm_autor,
        tb_livro.id_genero,
        tb_genero.nm_genero,
        ds_codigo
	FROM tb_livro
		INNER JOIN tb_autor ON tb_livro.id_autor = tb_autor.id_autor
		INNER JOIN tb_genero ON tb_livro.id_genero = tb_genero.id_genero
	WHERE ds_codigo = 'ib3b4';
        
        
SELECT *
	FROM tb_autor;


select * from tb_usuario;
select * from tb_emprestimo;
    
        
        SELECT 	id_emprestimo             				id,
        tb_usuario.nm_usuario                	usuario,
        tb_livro.nm_livro                  		livro,
        tb_curso.nm_curso                       curso,
        tb_turma_curso.nm_turma           turma,
        dt_retirada               				data_de_retirada,
        dt_entrega                				data_para_entregar,
        bl_ativo                                ativo
            FROM tb_emprestimo
                INNER JOIN tb_usuario ON tb_usuario.id_usuario = tb_emprestimo.id_usuario
                INNER JOIN tb_livro   ON tb_livro.id_livro = tb_emprestimo.id_livro
                INNER JOIN tb_curso   ON tb_curso.id_curso = tb_usuario.id_curso
                INNER JOIN tb_turma_curso ON tb_turma_curso.id_turma_curso = tb_usuario.id_turma_curso
			WHERE bl_ativo = 1
				ORDER BY id_emprestimo;
        