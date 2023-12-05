using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SPA_Project.Data;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace SPA_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {

        private readonly ApplicationDbContext _context;

        public UserController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpGet("User-HighScore")]
        public ActionResult GetHighScore()
        {
            var query = (from _user in _context.Users
                         join highscore in _context.HighScores
                         on _user.UserId equals highscore.UserId
                         where _user.Active == true
                         select new
                         {
                             highscore.Score
                         }).ToList();

            return Ok(query);
        }

        [HttpGet("User-Profile")]
        public ActionResult UserProfile()
        {
            var query = (from _user in _context.Users
                         join profile in _context.UserProfiles
                         on _user.UserId equals profile.UserId
                         where _user.Active == true
                         select new
                         {
                             profile.Played,
                             profile.Won,
                             profile.Lost
                             
                         }).ToList();

            return Ok(query);
        }

        [HttpGet("Game-list")]
        public ActionResult GameList()
        {
            var query = (from _user in _context.Users
                         join games in _context.Games
                         on _user.UserId equals games.UserId
                         where _user.Active == true
                         select new
                         {
                            games.UserId,
                            games.PlayerPoint,
                            games.ComputerPoint

                         }).ToList();

            return Ok(query);
        }




    }
}
