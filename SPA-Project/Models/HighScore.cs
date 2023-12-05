using System.ComponentModel.DataAnnotations.Schema;

namespace SPA_Project.Models
{
    public class HighScore
    {
        public int HighScoreId { get; set; }
        public int Score { get; set; }
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }
    }
}
