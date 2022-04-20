using Microsoft.EntityFrameworkCore.Migrations;

namespace AgenciaViagem.Migrations
{
    public partial class AgenciaViagemDB : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cliente",
                columns: table => new
                {
                    ID_Cliente = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nome = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Cpf = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Telefone = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cliente", x => x.ID_Cliente);
                });

            migrationBuilder.CreateTable(
                name: "Viagem",
                columns: table => new
                {
                    ID_Viagem = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Partida = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Destino = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Origem = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Viagem", x => x.ID_Viagem);
                });

            migrationBuilder.CreateTable(
                name: "Faz",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClienteID_Cliente = table.Column<int>(type: "int", nullable: false),
                    ViagemID_Viagem = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Faz", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Faz_Cliente_ClienteID_Cliente",
                        column: x => x.ClienteID_Cliente,
                        principalTable: "Cliente",
                        principalColumn: "ID_Cliente",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Faz_Viagem_ViagemID_Viagem",
                        column: x => x.ViagemID_Viagem,
                        principalTable: "Viagem",
                        principalColumn: "ID_Viagem",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Faz_ClienteID_Cliente",
                table: "Faz",
                column: "ClienteID_Cliente");

            migrationBuilder.CreateIndex(
                name: "IX_Faz_ViagemID_Viagem",
                table: "Faz",
                column: "ViagemID_Viagem");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Faz");

            migrationBuilder.DropTable(
                name: "Cliente");

            migrationBuilder.DropTable(
                name: "Viagem");
        }
    }
}
