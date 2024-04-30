using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebAPIWithReactProject.Models;

public partial class TravellerDbContext : DbContext
{
    public virtual DbSet<NoteworthyTraveller> NoteworthyTravellers => Set<NoteworthyTraveller>();
    
    public TravellerDbContext(DbContextOptions<TravellerDbContext> options)
        : base(options)
    {
    }
    
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseSqlite("Data Source=/Users/thomas.greiner/SQLITEDBS/TravellerDB");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<NoteworthyTraveller>(entity =>
        {
            entity.Property(e => e.Id)
                .ValueGeneratedNever()
                .HasColumnType("INT");
            entity.Property(e => e.HomeRealm).HasColumnType("VARCHAR(255)");
            entity.Property(e => e.Iq).HasColumnType("INT");
            entity.Property(e => e.TravellerClass).HasColumnType("VARCHAR(50)");
            entity.Property(e => e.TravellerName).HasColumnType("VARCHAR(255)");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
