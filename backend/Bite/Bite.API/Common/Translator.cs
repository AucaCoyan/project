using Bite.API.Models;
using Bite.API.Models;
using Bite.Entity;

namespace Bite.API.Common
{
    public class Translator
    {
        public static Restaurant Translate(RestaurantModel model)
        {
            Restaurant obj = new Restaurant();
            obj.Name = model.Name;
            return obj;
        }
        public static Subsidiary Translate(SubsidiaryModel model)
        {
            Subsidiary obj = new Subsidiary();
            obj.Name = model.Name;
            return obj;
        }
    }
}
