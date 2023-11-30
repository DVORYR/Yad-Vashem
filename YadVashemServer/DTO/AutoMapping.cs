using AutoMapper;
using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class AutoMapping : Profile
    {
        public AutoMapping()
        {
            CreateMap<VisitTime, VisitTimeDTO>();
            CreateMap<VisitTimeDTO, VisitTime>();

        }
    }

}