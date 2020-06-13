using Microsoft.EntityFrameworkCore;
using ZwajApp.API.Module;

namespace ZwajApp.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        public DbSet<TblValue> TblValues { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet <Photo> Photos { get; set; }
    }
}