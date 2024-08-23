using Bite.Entity;

namespace Bite.API.Models
{
    public class OrderModelPost
    {
        public OrderModelPost()
        {
            Items = new List<OrderItemModel>();
        }
        public int DinningTableId { get; set; }
        public int WaiterId { get; set; }
        public IList<OrderItemModel> Items { get; set; }
    }
}
