using Bite.Entity;
using Microsoft.EntityFrameworkCore;

namespace Bite.Data
{
    public class BiteContext : DbContext
    {
        public BiteContext (DbContextOptions<BiteContext> options) : base(options) 
        { 

        }

        public DbSet<Restaurant> Restaurant { get; set; }
        public DbSet<Subsidiary> Subsidiary { get; set; }
        public DbSet<DinningTable> DinningTable { get; set; }

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
