using SPA_QA_oblig3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SPA_QA_oblig3.Controllers
{
    public class CategoryController : ApiController
    {
        DB db = new DB();

        public List<Category> Get()
        {
            return db.Categories.ToList();
        }
    }
}
