using Bite.Entity;

namespace Bite.API.Models
{
    public class OrderItemModel
    {
        public OrderItemModel()
        {
        }
        public int MenuItemId { get; set; }
        public int Quantity { get; set; }
        public string? Comment { get; set; }
    }
}
