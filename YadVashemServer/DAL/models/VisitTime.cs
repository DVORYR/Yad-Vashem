using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.models
{
    public class VisitTime
    {
     
        public string startTime { get; set; }
        public int availablePlaces { get; set; }
        public bool isClosed { get; set; }

    }
}
