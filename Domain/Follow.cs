using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Follow : Entity
    {
        public Company Company { get; set; }
        public User User { get; set; }
    }
}
