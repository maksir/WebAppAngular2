using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace WebAppAngular2.DataContext
{
	[Table("MetaObject")]
	public class MetaObject
    {
		[Key]
		public int Id { get; set; }

		public string Name { get; set; }

		public int? IdParent { get; set; }

		public int? IdType { get; set; }

		public bool Mandatory { get; set; }

		public string Hint { get; set; }

		public int? SortOrder { get; set; }

		public string MetaObjectValue { get; set; }

		public string CreatedBy { get; set; }

		public DateTime CreatedDate { get; set; }

		public string LastUpdatedBy { get; set; }

		public DateTime LastUpdatedDate { get; set; }

		[ForeignKey("IdParent")]
		public virtual MetaObject Parent { get; set; }

		[ForeignKey("IdType")]
		public virtual MetaObject Type { get; set; }

	}
}
