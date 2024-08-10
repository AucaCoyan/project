using Postgrest.Models;

namespace Bite.API.Models
{
    public class RestaurantModel
    {
        public int Id { get; set; }
        public string Name { get; set; }
        //public IList<SubsidiaryModel> Subsidiaries { get; set; }
    }
}
