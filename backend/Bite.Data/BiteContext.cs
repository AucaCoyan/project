using Bite.Entity;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Metadata;

namespace Bite.Data
{
    public class BiteContext : DbContext
    {
        public BiteContext (DbContextOptions<BiteContext> options) : base(options) 
        { 

        }

        public DbSet<DinningTable> DinningTable { get; set; }
        public DbSet<MenuItem> MenuItem { get; set; }
        public DbSet<Order> Order { get; set; }
        public DbSet<OrderItem> OrderItem { get; set; }
        public DbSet<Restaurant> Restaurant { get; set; }
        public DbSet<Subsidiary> Subsidiary { get; set; }
        public DbSet<Waiter> Waiter { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseNpgsql();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            //modelBuilder.Entity<Prueba>().HasKey(x => x.Id);

        }
    }
}
