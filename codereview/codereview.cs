using System.Collections.Generic;
using System.Web;
using System.Web.Mvc;
using NewtonSoft.Json;

namespace CodeReviews
{
	public class CodeReviewController : Controller
	{
		public CodeReviewController(IFooService fooService, IBarService barService)
		{
			m_fooService = fooService;
			m_barService = barService;
		}

		public ActionResult ListFoos()
		{
			IEnumerable<FooViewModel> foos = m_fooService.GetAllFoos().Select(FooMapper.Map);
			return new JsonDotNetResult(new { foos });
		}

		public ActionResult BarService()
		{
			IEnumerable<BarViewModel> bars = m_barService.GetAllBars().Select(BarMapper.Map);
			return Json(bars);
		}

		readonly IFooService m_fooService;
		readonly IBarService m_barService;
	}
}
