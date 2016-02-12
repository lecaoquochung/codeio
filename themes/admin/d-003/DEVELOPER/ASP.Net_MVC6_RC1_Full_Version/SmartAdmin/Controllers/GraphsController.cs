#region Using

using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

#endregion

namespace SmartAdmin.Controllers
{
    [Authorize]
    public class GraphsController : Controller
    {
        // GET: graphs/flot
        public ActionResult Flot()
        {
            return View();
        }

        // GET: graphs/morris
        public ActionResult Morris()
        {
            return View();
        }

        // GET: graphs/inline
        public ActionResult Inline()
        {
            return View();
        }

        // GET: graphs/dygraphs
        public ActionResult Dygraphs()
        {
            return View();
        }

        // GET: graphs/chart-js
        public ActionResult ChartJS()
        {
            return View();
        }

        // GET: graphs/highcharts
        public ActionResult HighCharts()
        {
            return View();
        }
    }
}