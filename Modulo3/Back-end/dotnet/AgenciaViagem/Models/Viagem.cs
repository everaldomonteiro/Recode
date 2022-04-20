using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet.Models
{
    public class Viagem
    {
        [Key]
        public int ID_Viagem {get; set;}

        [Required]
        public string Partida {get; set;}

        [Required]
        public string Destino {get; set;}

        [Required]
        public string Origem {get; set;}
    }
}
