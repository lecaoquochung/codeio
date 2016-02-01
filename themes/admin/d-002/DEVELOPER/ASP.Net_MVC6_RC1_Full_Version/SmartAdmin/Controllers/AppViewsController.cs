#region Using

using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

#endregion

namespace SmartAdmin.Controllers
{
    [Authorize]
    public class AppViewsController : Controller
    {
        // GET: /appviews/blog
        public ActionResult Blog()
        {
            return View();
        }

        // GET: /appviews/projects
        public ActionResult Projects()
        {
            return View();
        }

        // GET: /appviews/profile
        public ActionResult Profile()
        {
            return View();
        }

        // GET: /appviews/timeline
        public ActionResult TimeLine()
        {
            return View();
        }

        // GET: /appviews/gallery
        public ActionResult Gallery()
        {
            return View();
        }
    }
}