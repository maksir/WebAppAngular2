using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace WebAppAngular2.DataModels
{
    public class DataContext : DbContext
    {
		protected override void OnConfiguring(DbContextOptionsBuilder options)
		{
			options.UseSqlServer(@"Data Source=winserv2012\sql2014;Initial Catalog=cist;Integrated Security=True");
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.Entity<MetaObject>(entity =>
			{
				entity.HasIndex(e => e.IdParent).HasName("FK_Parent_I");

				entity.HasIndex(e => e.IdType).HasName("FK_Type_I");

				entity.HasIndex(e => e.Name).HasName("IX_Name");

				entity.HasIndex(e => new { e.Name, e.IdParent }).HasName("UK_MetaObject").IsUnique();

				entity.Property(e => e.CreatedBy).HasDefaultValueSql("suser_sname()");

				entity.Property(e => e.CreatedDate)
					.HasColumnType("datetime")
					.HasDefaultValueSql("getdate()");

				entity.Property(e => e.LastUpdatedBy).HasDefaultValueSql("suser_sname()");

				entity.Property(e => e.LastUpdatedDate)
					.HasColumnType("datetime")
					.HasDefaultValueSql("getdate()");

				entity.Property(e => e.Mandatory).HasDefaultValue(false);
			});
		}

		public virtual DbSet<MetaObject> MetaObject { get; set; }
	}
}
