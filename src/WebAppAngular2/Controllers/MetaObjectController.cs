using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using WebAppAngular2.DataContext;
using Microsoft.Data.Entity;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAppAngular2.Controllers
{
	[Route("api/[controller]")]
	public class MetaObjectController : Controller
	{
		private readonly CisContext db;
		public MetaObjectController(CisContext _db)
		{
			this.db = _db;
		}

		// GET: api/MetaObject
		[HttpGet]
		public JsonResult Get()
		{
			var list = db.MetaObjects
							.OrderBy(m => m.Name)
							.Select(m => new
							{
								id = m.Id,
								name = m.Name,
								parentName = m.Parent.Name,
								typeName = m.Type.Name,
								mandatory = m.Mandatory,
								hint = m.Hint,
								sortOrder = m.SortOrder
							});

			return new JsonResult(list);
		}

		[HttpGet("{parent}")]
		public JsonResult Get(int parent)
		{
			var list = db.MetaObjects
						.Include(m=>m.Parent)
						.Include(m=>m.Type)
						.Where(m => m.IdParent == (parent < 1 ? (int?)null : parent))
						.OrderBy(m => m.Name)
						.ToList();

			var ret = list.Select(m => new
						{
							id = m.Id,
							name = m.Name,
							parentName = (m.IdParent != null ? m.Parent.Name : ""),
							typeName = (m.Type != null ? m.Type.Name : ""),
							mandatory = m.Mandatory,
							hint = m.Hint,
							sortOrder = m.SortOrder
						}).ToList<object>();

			return new JsonResult(ret);
		}



		//// POST api/MetaObject
		//[HttpPost]
		//      public void Post([FromBody]string value)
		//      {
		//      }

		//// PUT api/MetaObject/5
		//[HttpPut("{id}")]
		//      public void Put(int id, [FromBody]string value)
		//      {
		//      }

		//// DELETE api/MetaObject/5
		//[HttpDelete("{id}")]
		//      public void Delete(int id)
		//      {
		//      }
	}
}
