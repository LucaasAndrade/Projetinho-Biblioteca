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
    
INSERT INTO tb_usuario(id_curso, id_turma_curso, nm_usuario, nr_telefone, ds_cpf, ds_observacoes, nr_livros_atrasados)
	VALUES(1, 4, 'Lucas Andrade', '(11) 95348-9023', '506.000.230-86', 'Sem observação', 0);
    
select *
	from tb_usuario;
    
            UPDATE tb_usuario
            SET
                nm_usuario      =   'asdas',
                nr_telefone     =   '123123312',
                ds_observacoes  =   'asdads'
            WHERE id_usuario = 8;
INSERT INTO tb_nascionalidade(nm_nascionalidade)
	VALUES('Brasil');

INSERT INTO tb_nascionalidade(nm_nascionalidade)
	VALUES('Inglaterra');


INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Åland Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Albania');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Algeria');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('American Samoa');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Andorra');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Angola');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Anguilla');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Antarctica');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Antigua and Barbuda');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Argentina');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Armenia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Aruba');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Australia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Austria');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Azerbaijan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Bahamas');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Bahrain');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Bangladesh');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Barbados');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Belarus');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Belgium');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Belize');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Benin');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Bermuda');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Bhutan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Bolivia (Plurinational State of)');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Bonaire, Saint Eustatius And Saba');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Bosnia and Herzegovina');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Botswana');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Bouvet Island');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Brazil');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('British Indian Ocean Territory');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Brunei Darussalam');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Bulgaria');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Burkina Faso');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Burundi');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Cabo Verde');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Cambodia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Cameroon');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Canada');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Cayman Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Central African Republic');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Chad');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Chile');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('China');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Christmas Island');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Cocos (Keeling) Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Colombia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Comoros');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Congo');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Cook Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Costa Rica');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Côte d''Ivoire');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Croatia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Cuba');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Curaçao');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Cyprus');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Czechia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Democratic People''s Republic of Korea');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Democratic Republic of the Congo');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Denmark');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Djibouti');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Dominica');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Dominican Republic');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Ecuador');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Egypt');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('El Salvador');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Equatorial Guinea');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Eritrea');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Estonia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Eswatini');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Ethiopia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('European Union');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Falkland Islands (Malvinas)');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Faroe Islands (Associate Member)');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Fiji');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Finland');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('France');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('French Guiana');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('French Polynesia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('French Southern and Antarctic Lands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Gabon');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Gambia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Georgia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Germany');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Ghana');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Gibraltar');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Greece');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Greenland');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Grenada');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Guadeloupe');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Guam');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Guatemala');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Guernsey');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Guinea');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Guinea-Bissau');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Guyana');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Haiti');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Heard Island And McDonald Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Holy See');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Honduras');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Hong Kong');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Hungary');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Iceland');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('India');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Indonesia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Iran (Islamic Republic of)');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Iraq');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Ireland');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Isle of Man');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Israel');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Italy');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Jamaica');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Japan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Jersey');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Jordan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Kazakhstan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Kenya');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Kiribati');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Kuwait');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Kyrgyzstan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Lao People''s Democratic Republic');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Latvia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Lebanon');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Lesotho');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Liberia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Libya');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Liechtenstein');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Lithuania');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Luxembourg');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Macao');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Madagascar');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Malawi');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Malaysia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Maldives');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Mali');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Malta');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Marshall Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Martinique');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Mauritania');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Mauritius');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Mayotte');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Mexico');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Micronesia (Federated States of)');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Monaco');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Mongolia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Montenegro');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Montserrat');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Morocco');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Mozambique');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Myanmar');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Namibia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Nauru');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Nepal');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Netherlands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('New Caledonia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('New Zealand');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Nicaragua');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Niger');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Nigeria');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Niue');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Norfolk Island');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('North Macedonia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Northern Mariana Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Norway');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Oman');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Pakistan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Palau');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Palestinian Territory, Occupied');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Panama');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Papua New Guinea');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Paraguay');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Peru');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Philippines');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Pitcairn Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Poland');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Portugal');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Puerto Rico');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Qatar');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Republic of Korea');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Republic of Moldova');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Réunion');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Romania');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Russian Federation');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Rwanda');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Saint Barthélemy');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Saint Helena, Ascension and Tristan da Cunha');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Saint Kitts and Nevis');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Saint Lucia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Saint Martin');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Saint Pierre and Miquelon');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Saint Vincent and the Grenadines');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Samoa');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('San Marino');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Sao Tome and Principe');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Saudi Arabia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Senegal');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Serbia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Seychelles');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Sierra Leone');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Singapore');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Sint Maarten');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Slovakia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Slovenia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Solomon Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Somalia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('South Africa');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('South Georgia and the South Sandwich Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('South Sudan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Spain');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Sri Lanka');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Sudan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Suriname');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Svalbard and Jan Mayen');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Sweden');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Switzerland');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Syrian Arab Republic');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Taiwan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Tajikistan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Thailand');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Timor-Leste');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Togo');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Tokelau (Associate Member)');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Tonga');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Trinidad and Tobago');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Tunisia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Turkey');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Turkmenistan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Turks and Caicos Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Tuvalu');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Uganda');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Ukraine');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('United Arab Emirates');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('United Kingdom');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('United Republic of Tanzania');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('United States Minor Outlying Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('United States of America');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('United States Virgin Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Uruguay');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Uzbekistan');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Vanuatu');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Venezuela (Bolivarian Republic of)');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Viet Nam');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Virgin Islands');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Wallis and Futuna');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Western Sahara');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Yemen');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Zambia');
INSERT INTO tb_nascionalidade(nm_nascionalidade) VALUES ('Zimbabwe');


