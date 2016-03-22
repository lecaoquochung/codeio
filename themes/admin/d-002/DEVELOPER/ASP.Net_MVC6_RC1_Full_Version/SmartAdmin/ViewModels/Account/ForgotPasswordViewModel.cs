#region Using

using System.ComponentModel.DataAnnotations;

#endregion

namespace SmartAdmin.ViewModels.Account
{
    public class ForgotPasswordViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}