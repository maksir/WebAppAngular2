using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace WebAppAngular2.DataModels
{
	public partial class MetaObject
	{
		public int Id { get; set; }
		[Required]
		[MaxLength(50)]
		public string CreatedBy { get; set; }
		public DateTime CreatedDate { get; set; }
		[MaxLength(500)]
		public string Hint { get; set; }
		public int? IdParent { get; set; }
		public int? IdType { get; set; }
		[Required]
		[MaxLength(50)]
		public string LastUpdatedBy { get; set; }
		public DateTime LastUpdatedDate { get; set; }
		public bool Mandatory { get; set; }
		[MaxLength(500)]
		public string MetaObjectValue { get; set; }
		[Required]
		[MaxLength(100)]
		public string Name { get; set; }
		public int? SortOrder { get; set; }

		[ForeignKey("IdParent")]
		public virtual MetaObject Parent { get; set; }

		[ForeignKey("IdType")]
		public virtual MetaObject Type { get; set; }

	}
}
