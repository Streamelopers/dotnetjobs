using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Bookmark : Entity
    {
        public Job Job { get; set; }
        public User User { get; set; }
    }
}
