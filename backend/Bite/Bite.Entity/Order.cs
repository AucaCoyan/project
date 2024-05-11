namespace Bite.Entity
{
    public class Order
    {
        public int Id { get; set; }
        public DinningTable Table { get; set; }
        public OrderStatus Status { get; set; }
        public DateTime DateTime { get; set; }
        public decimal Total { get; set; }
        public Waiter Waiter { get; set; }
    }

    public enum OrderStatus
    {
        Pending = 1,
        Ready = 2,
        Delivered = 3,
        Cancelled = 4
    }
}
