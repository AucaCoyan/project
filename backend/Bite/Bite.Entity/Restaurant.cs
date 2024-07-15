namespace Bite.Entity
{
    public class Restaurant
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public IList<Subsidiary> Subsidiaries { get; }
    }
}
