CREATE TABLE Login_Cliente (
    id_login SERIAL PRIMARY KEY,
    campo_login VARCHAR(40) NOT NULL,
    senha_login VARCHAR(20) NOT NULL
);

CREATE TABLE Plano (
    id_plano SERIAL PRIMARY KEY,
    tipo_plano VARCHAR CHECK (tipo_plano IN ('Gratuito','Trial','Básico','Silver','Gold','Diamond')) NOT NULL, -- modificar se necessario
    valor_plano INTEGER NOT NULL,
    inicio_plano TIMESTAMPTZ(0) DEFAULT NOW() NOT NULL,
    termino_plano TIMESTAMPTZ(0) DEFAULT NOW() NOT NULL,
    status_plano BOOLEAN NOT NULL,
    descricao_plano TEXT NOT NULL
);

CREATE TABLE Empresa (
    id_empresa SERIAL PRIMARY KEY,
    razao_social VARCHAR(30) NOT NULL,
    nome_fantasia VARCHAR(30) NOT NULL,
    CNPJ CHAR(14) NOT NULL UNIQUE,
    descricao_empresa TEXT NULL,
    ativacao_empresa TIMESTAMPTZ(0) DEFAULT NOW() NOT NULL,
    atualizacao_empresa TIMESTAMPTZ(0) DEFAULT NULL,
    desativacao_empresa TIMESTAMPTZ(0) DEFAULT NULL,
    status_empresa BOOLEAN NOT NULL,
    fk_plano_id_plano INTEGER REFERENCES Plano(id_plano) ON DELETE SET NULL
);

CREATE TABLE Contrato (
    id_contrato SERIAL PRIMARY KEY,
    titulo_contrato VARCHAR(100) NOT NULL,
    numero_contrato TEXT NOT NULL,
    data_inicio DATE NOT NULL,
    ativacao_contrato TIMESTAMPTZ(0) DEFAULT NOW() NOT NULL,
    data_fim DATE NOT NULL,
    atualizacao_contrato TIMESTAMPTZ(0) DEFAULT NULL,
    desativacao_contrato TIMESTAMPTZ(0) DEFAULT NULL,
    status_contrato BOOLEAN NOT NULL,
    descricacao_contrato TEXT NULL
);

CREATE TABLE Pessoa_Fisica (
    id_pessoa_fisica SERIAL PRIMARY KEY,
    nome_pessoa_fisica VARCHAR(50) NOT NULL,
    CPF CHAR(11) NOT NULL UNIQUE,
    ativacao_pessoa_fisica TIMESTAMPTZ(0) DEFAULT NOW() NOT NULL,
    atualizacao_pessoa_fisica TIMESTAMPTZ(0) DEFAULT NULL,
    desativacao_pessoa_fisica TIMESTAMPTZ(0) DEFAULT NULL,
    status_pessoa_fisica BOOLEAN NOT NULL,
    descricao_pessoa_fisica TEXT NULL,
    fk_empresa_id_empresa INTEGER REFERENCES Empresa(id_empresa) ON DELETE CASCADE
);

CREATE TABLE Funcionario (
    id_funcionario SERIAL PRIMARY KEY,
    nome_funcionario VARCHAR(30) NOT NULL,
    contato_funcionario CHAR(14) NOT NULL UNIQUE, --celular com DDD
    email_funcionario VARCHAR(50) NOT NULL,
    perfil_funcionario VARCHAR(50) NOT NULL,
    descricao_funcionario TEXT NULL,
    ativacao_funcionario TIMESTAMPTZ(0) DEFAULT NOW() NOT NULL,
    atualizacao_funcionario TIMESTAMPTZ(0) DEFAULT NULL,
    desativacao_funcionario TIMESTAMPTZ(0) DEFAULT NULL,
    status_funcionario BOOLEAN NOT NULL,
    fk_empresa_id_empresa INTEGER REFERENCES Empresa(id_empresa) ON DELETE RESTRICT
);

CREATE TABLE Contatos (
    id_contatos SERIAL PRIMARY KEY,
    campo_contato VARCHAR(50) NOT NULL,
    tipo_contato VARCHAR(20) CHECK (tipo_contato IN ('whatsapp','celular','telefone','email')) NOT NULL, --modificar se necessario
    descricao_contato VARCHAR(30) NOT NULL,
    status_contato BOOLEAN NOT NULL,
    ativacao_contatos TIMESTAMPTZ(0) DEFAULT NOW() NOT NULL,
    atualizacao_contatos TIMESTAMPTZ(0) DEFAULT NULL,
    desativacao_contatos TIMESTAMPTZ(0) DEFAULT NULL,
    fk_empresa_id_empresa INTEGER NULL REFERENCES Empresa(id_empresa) ON DELETE RESTRICT,
    fk_pessoa_fisica_id_pessoa_fisica INTEGER NULL REFERENCES Pessoa_Fisica(id_pessoa_fisica) ON DELETE RESTRICT
);

CREATE TABLE Certificado (
    id_certificado SERIAL PRIMARY KEY,
    nome_certificado VARCHAR(50) NOT NULL,
    data_emissao DATE NOT NULL,
    data_validade DATE NOT NULL,
    ativacao_certificado TIMESTAMPTZ(0) DEFAULT NOW() NOT NULL,
    atualizacao_certificado TIMESTAMPTZ(0) DEFAULT NULL,
    desativacao_certificado TIMESTAMPTZ(0) DEFAULT NULL,
    status_certificado BOOLEAN NOT NULL
);

