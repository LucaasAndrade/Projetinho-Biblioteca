# ESTUDO DOS END-POINTS


**EndPoint Autores** -> OK

verbo       path

GET /autores/:nome? ->


POST /autores/cadastrar ->



***EndPoint Livro*** -> OK

verbo           path               

GET             /livros/:codigo?/:nome?/:autor?/   >>> _Consulta os livros cadastrados, podendo ser por codigo,nome ou autor_

POST            /livros/cadastrar       >>> Cadastra um novo livro no sistema;

DELETE          /livros/apagar/:id      >>> Apaga um livro do sistema;

PUT             /livros/alterar/:id     >>> altera as informações de um livro cadastrado no sistema;


***EndPoint Leitor***

verbo           path

GET             /leitor/:curso?/cpf?    >>> _Consulta os leitores cadastrados no sistema, podendo ser por curso ou pelo cpf do aluno_;

POST            /leitor/cadastrar       >>> Cadastra um novo leitor no sistema;

DELETE          /leitor/apagar/:id      >>> Apaga um usuario cadastrado no sistema;

PUT             /leitor/alterar/id      >>> Altera as informações de um leitor já cadastrado no sistema;



***EndPoint Genero*** OK

verbo           path

GET             /generos/:nome?                 >>> _Consulta os generos cadastrados no Sistema_

POST            /generos/cadastrar              >>> Cadastra um novo genero no Sistema;

DELETE          /generos/deletar/:id            >>> Deleta um genero já cadastrado no Sistema;

PUT             /generos/alterar/:id            >>> Altera um genero já cadastrado no Sistema; -> RECEBE "nomeGenero"


***EndPoint Emprestimo***

verbo           path

GET             /emprestimos/:data?/:curso?/:situacao?   >>> Consulta emprestimos que foram feitos, podendo ser filtrado por data de emprestimo, curso do leitor ou situacao (ativo, atrasado, entregue).

POST            /emprestimo/cadastrar                   >>> Cadastra um novo emprestimo no sistema

DELETE          /emprestimo/deletar/:id                  >>> Deleta um cadastro feito no sistema

PUT             /emprestimo/alterar/:id                 >>> Altera um emprestimo já cadastrado no sistema

PUT             /emprestimo/adiar/:id                   >>> Adia a data de entrega de um emprestimo já realizado

***EndPoint Cursos*** - OK

verbo           path

GET             /cursos                     >>> Consulta todos cursos já cadastrados no sistema;

POST            /cursos/cadastrar           >>> Cadastra um novo curso no Sistema; -> Recebe JSON "nomeCurso"

DELETE          /cursos/deletar/:id         >>> Deleta um curso cadastrado no Sistema; -> Recebe ID por rota
 
PUT             /cursos/alterar/:id         >>> Altera o curso já cadastrado no Sistema; -> Recebe JSON "nomeCurso"

***EndPoint Turmas de Curso*** - OOK    

verbo           path

GET             /turmas/:curso              >>> Consulta todas as turmas de um determinado curso; -> Só é possível consultar uma turma através do parâmetro curso.

POST            /turmas/cadastrar/:curso    >>> Cadastra uma nova turma no curso; -> Recebe o parâmetro do curso por rota "cursoId", e recebe dois parêmetros por JSON, sendo eles o "nomeCurso" e o "anoCurso".

DELETE          /turmas/deletar/:id  >>> Deleta uma turma de um curso; -> Recebe o ID por rota.

PUT             /turmas/alterar/:id  >>> Altera uma turma; -> Recebe um parâmetro por rota.


***EndPoint   Administrador/Login*** -> OK

verbo           path

POST            /adm/login              >>> Realiza Login no sistema


***EndPoint Prateleiras*** -> OK

verbo           path

GET             /prateleiras                    >>> Consultar prateleiras cadastradas no sistema

POST            /prateleiras/cadastrar            >>> Cadastrar patreleiras no sistema

PUT             /prateleiras/alterar/:id          >>> Alterar informações de uma prateleira

DELETE          /prateleira/deletar/:id           >>> Deletar uma prateleira cadastrada no sistema


***EndPoint Data*** -> OK

GET             /datas                      >>> Retorna a data atual + data de devolução do livro


