using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace SPA_QA_oblig3.Models
{
    public class Question
    {
        [Key]
        public int Id { get; set; }

        [Required]
        public String Asked { get; set; }

        [Required]
        public Category Category { get; set; }

        [Required]
        public String AskedBy { get; set; }

        [Required]
        public String Email { get; set; }

        public String Answer { get; set; }

        public bool Answered { get; set; }
        
        public bool IsFAQ { get; set; }



    }
}