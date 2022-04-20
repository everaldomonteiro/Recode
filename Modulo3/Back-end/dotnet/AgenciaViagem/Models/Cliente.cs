using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace dotnet.Models
{
    public class Cliente
    {
        [Key]
        public int ID_Cliente {get; set;}

        [Required]
        public string Nome {get; set;}

        [Required]
        public string Cpf {get; set;}

        [Required]
        public string Telefone {get; set;}

    }
}