CREATE TABLE Documento (
    id_documento SERIAL PRIMARY KEY,
    nome_documento VARCHAR(50) NOT NULL,
    caminho_url TEXT NOT NULL,
    tipo_mime VARCHAR(100) NOT NULL,
    tamanho_bytes BIGINT NOT NULL,
    hash_documento VARCHAR(255) NOT NULL,
    descricao_documento TEXT NOT NULL,
    ativacao_documento TIMESTAMPTZ(0) DEFAULT NOW() NOT NULL,
    atualizacao_documento TIMESTAMPTZ(0) DEFAULT NULL,
    desativacao_documento TIMESTAMPTZ(0) DEFAULT NULL,
    status_documento BOOLEAN NOT NULL,
    fk_contrato_id_contrato INTEGER NULL REFERENCES Contrato(id_contrato) ON DELETE CASCADE,
    fk_certificado_id_certificado INTEGER NULL REFERENCES Certificado(id_certificado) ON DELETE CASCADE
);

CREATE TABLE Tipo_Certificado (
    id_tipo_certificado SERIAL PRIMARY KEY,
    nome_tipo_certificado VARCHAR(50) NOT NULL,
    descricao_tipo_certificado TEXT NOT NULL
);

CREATE TABLE Endereco (
    logradouro VARCHAR(50) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    bairro VARCHAR(50) NOT NULL,
    cidade VARCHAR(50) NOT NULL,
    estado VARCHAR(30) CHECK (
        estado IN (
            'Acre','Alagoas','Amapá','Amazonas',
            'Bahia',
            'Ceará',
            'Distrito Federal',
            'Espírito Santo',
            'Goiás',
            'Maranhão','Mato Grosso','Mato Grosso do Sul','Minas Gerais',
            'Pará','Paraíba','Paraná','Pernambuco','Piauí',
            'Rio de Janeiro','Rio Grande do Norte','Rio Grande do Sul','Rondônia','Roraima',
            'Santa Catarina','São Paulo','Sergipe',
            'Tocantins'
        )
    ) NOT NULL,
    CEP CHAR(8) NOT NULL,
    complemento VARCHAR(50) NOT NULL,
    status_endereco BOOLEAN NOT NULL,
    ativacao_endereco TIMESTAMPTZ(0) DEFAULT NOW() NOT NULL,
    atualizacao_endereco TIMESTAMPTZ(0) DEFAULT NULL,
    desativacao_endereco TIMESTAMPTZ(0) DEFAULT NULL,
    fk_empresa_id_empresa INTEGER NULL REFERENCES Empresa(id_empresa) ON DELETE RESTRICT,
    fk_pessoa_fisica_id_pessoa_fisica INTEGER NULL REFERENCES Pessoa_Fisica(id_pessoa_fisica) ON DELETE RESTRICT
);


CREATE TABLE login_empresa (
    id_login_empresa SERIAL PRIMARY KEY,
    fk_empresa_id_empresa INTEGER REFERENCES Empresa(id_empresa) ON DELETE RESTRICT,
    fk_login_id_login INTEGER REFERENCES Login_Cliente(id_login) ON DELETE SET NULL
);

CREATE TABLE empresa_contrato (
    id_empresa_contrato SERIAL PRIMARY KEY,
    categoria_empresa_contrato VARCHAR(20) CHECK (categoria_empresa_contrato IN ('proprietária','terceirizada')) NOT NULL,
    fk_empresa_id_empresa INTEGER REFERENCES Empresa(id_empresa) ON DELETE RESTRICT,
    fk_contrato_id_contrato INTEGER REFERENCES Contrato(id_contrato) ON DELETE SET NULL
);

CREATE TABLE pessoa_contrato (
    id_pessoa_contrato SERIAL PRIMARY KEY,
    categoria_pessoa_contrato VARCHAR(20) CHECK (categoria_pessoa_contrato IN ('proprietária','terceirizada',)) NOT NULL,
    fk_pessoa_fisica_id_pessoa_fisica INTEGER REFERENCES Pessoa_Fisica(id_pessoa_fisica) ON DELETE SET NULL,
    fk_contrato_id_contrato INTEGER REFERENCES Contrato(id_contrato) ON DELETE SET NULL
);

CREATE TABLE pessoa_certificado (
    id_pessoa_certificado SERIAL PRIMARY KEY,
    fk_certificado_id_certificado INTEGER REFERENCES Certificado(id_certificado) ON DELETE SET NULL,
    fk_pessoa_fisica_id_pessoa_fisica INTEGER REFERENCES Pessoa_Fisica(id_pessoa_fisica) ON DELETE SET NULL
);

CREATE TABLE empresa_certificado (
    id_empresa_certificado SERIAL PRIMARY KEY,
    fk_empresa_id_empresa INTEGER REFERENCES Empresa(id_empresa) ON DELETE RESTRICT,
    fk_certificado_id_certificado INTEGER REFERENCES Certificado(id_certificado) ON DELETE SET NULL
);

CREATE TABLE certificado_tipoCertificado (
    id_certificado_tipocertificado SERIAL PRIMARY KEY,
    fk_tipo_certificado_id_tipo_certificado INTEGER REFERENCES Tipo_Certificado(id_tipo_certificado) ON DELETE RESTRICT,
    fk_certificado_id_certificado INTEGER REFERENCES Certificado(id_certificado) ON DELETE SET NULL
);
