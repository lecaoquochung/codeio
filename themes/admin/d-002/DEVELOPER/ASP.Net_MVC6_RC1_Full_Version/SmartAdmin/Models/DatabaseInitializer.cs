#region Using

using System.Threading.Tasks;
using Microsoft.AspNet.Identity;

#endregion

namespace SmartAdmin.Models
{
    public class DatabaseInitializer
    {
        private readonly UserManager<ApplicationUser> _userManager;

        public DatabaseInitializer(UserManager<ApplicationUser> userManager)
        {
            _userManager = userManager;
        }

        public async Task SeedAsync()
        {
            await CreateUsersAsync();
        }

        private async Task CreateUsersAsync()
        {
            var user = await _userManager.FindByEmailAsync("demo@email.com");

            if (user == null)
            {
                user = new ApplicationUser
                {
                    UserName = "demo@email.com",
                    Email = "demo@email.com"
                };

                await _userManager.CreateAsync(user, "demo");
            }
        }
    }
}