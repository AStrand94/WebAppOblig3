using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;
using System.Data.Common;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace SPA_QA_oblig3.Models
{
    public class DB : DbContext
    {

        public virtual DbSet<Question> Questions { get; set; }
        public virtual DbSet<Category> Categories { get; set; }

        public DB() : base("name=DB")
        {
            Database.CreateIfNotExists();
            Database.SetInitializer(new DBInit());
        }

        public DB(DbConnection con) : base(con,true)
        {
        }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}