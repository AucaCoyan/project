using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace Bite.Data.Migrations
{
    /// <inheritdoc />
    public partial class Foreignrelations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<string>(
                name: "Name",
                table: "Waiter",
                type: "text",
                nullable: false,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.CreateTable(
                name: "OrderItem",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    OrderId = table.Column<int>(type: "integer", nullable: false),
                    ItemId = table.Column<int>(type: "integer", nullable: false),
                    Quantity = table.Column<int>(type: "integer", nullable: false),
                    Comment = table.Column<string>(type: "text", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderItem", x => x.Id);
                    table.ForeignKey(
                        name: "FK_OrderItem_MenuItem_ItemId",
                        column: x => x.ItemId,
                        principalTable: "MenuItem",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_OrderItem_Order_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Order",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Subsidiary_RestaurantId",
                table: "Subsidiary",
                column: "RestaurantId");

            migrationBuilder.CreateIndex(
                name: "IX_Order_TableId",
                table: "Order",
                column: "TableId");

            migrationBuilder.CreateIndex(
                name: "IX_MenuItem_RestaurantId",
                table: "MenuItem",
                column: "RestaurantId");

            migrationBuilder.CreateIndex(
                name: "IX_DinningTable_SubsidiaryId",
                table: "DinningTable",
                column: "SubsidiaryId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderItem_ItemId",
                table: "OrderItem",
                column: "ItemId");

            migrationBuilder.CreateIndex(
                name: "IX_OrderItem_OrderId",
                table: "OrderItem",
                column: "OrderId");

            migrationBuilder.AddForeignKey(
                name: "FK_DinningTable_Subsidiary_SubsidiaryId",
                table: "DinningTable",
                column: "SubsidiaryId",
                principalTable: "Subsidiary",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_MenuItem_Restaurant_RestaurantId",
                table: "MenuItem",
                column: "RestaurantId",
                principalTable: "Restaurant",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Order_DinningTable_TableId",
                table: "Order",
                column: "TableId",
                principalTable: "DinningTable",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Subsidiary_Restaurant_RestaurantId",
                table: "Subsidiary",
                column: "RestaurantId",
                principalTable: "Restaurant",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DinningTable_Subsidiary_SubsidiaryId",
                table: "DinningTable");

            migrationBuilder.DropForeignKey(
                name: "FK_MenuItem_Restaurant_RestaurantId",
                table: "MenuItem");

            migrationBuilder.DropForeignKey(
                name: "FK_Order_DinningTable_TableId",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_Subsidiary_Restaurant_RestaurantId",
                table: "Subsidiary");

            migrationBuilder.DropTable(
                name: "OrderItem");

            migrationBuilder.DropIndex(
                name: "IX_Subsidiary_RestaurantId",
                table: "Subsidiary");

            migrationBuilder.DropIndex(
                name: "IX_Order_TableId",
                table: "Order");

            migrationBuilder.DropIndex(
                name: "IX_MenuItem_RestaurantId",
                table: "MenuItem");

            migrationBuilder.DropIndex(
                name: "IX_DinningTable_SubsidiaryId",
                table: "DinningTable");

            migrationBuilder.AlterColumn<int>(
                name: "Name",
                table: "Waiter",
                type: "integer",
                nullable: false,
                oldClrType: typeof(string),
                oldType: "text");
        }
    }
}
