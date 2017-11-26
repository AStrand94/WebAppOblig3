using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace SPA_QA_oblig3.Models
{
    public class DBInit : DropCreateDatabaseAlways<DB>
    {
        protected override void Seed(DB context)
        {

            Category c1 = new Category {
                Id = 0,
                Name = "Flights"
            };

            Category c2 = new Category
            {
                Id = 1,
                Name = "Payment"
            };

            Category c3 = new Category
            {
                Id = 1,
                Name = "Luggage"
            };

            Question q1 = new Question
            {
                Id = 0,
                Asked = "How do I order?",
                Answer = "You go to azurewebsites.webapph17.net",
                Answered = true,
                Category = c1,
                AskedBy = "Andreas Strand",
                Email = "strand118@hotmail.com",
                IsFAQ = true
            };

            Question q2 = new Question
            {
            Id = 1,
            Asked = "I payed too much",
            Answer = "Sorry",
            Answered = true,
            Category = c2,
            AskedBy = "Nils",
            Email = "nils69@yolo.net",
            IsFAQ = true
            };

            Question q3 = new Question
            {
                Id = 2,
                Asked = "How do i get a refund?",
                Answer = "Send us an email with your reference, payment information and name, to info@skytravel.com",
                Answered = true,
                Category = c2,
                AskedBy = "Fridtjof",
                Email = "fridtjof@yolo.net",
                IsFAQ = true
            };

            Question q4 = new Question
            {
                Id = 3,
                Asked = "When do you get flights to USA?",
                Answer = "During the next month",
                Answered = true,
                Category = c1,
                AskedBy = "Per",
                Email = "per69@yolo.net",
                IsFAQ = true
            };

            Question q5 = new Question
            {
                Id = 4,
                Asked = "How much luggage is included?",
                Answer = "Only 1 luggage is included, at max 20 kg",
                Answered = true,
                Category = c3,
                AskedBy = "Frida",
                Email = "frida9@yolo.net",
                IsFAQ = true
            };

            context.Categories.Add(c1);
            context.Categories.Add(c2);
            context.Categories.Add(c3);

            context.Questions.Add(q1);
            context.Questions.Add(q2);
            context.Questions.Add(q3);
            context.Questions.Add(q4);
            context.Questions.Add(q5);

            context.SaveChanges();

            base.Seed(context);
        }
    }
}