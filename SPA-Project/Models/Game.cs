using System.ComponentModel.DataAnnotations.Schema;

namespace SPA_Project.Models
{
    public class Game
    {
        public int GameId { get; set; }
        public int PlayerPoint { get; set; }
        public int ComputerPoint { get; set; }
        public int Chances { get; set; }
        public bool ActiveGame { get; set; }
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}
