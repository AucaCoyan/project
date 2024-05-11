namespace Bite.Entity
{
    public class MenuItem
    {
        public int Id { get; set; }
        public int Name { get; set; }
        public int Description { get; set; }
        public int Price { get; set; }
        public int Type { get; set; }
        public Restaurant Restaurant { get; set; }
    }
}
