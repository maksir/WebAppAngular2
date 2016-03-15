using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace WebAppAngular2.Controllers
{
	[Route("api/[controller]")]
	public class TreeController : Controller
	{

		private IList<TreeNode> treeData = new List<TreeNode>()
		{
			new TreeNode {id = 1, name = "Tree Node 1", parentId = 0 },
			new TreeNode {id = 100, name = "Sub tree 1", parentId = 1},
			new TreeNode {id = 101, name = "Sub tree 2", parentId = 1},
			new TreeNode {id = 102, name = "Sub tree 3", parentId = 1},
			new TreeNode {id = 103, name = "Sub tree 4", parentId = 1},

			new TreeNode {id = 2, name = "Tree Node 2", parentId = 0 },
			new TreeNode {id = 200, name = "Sub tree 200", parentId = 2},
			new TreeNode {id = 201, name = "Sub tree 201", parentId = 2},
			new TreeNode {id = 202, name = "Sub tree 202", parentId = 2},
			new TreeNode {id = 203, name = "Sub tree 203", parentId = 2},

			new TreeNode {id = 3, name = "Tree Node 3", parentId = 0 },
			new TreeNode {id = 300, name = "Sub tree 300", parentId = 3},
			new TreeNode {id = 301, name = "Sub tree 301", parentId = 3},
			new TreeNode {id = 302, name = "Sub tree 302", parentId = 3},
			new TreeNode {id = 303, name = "Sub tree 303", parentId = 3}
		};


		// GET api/values/5
		[HttpGet("{parent}")]
		public IActionResult Get(int parent)
		{
			var nodes = treeData
							.Where(m => m.parentId == parent)
							.OrderBy(m => m.name)
							.Select(m => new
							{
								parent = treeData.FirstOrDefault(p => p.id == m.parentId),
								id = m.id,
								name = m.name,
								children = new List<TreeNode>()
							})
							.ToList<object>();

			return new JsonResult(nodes);
		}

	}


	public class TreeNode
	{
		public int id { get; set; }
		public string name { get; set; }
		public int parentId { get; set; }
	}
}
