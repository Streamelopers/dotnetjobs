using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Domain.Enums;

namespace Domain
{
    public class Job : Entity
    {
        public String Title {  get; set; }
        public string Slug { get; set; }
        public String Responsibilities { get; set; }
        public String Benefits { get; set; }
        public String HowToApply { get; set; }
        public Decimal MinimumSalary { get; set; }
        public Decimal MaximumSalary { get; set; }
        public DateTime? PublishDate { get; set; }
        public Category Category { get; set; }
        public JobTerm Term { get; set; }
        public JobStatus Status { get; set; }
        public Company Company { get; set; }
        public User User { get; set; }
        public int TotalLikes { get; set; }
        public int TotalBookmarks { get; set; }
        //TODO Add tags
    }
}
