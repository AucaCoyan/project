using Bite.API.Models;
using Bite.Entity;

namespace Bite.API.Common
{
    public static class Translator
    {
        public static Restaurant Translate(RestaurantModel model)
        {
            Restaurant obj = new Restaurant();
            obj.Name = model.Name;
            if(model.Id > 0) obj.Id = model.Id;
            return obj;
        }
        public static Subsidiary Translate(SubsidiaryModel model)
        {
            Subsidiary obj = new Subsidiary();
            obj.Name = model.Name;
            return obj;
        }
        public static MenuItem Translate(MenuItemModel model)
        {
            MenuItem obj = new MenuItem();
            if (model.Id > 0) obj.Id = model.Id;
            obj.Name = model.Name;
            obj.Description = model.Description;
            obj.Price = model.Price;
            obj.Type = (MenuItemType)model.Type;
            return obj;
        }

        public static Order Translate(OrderModelPost model)
        {
            Order obj = new Order
            {
                CreatedTime = DateTime.UtcNow,
                Status = OrderStatus.Pending,
                Items = Translate(model.Items)
            };
            return obj;
        }
        public static IList<OrderItem> Translate(IList<OrderItemModel> models)
        {
            IList<OrderItem> items = new List<OrderItem>();
            foreach (OrderItemModel model in models)
            {
                items.Add(Translate(model));
            }
            return items;
        }
        public static OrderItem Translate(OrderItemModel model)
        {
            OrderItem obj = new OrderItem
            {
                Comment = model.Comment,
                Quantity = model.Quantity,
                MenuItemId = model.MenuItemId
            };
            return obj;

        }
    }
}
