using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Bite.Data.Migrations
{
    /// <inheritdoc />
    public partial class Order_RenameFields : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_DinningTable_Subsidiary_SubsidiaryId",
                table: "DinningTable");

            migrationBuilder.DropForeignKey(
                name: "FK_Order_DinningTable_TableId",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderItem_MenuItem_ItemId",
                table: "OrderItem");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderItem_Order_OrderId",
                table: "OrderItem");

            migrationBuilder.DropIndex(
                name: "IX_OrderItem_ItemId",
                table: "OrderItem");

            migrationBuilder.DropIndex(
                name: "IX_DinningTable_SubsidiaryId",
                table: "DinningTable");

            migrationBuilder.RenameColumn(
                name: "ItemId",
                table: "OrderItem",
                newName: "MenuItemId");

            migrationBuilder.RenameColumn(
                name: "TableId",
                table: "Order",
                newName: "DinningTableId");

            migrationBuilder.RenameColumn(
                name: "DateTime",
                table: "Order",
                newName: "CreatedTime");

            migrationBuilder.RenameIndex(
                name: "IX_Order_TableId",
                table: "Order",
                newName: "IX_Order_DinningTableId");

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "OrderItem",
                type: "integer",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "integer");

            migrationBuilder.AlterColumn<string>(
                name: "Comment",
                table: "OrderItem",
                type: "text",
                nullable: true,
                oldClrType: typeof(string),
                oldType: "text");

            migrationBuilder.AddForeignKey(
                name: "FK_Order_DinningTable_DinningTableId",
                table: "Order",
                column: "DinningTableId",
                principalTable: "DinningTable",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItem_Order_OrderId",
                table: "OrderItem",
                column: "OrderId",
                principalTable: "Order",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Order_DinningTable_DinningTableId",
                table: "Order");

            migrationBuilder.DropForeignKey(
                name: "FK_OrderItem_Order_OrderId",
                table: "OrderItem");

            migrationBuilder.RenameColumn(
                name: "MenuItemId",
                table: "OrderItem",
                newName: "ItemId");

            migrationBuilder.RenameColumn(
                name: "DinningTableId",
                table: "Order",
                newName: "TableId");

            migrationBuilder.RenameColumn(
                name: "CreatedTime",
                table: "Order",
                newName: "DateTime");

            migrationBuilder.RenameIndex(
                name: "IX_Order_DinningTableId",
                table: "Order",
                newName: "IX_Order_TableId");

            migrationBuilder.AlterColumn<int>(
                name: "OrderId",
                table: "OrderItem",
                type: "integer",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "integer",
                oldNullable: true);

            migrationBuilder.AlterColumn<string>(
                name: "Comment",
                table: "OrderItem",
                type: "text",
                nullable: false,
                defaultValue: "",
                oldClrType: typeof(string),
                oldType: "text",
                oldNullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_OrderItem_ItemId",
                table: "OrderItem",
                column: "ItemId");

            migrationBuilder.CreateIndex(
                name: "IX_DinningTable_SubsidiaryId",
                table: "DinningTable",
                column: "SubsidiaryId");

            migrationBuilder.AddForeignKey(
                name: "FK_DinningTable_Subsidiary_SubsidiaryId",
                table: "DinningTable",
                column: "SubsidiaryId",
                principalTable: "Subsidiary",
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
                name: "FK_OrderItem_MenuItem_ItemId",
                table: "OrderItem",
                column: "ItemId",
                principalTable: "MenuItem",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_OrderItem_Order_OrderId",
                table: "OrderItem",
                column: "OrderId",
                principalTable: "Order",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
