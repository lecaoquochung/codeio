#region Using

using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

#endregion

namespace SmartAdmin.Controllers
{
    [Authorize]
    public class ElementController : Controller
    {
        // GET: /elements/general/
        public ActionResult General()
        {
            return View();
        }

        // GET: /elements/buttons/
        public ActionResult Buttons()
        {
            return View();
        }
    }
}