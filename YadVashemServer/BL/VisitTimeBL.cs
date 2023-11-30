using AutoMapper;
using DAL;
using DAL.models;
using DTO;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static BL.VisitTimeBL;

namespace BL
{
    public class VisitTimeBL : IVisitTimeBL

    {
        private IMapper mapper;
        private IVisitTimeDAL visitTimeDAL;

        public VisitTimeBL(IMapper _mapper, IVisitTimeDAL _visitTimeDAL)
        {
            mapper = _mapper;
            visitTimeDAL = _visitTimeDAL;
        }

        public List<VisitTimeDTO> GetVisitsTime()

        {
            List<VisitTime> visitTime = visitTimeDAL.GetVisitsTime();
            return mapper.Map<List<VisitTime>, List<VisitTimeDTO>>(visitTime);

        }
        public List<VisitTimeDTO> UpdateVisitTime(string time, int visitorCount)
        {
            // Load the JSON data once
            var visitTimes = GetVisitsTime();

            // Find the VisitTime object for the specified time
            var visitTime = visitTimes.FirstOrDefault(vt => vt.startTime == time);
            // Check if there are any available places
            if (visitTime.availablePlaces >= visitorCount)
            {
                // Update the available places
                visitTime.availablePlaces = visitTime.availablePlaces - visitorCount;
                //  visitTime.availablePlaces -= visitorCount;
                // visitTimeDAL.UpdateVisitTime(mapper.Map<List<VisitTimeDTO>, List<VisitTime>>(visitTimes));
                // visitTimeDAL.UpdateVisitTime(time, visitTime.availablePlaces);
                visitTimeDAL.SavevisitTime(mapper.Map<List<VisitTimeDTO>, List<VisitTime>>(visitTimes));
            }
            return GetVisitsTime();
                



        }




    }

}




