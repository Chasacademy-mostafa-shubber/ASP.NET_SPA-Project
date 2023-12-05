using Microsoft.EntityFrameworkCore;
using SPA_Project.Models;

namespace SPA_Project.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<User> Users { get; set; }
        public DbSet<UserProfile> UserProfiles { get; set; }
        public DbSet<Game> Games { get; set; }
        public DbSet<HighScore> HighScores { get; set; }
    }
}
