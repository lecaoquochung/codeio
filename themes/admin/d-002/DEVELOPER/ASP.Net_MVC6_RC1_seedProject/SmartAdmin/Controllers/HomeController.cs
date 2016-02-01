#region Using

using System.Net;
using Microsoft.AspNet.Authorization;
using Microsoft.AspNet.Mvc;

#endregion

namespace SmartAdmin.Controllers
{
    [Authorize]
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}