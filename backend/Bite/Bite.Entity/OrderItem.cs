namespace Bite.Entity
{
    public class OrderItem
    {
        public int Id { get; set; }
        public Order Order { get; set; }
        public MenuItem Item { get; set; }
        public int Quantity { get; set; }
        public string Comment { get; set; }
    }
}
