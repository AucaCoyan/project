using Bite.Entity;
using Postgrest.Models;

namespace Bite.API.Models
{
    public class MenuItemModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
        public int Type { get; set; }
        public int RestaurantId { get; set; }
    }
}
