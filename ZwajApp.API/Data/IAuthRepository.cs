using System.Threading.Tasks;
using ZwajApp.API.Module;

namespace ZwajApp.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user,string password);
         Task<User> Login(string username,string password);
         Task<bool> UserExists(string username);
    }
}