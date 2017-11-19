﻿using System;
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

            context.Categories.Add(c1);
            context.Categories.Add(c2);

            context.Questions.Add(q1);
            context.Questions.Add(q2);

            context.SaveChanges();

            base.Seed(context);
        }
    }
}