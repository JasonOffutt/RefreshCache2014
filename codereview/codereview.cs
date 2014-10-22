using System.Collections.Generic;
using System.Web;
using System.Web.Mvc;
using NewtonSoft.Json;

namespace CodeReviews
{
	public class CodeReviewController : Controller
	{
		public CodeReviewController(IFooService fooService)
		{
			m_fooService = fooService;
		}

		public ActionResult ListFoos()
		{
			IEnumerable<FooViewModel> foos = m_fooService.GetAllFoos().Select(FooMapper.Map);
			return new JsonDotNetResult(new { foos });
		}

		readonly IFooService m_fooService;
	}
}
