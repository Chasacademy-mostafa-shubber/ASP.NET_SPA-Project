using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SPA_Project.Data;
using SPA_Project.Models;
using SQLitePCL;

namespace SPA_Project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GameController : ControllerBase
    {
       private readonly ApplicationDbContext _context;
        public static int test = 0;
        public GameController(ApplicationDbContext context)
        {
            _context = context;
        }



        [HttpPost("Start-Game")]
        public IActionResult StartGame()
        {
            var activeUser = _context.Users.Where(x => x.Active == true).FirstOrDefault();

            var NewGame = new Game
            {
                PlayerPoint = 0,
                ComputerPoint = 0,
                Chances = 5,
                ActiveGame = true,
                UserId = activeUser.UserId

            };

            _context.Games.Add(NewGame);
            _context.SaveChanges();

            return Ok(NewGame);
            
        }


        [HttpGet("Active-Game")]
        public ActionResult ActiveGame()
        {
            var user = _context.Users.Where(x=> x.Active==true).FirstOrDefault();
            var activeGame = _context.Games.Where(x => x.UserId == user.UserId);

            return Ok(activeGame);
        }

        [HttpPost("play")]
        public IActionResult PlayGame()
        {
            
            var user = _context.Users.Where(x => x.Active == true).FirstOrDefault();
            var activeGame = _context.Games.Where(x => x.UserId == user.UserId && x.ActiveGame==true).FirstOrDefault();
            var userProfile = _context.UserProfiles.Where(x => x.UserId == user.UserId).FirstOrDefault();
            var highScore = _context.HighScores.Where(x => x.UserId == user.UserId).FirstOrDefault();

            Random rd = new Random();
            int playerNumber = rd.Next(1,15);
            int ComputerNumber = rd.Next(1,15);


            activeGame.Chances--;
            _context.SaveChanges();

            if (playerNumber > ComputerNumber)
            {
                activeGame.PlayerPoint++;
                
                highScore.Score++;
                _context.SaveChanges();
            }

            if(playerNumber < ComputerNumber)
            {
                activeGame.ComputerPoint++;
                _context.SaveChanges();
            }

            if (playerNumber == ComputerNumber)
            {
                activeGame.Chances++;
                _context.SaveChanges();
            }

           
            if (activeGame.Chances == 0) { 
            

                if (activeGame.PlayerPoint > activeGame.ComputerPoint)
                {
                    userProfile.Won++;
                    userProfile.Played++; 
                    _context.SaveChanges();

                }

                if (activeGame.PlayerPoint < activeGame.ComputerPoint)
                {
                    userProfile.Lost++;
                    userProfile.Played++;
                    _context.SaveChanges();

                }

            activeGame.ActiveGame = false;
            _context.SaveChanges();

        }

           
            return Ok();
        }


           






        
    }
}
