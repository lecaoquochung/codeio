#region Using

using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

#endregion

namespace SmartAdmin.Controllers
{
    [Authorize]
    public class FeaturesController : Controller
    {
        // GET: home/calendar
        public ActionResult Calendar()
        {
            return View();
        }

        // GET: home/google-map
        public ActionResult GoogleMap()
        {
            return View();
        }
    }
}