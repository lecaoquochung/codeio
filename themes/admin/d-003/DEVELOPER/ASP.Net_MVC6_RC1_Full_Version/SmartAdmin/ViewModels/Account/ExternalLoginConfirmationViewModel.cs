#region Using

using System.ComponentModel.DataAnnotations;

#endregion

namespace SmartAdmin.ViewModels.Account
{
    public class ExternalLoginConfirmationViewModel
    {
        [Required]
        [EmailAddress]
        public string Email { get; set; }
    }
}