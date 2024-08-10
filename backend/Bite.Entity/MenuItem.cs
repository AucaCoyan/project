namespace Bite.Entity
{
    public class MenuItem
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public MenuItemType Type { get; set; }
        public Restaurant Restaurant { get; set; }
    }

    public enum MenuItemType
    {
        Food = 1,
        Drink = 2,
        Dessert = 3
    }
}