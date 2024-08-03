using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class User : Entity
    {
        public List<Like> Likes { get; set; }
        public List<Bookmark> Bookmarks { get; set; }
        public List<Job> Jobs { get; set; }
        public List<Follow> Follows { get; set; }
    }
}
