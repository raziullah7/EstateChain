using Domain.Entities;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Persistence;

public class EstateChainDbContext(DbContextOptions<EstateChainDbContext> options) : DbContext(options)
{
    public DbSet<Property> Properties { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);
        
        // Ensuring correct precision for Price
        modelBuilder.Entity<Property>()
            .Property(p => p.Price)
            .HasConversion<double>();

        // Stores Enum as string (e.g., "Residential")
        modelBuilder.Entity<Property>()
            .Property(p => p.Category)
            .HasConversion<string>();
    }
}