namespace Bite.Entity
{
    public class Order
    {
        public int Id { get; set; }
        public DinningTable DinningTable { get; set; }
        public OrderStatus Status { get; set; }
        public DateTime CreatedTime { get; set; }
        public decimal Total { get; set; }
        public Waiter Waiter { get; set; }
        public IList<OrderItem> Items { get; set; }
    }

    public enum OrderStatus
    {
        Pending = 1,
        ReadyToDeliver = 2,
        Delivered = 3,
        Cancelled = 4
    }
}
