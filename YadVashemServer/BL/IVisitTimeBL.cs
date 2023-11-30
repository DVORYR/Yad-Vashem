using DAL;
using DAL.models;
using DTO;

namespace BL
{
    public interface IVisitTimeBL
    {
        List<VisitTimeDTO> GetVisitsTime();
        List<VisitTimeDTO> UpdateVisitTime(string time, int visitorCount);


    }
}