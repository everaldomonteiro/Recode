using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet.Models
{
    public class Faz
    {
        [Key]
        public int Id { get; set; }

        // Criação da FK autor
        [Required]
        public int ClienteID_Cliente {get; set;}
        
        public Cliente cliente {get; set;}
        
        // Criação da FK editora
        [Required]
        public int ViagemID_Viagem {get; set;}
        public Viagem viagem {get; set;}
    }
}