INSERT INTO tb_autor(nm_autor, id_nascionalidade)
	VALUES('J. K. Rowling', 2);
    
INSERT INTO tb_genero(nm_genero)
	VALUES('Ficção');

INSERT INTO tb_cor(nm_cor)
	VALUES('Vermelho');

INSERT INTO tb_cor(nm_cor)
	VALUES('Laranja');
    
INSERT INTO tb_cor(nm_cor)
	VALUES('Verde');

INSERT INTO tb_situacao(nm_situacao)
	VALUES('Emprestado');

INSERT INTO tb_situacao(nm_situacao)
	VALUES('Livre');

INSERT INTO tb_prateleira(nr_prateleira)
	VALUES(1);
    
INSERT INTO tb_prateleira(nr_prateleira)
	VALUES(2);
    
INSERT INTO tb_prateleira(nr_prateleira)
	VALUES(3);

INSERT INTO tb_livro(id_autor, id_genero, id_cor, id_situacao, id_prateleira, nm_livro, nm_publicadora,ds_observacoes, ds_codigo_isbn)
	VALUES(1, 1,1,1,1,'Harry Potter e a Pedra Filosofal', 'Livraria Saraiva','Parcialmente danificado', '1d-2c-9a');
    
INSERT INTO tb_situacao_emprestimo(nm_situacao_emprestimo)
	VALUES('Ativo');
    
INSERT INTO tb_situacao_emprestimo(nm_situacao_emprestimo)
	VALUES('Atrasado');
    
INSERT INTO tb_emprestimo(id_usuario, id_livro, id_situacao_emprestimo, dt_retirada, dt_entrega)
	VALUES(1, 1, 1, "2022-12-28 22:30:21", "2023-1-10 10:10:10");
    
INSERT INTO tb_adm(nm_adm, dt_nascimento, ds_cpf)
	VALUES('admin', "2022-12-25", "123.456.789-10");
    
INSERT INTO tb_adm_login(id_adm, ds_chave_login, ds_senha)
	VALUES(1, "admin@admin.com", "frei@isnsf");
    
