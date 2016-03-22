#region Using

using System.Threading.Tasks;

#endregion

namespace SmartAdmin.Services
{
    public interface ISmsSender
    {
        Task SendSmsAsync(string number, string message);
    }
}