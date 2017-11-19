using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace SPA_QA_oblig3.Models
{
    public class ListCategoryDTO
    {
        public List<Category> Categories { get; set; }
        public List<Question> Questions { get; set; }
    }
}