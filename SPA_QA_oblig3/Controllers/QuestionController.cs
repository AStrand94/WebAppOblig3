using SPA_QA_oblig3.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace SPA_QA_oblig3.Controllers
{
    public class QuestionController : ApiController
    {
        DB db = new DB();

        [HttpGet]
        public ListCategoryDTO Get()
        {
            ListCategoryDTO dto = new ListCategoryDTO();

            dto.Categories = db.Categories.ToList();
            dto.Questions = db.Questions.Include("Category").ToList();

            return dto;
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody]Question question)
        {
            if(question.Category != null)
            {
                question.Category = db.Categories.Where(c => c.Id == question.Category.Id).Single();
            }else
            {
                return BadReq();
            }

            try
            {
                db.Questions.Add(question);
                db.SaveChanges();
                return OKReq();
            }catch(Exception e)
            {
                return BadReq();
            }
        }

        private HttpResponseMessage BadReq()
        {
            return new HttpResponseMessage()
            {
                StatusCode = HttpStatusCode.BadRequest,
                Content = new StringContent("Could not insert question")
            };
        }

        private HttpResponseMessage OKReq()
        {
            return new HttpResponseMessage
            {
                StatusCode = HttpStatusCode.OK
            };
        }
    }
}
