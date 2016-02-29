using Microsoft.Data.Entity;

namespace WebAppAngular2.DataContext
{
	public class CisContext : DbContext
	{
		protected override void OnConfiguring(DbContextOptionsBuilder options)
		{
			options.UseSqlServer(@"Data Source=MSK-VM-SQL-1\APPDB;Initial Catalog=cis_prog;Persist Security Info=True;User ID=programmer;Password=pRog369;MultipleActiveResultSets=True;Application Name=EntityFramework");
		}

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{

		}

		public virtual DbSet<MetaObject> MetaObjects { get; set; }
	}
}
