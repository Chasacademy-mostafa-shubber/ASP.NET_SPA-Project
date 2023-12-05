using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SPA_Project.Data;
using SPA_Project.Models;

namespace SPA_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AccountController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("register")]
        public IActionResult AddUser(User user)
        {
            var userExist = _context.Users.Where(x => x.UserName == user.UserName).FirstOrDefault();

            if (userExist != null)
            {
                return BadRequest();
            
            }

            user.Active = false;
            _context.Users.Add(user);
            _context.SaveChanges();
            var highScore = new HighScore { UserId = user.UserId, Score=0 };
            _context.HighScores.Add(highScore);
            _context.SaveChanges();
            var userProfile = new UserProfile { UserId=  user.UserId, Lost=0, Played=0, Won=0 };
            _context.UserProfiles.Add(userProfile);
            _context.SaveChanges();
            
            

            return Ok(user);

        }

        [HttpPost("User-Login")]
        public IActionResult Login(User model)
        {
            var user = _context.Users.Where(x => x.UserName == model.UserName && x.Password == model.Password).FirstOrDefault();

           if(user==null)
            {
                return BadRequest();
            }

                user.Active = true;
               _context.SaveChanges(); 

            return Ok(user);
        }


        [HttpGet("Active-User")]
        public ActionResult UserActive()
        {
            var activeuser = _context.Users.Where(x => x.Active == true);

            return Ok(activeuser);

        }

        [HttpPost("User-Logout")]
        public ActionResult Logout()
        {
            var activeuser = _context.Users.FirstOrDefault(x => x.Active == true);
            if (activeuser != null)
            {
                activeuser.Active = false;

                _context.SaveChanges();
            }


            return Ok(activeuser);

        }




    }
}
