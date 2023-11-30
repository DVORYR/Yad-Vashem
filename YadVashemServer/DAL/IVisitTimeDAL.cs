using DAL.models;

namespace DAL
{
    public interface IVisitTimeDAL
    {
        List<VisitTime> GetVisitsTime();
       // void UpdateVisitTime(string time, int availablePlaces);
        void SavevisitTime(List<VisitTime> visitTims);

    }
}