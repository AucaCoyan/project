using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bite.Data.Migrations
{
    /// <inheritdoc />
    public partial class NombreSubsidiaria : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Subsidiary_Restaurant_RestaurantId",
                table: "Subsidiary");

            migrationBuilder.AlterColumn<int>(
                name: "RestaurantId",
                table: "Subsidiary",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AddColumn<string>(
                name: "Name",
                table: "Subsidiary",
                type: "text",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddForeignKey(
                name: "FK_Subsidiary_Restaurant_RestaurantId",
                table: "Subsidiary",
                column: "RestaurantId",
                principalTable: "Restaurant",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Subsidiary_Restaurant_RestaurantId",
                table: "Subsidiary");

            migrationBuilder.DropColumn(
                name: "Name",
                table: "Subsidiary");

            migrationBuilder.AlterColumn<int>(
                name: "RestaurantId",
                table: "Subsidiary",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Subsidiary_Restaurant_RestaurantId",
                table: "Subsidiary",
                column: "RestaurantId",
                principalTable: "Restaurant",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
