CREATE TABLE usuarios (
    id_usuario SERIAL PRIMARY KEY,
    nome_usuario VARCHAR,
    nm_usuario VARCHAR UNIQUE NOT NULL,
    email_usuario VARCHAR UNIQUE NOT NULL,
    perfil_usuario VARCHAR,
    descricao_usuario VARCHAR(255),
    status_usuario BOOLEAN DEFAULT TRUE, --ativo/inativo
    data_criacao_usuario TIMESTAMP,
    data_atualizacao_usuario TIMESTAMP,
    data_desativacao_usuario TIMESTAMP
);

CREATE TABLE pessoas_fisicas (
    id_pessoa_fisica SERIAL PRIMARY KEY,
    nome_pessoa_fisica VARCHAR NOT NULL,
    cpf_pessoa_fisica VARCHAR UNIQUE NOT NULL,
    descricao_pessoa_fisica VARCHAR(255),
    status_pessoa_fisica BOOLEAN DEFAULT TRUE, --ativo/inativo
    data_criacao_pessoa_fisica TIMESTAMP,
    data_atualizacao_pessoa_fisica TIMESTAMP,
    data_desativacao_pessoa_fisica TIMESTAMP
);

CREATE TABLE pessoas_juridicas (
    id_pessoa_juridica SERIAL PRIMARY KEY,
    razao_social VARCHAR NOT NULL,
    nome_fantasia VARCHAR,
    cnpj VARCHAR UNIQUE NOT NULL,
    descricao_pessoa_juridica VARCHAR(255),
    status_pessoa_juridica BOOLEAN DEFAULT TRUE,
    data_criacao_pessoa_juridica TIMESTAMP,
    data_atualizacao_pessoa_juridica TIMESTAMP,
    data_desativacao_pessoa_juridica TIMESTAMP
);

CREATE TABLE contatos (
    id_contato SERIAL PRIMARY KEY,
    tipo_contato VARCHAR NOT NULL CHECK (tipo_contato IN ('whatsapp','celular','telefone','email')),
    valor_contato VARCHAR(50) NOT NULL,
    pessoa_fisica_id INT REFERENCES pessoas_fisicas(id_pessoa_fisica),
    pessoa_juridica_id INT REFERENCES pessoas_juridicas(id_pessoa_juridica),
    descricao_contato VARCHAR(255),
    status_contato BOOLEAN NOT NULL DEFAULT TRUE,
    data_criacao_contato TIMESTAMP,
    data_atualizacao_contato TIMESTAMP,
    data_desativacao_contato TIMESTAMP
);


CREATE TABLE enderecos (
    id_endereco SERIAL PRIMARY KEY,
    logradouro VARCHAR,
    numero VARCHAR,
    complemento VARCHAR,
    bairro VARCHAR,
    cidade VARCHAR,
    estado VARCHAR(2),
    cep VARCHAR(9),
    pessoa_fisica_id INT REFERENCES pessoas_fisicas(id_pessoa_fisica),
    pessoa_juridica_id INT REFERENCES pessoas_juridicas(id_pessoa_juridica),
    descricao_endereco VARCHAR(255),
    status_endereco BOOLEAN DEFAULT TRUE,
    data_criacao_endereco TIMESTAMP,
    data_atualizacao_endereco TIMESTAMP,
    data_desativacao_endereco TIMESTAMP
);

--- Tabela para status de contratos e certificados
CREATE TABLE estado_cc (
    id_estado SERIAL PRIMARY KEY,
    nome_estado VARCHAR NOT NULL, -- Ex: Ativo, Vencido, Em Análise, Pendente
    tipo_estado VARCHAR NOT NULL CHECK (tipo_estado IN ('Contrato','Certificado')),
    descricao_estado VARCHAR(255),
    status_estado BOOLEAN DEFAULT TRUE,
    data_criacao_estado TIMESTAMP,
    data_atualizacao_estado TIMESTAMP,
    data_desativacao_estado TIMESTAMP
);

CREATE TABLE contratos (
    id_contrato SERIAL PRIMARY KEY,
    titulo VARCHAR NOT NULL,
    numero VARCHAR,
    data_inicio DATE,
    data_fim DATE,
    estado_id INT REFERENCES estado_cc(id_estado),
    usuario_responsavel  INT REFERENCES usuarios(id_usuario),
    usuario_criador_id INT REFERENCES usuarios(id_usuario),
    usuario_ultima_edicao_id INT REFERENCES usuarios(id_usuario),
    data_ultima_edicao TIMESTAMP,
    pessoa_fisica_id INT REFERENCES pessoas_fisicas(id_pessoa_fisica),
    pessoa_juridica_id INT REFERENCES pessoas_juridicas(id_pessoa_juridica),
    descricao_contrato VARCHAR(255),
    status_contrato BOOLEAN DEFAULT TRUE,
    data_criacao_contrato TIMESTAMP,
    data_atualizacao_contrato TIMESTAMP,
    data_desativacao_contrato TIMESTAMP
);

CREATE TABLE tipos_certificados (
    id_tipo_certificado SERIAL PRIMARY KEY,
    nome_tipo_certificado VARCHAR NOT NULL, 
    descricao_tipo_certificado VARCHAR(255),
    status_tipo_certificado BOOLEAN DEFAULT TRUE,
    data_criacao_tipo_certificado TIMESTAMP,
    data_atualizacao_tipo_certificado TIMESTAMP,
    data_desativacao_tipo_certificado TIMESTAMP
);

CREATE TABLE certificados (
    id_certificado SERIAL PRIMARY KEY,
    nome_certificado VARCHAR NOT NULL,
    tipo_id INT REFERENCES tipos_certificados(id_tipo_certificado),
    data_emissao DATE,
    data_validade DATE,
    estado_id INT REFERENCES estado_cc(id_estado),
    pessoa_fisica_id INT REFERENCES pessoas_fisicas(id_pessoa_fisica),
    pessoa_juridica_id INT REFERENCES pessoas_juridicas(id_pessoa_juridica),
    usuario_criador_id INT REFERENCES usuarios(id_usuario),
    usuario_ultima_edicao_id INT REFERENCES usuarios(id_usuario),
    data_ultima_edicao TIMESTAMP,
    descricao_certificado VARCHAR(255),
    status_certificado BOOLEAN DEFAULT TRUE,
    data_criacao_certificado TIMESTAMP,
    data_atualizacao_certificado TIMESTAMP,
    data_desativacao_certificado TIMESTAMP
);

CREATE TABLE documentos (
    id_documento SERIAL PRIMARY KEY,
    nome_arquivo VARCHAR,
    caminho_url VARCHAR,
    tipo_mime VARCHAR,
    tamanho_bytes BIGINT,
    hash VARCHAR,
    contrato_id INT REFERENCES contratos(id_contrato),
    certificado_id INT REFERENCES certificados(id_certificado),
    descricao_documento VARCHAR(255),
    status_documento BOOLEAN DEFAULT TRUE,
    data_criacao_documento TIMESTAMP,
    data_atualizacao_documento TIMESTAMP,
    data_desativacao_documento TIMESTAMP
);