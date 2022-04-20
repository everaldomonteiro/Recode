using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using dotnet.Models;
using Microsoft.EntityFrameworkCore;

namespace dotnet.Data
{
    public class DBContext : DbContext
    {
        public DBContext(DbContextOptions<DBContext> opt) : base (opt) {

        }

        public DbSet<Cliente> Cliente {get; set;}

        [Required]
        public DbSet<Faz> Faz {get; set;}
        
        [Required]
        public DbSet<Viagem> Viagem {get; set;}
    }
}
