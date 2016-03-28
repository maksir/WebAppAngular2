using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using WebAppAngular2.DataModels;
using Microsoft.Data.Entity;


// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAppAngular2.Controllers
{
	[Route("api/[controller]")]
	public class MetaObjectController : Controller
	{
		private readonly DataContext db;
		public MetaObjectController(DataContext context)
		{
			db = context;
		}
		// GET: api/values
		[HttpGet]
		public JsonResult Get()
		{
			return new JsonResult(db.MetaObject.OrderBy(m => m.Name));
		}

		// GET api/values/5
		[HttpGet("{parent}")]
		public JsonResult Get(int parent)
		{
			var list = db.MetaObject
							.Include(m => m.Parent)
							.Include(m => m.Type)
							.Where(m => m.IdParent == (parent < 1 ? (int?)null : parent))
							.OrderBy(m => m.Name)
							.ToList();

			var ret = list.Select(s => new
			{
				id = s.Id,
				name = s.Name,
				typeName = (s.Type != null ? s.Type.Name : ""),
				parentName = (s.Parent != null ? s.Parent.Name : ""),
				hint = s.Hint,
				mandatory = s.Mandatory,
				value = s.MetaObjectValue,
				sortOrder = s.SortOrder,
				children = new List<object>()
			});

			return new JsonResult(ret);
		}

		//// POST api/values
		//[HttpPost]
		//public void Post([FromBody]string value)
		//{
		//}

		//// PUT api/values/5
		//[HttpPut("{id}")]
		//public void Put(int id, [FromBody]string value)
		//{
		//}

		//// DELETE api/values/5
		//[HttpDelete("{id}")]
		//public void Delete(int id)
		//{
		//}
	}
}
