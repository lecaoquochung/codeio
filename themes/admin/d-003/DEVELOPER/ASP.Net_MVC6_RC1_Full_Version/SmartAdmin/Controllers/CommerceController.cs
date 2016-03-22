#region Using

using Microsoft.AspNet.Mvc;

#endregion

namespace SmartAdmin.Controllers
{
    public class CommerceController : Controller
    {
        // GET: /commerce/orders
        public ActionResult Orders()
        {
            return View();
        }

        // GET: /commerce/productview
        public ActionResult ProductView()
        {
            return View();
        }

        // GET: /commerce/detail
        public ActionResult Detail()
        {
            return View();
        }
    }
}