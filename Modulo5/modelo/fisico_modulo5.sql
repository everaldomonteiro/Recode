CREATE TABLE Cliente (
    ID_Cliente INT PRIMARY KEY IDENTITY(1, 1),
    Cpf VARCHAR (11) NOT NULL,
    Nome VARCHAR (255) NOT NULL,
    Telefone VARCHAR (11)
);

CREATE TABLE Viagem (
    ID_Viagem INT PRIMARY KEY IDENTITY(1, 1),
    Destino VARCHAR (20),
    Origem VARCHAR (20),
    Partida VARCHAR (20)
);

CREATE TABLE Passagem (
    fk_Cliente_ID_Cliente INT,
    fk_Viagem_ID_Viagem INT
);
 
ALTER TABLE Passagem ADD CONSTRAINT FK_Passagem_1
    FOREIGN KEY (fk_Cliente_ID_Cliente)
    REFERENCES Cliente (ID_Cliente)
    ON DELETE SET NULL;
 
ALTER TABLE Passagem ADD CONSTRAINT FK_Passagem_2
    FOREIGN KEY (fk_Viagem_ID_Viagem)
    REFERENCES Viagem (ID_Viagem)
    ON DELETE SET NULL;