CREATE TABLE Cliente (
    Telefone VARCHAR(10),
    Nome VARCHAR(50) NOT NULL,
    ID_Cliente INT PRIMARY KEY IDENTITY(1, 1),
    Idade INT
);

CREATE TABLE Viagem (
    Destino VARCHAR(50),
    ID_Viagem INT PRIMARY KEY,
    Data DATE,
    Origem VARCHAR(50),
    Hora TIME
);

CREATE TABLE Faz (
    fk_Cliente_ID_Cliente INT,
    fk_Viagem_ID_Viagem INT
);
 
ALTER TABLE Faz ADD CONSTRAINT FK_Faz_1
    FOREIGN KEY (fk_Cliente_ID_Cliente)
    REFERENCES Cliente (ID_Cliente)
    ON DELETE SET NULL;
 
ALTER TABLE Faz ADD CONSTRAINT FK_Faz_2
    FOREIGN KEY (fk_Viagem_ID_Viagem)
    REFERENCES Viagem (ID_Viagem)
    ON DELETE SET NULL;