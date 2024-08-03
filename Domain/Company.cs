using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Company : Entity
    {
        public string Name { get; set; }
        public string Slug { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string WebSite { get; set; }
        public string Logo { get; set; }
        public User User { get; set; }

        public int TotalFollowers { get; set; }
        // TODO: Add Some sort of kyc
        public bool IsVerified { get; set; }
    }
}
