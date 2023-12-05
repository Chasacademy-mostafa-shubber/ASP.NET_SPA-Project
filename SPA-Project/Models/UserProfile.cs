using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace SPA_Project.Models
{
    public class UserProfile
    {
       
        public int UserProfileId { get; set; }
        public int  Won { get; set; }
        public int Played { get; set; }
        public int Lost { get; set; }
        public int UserId { get; set; }

        [ForeignKey("UserId")]
        public User User { get; set; }


    }
}
