using BL;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;


namespace YadVshemServer
{
   // [Route("api/[controller]")]
    [ApiController]
    public class hourVisitController : ControllerBase
    {
        private IVisitTimeBL visitTimeBL;

        public hourVisitController(IVisitTimeBL _visitTimeBL)
        {
            visitTimeBL = _visitTimeBL;
        }
        [HttpGet]
        [Route("GetVisitsTime")]
        public IActionResult GetVisitsTime()
        {
            try
            {
                var visitTim = visitTimeBL.GetVisitsTime();
                return Ok(visitTim);
            }
            catch (Exception ex)
            {
                return StatusCode(500, ex.Message);
            }
        }
        [HttpPut]
        [Route("UpdateVisitTime/{time}")]
        public IActionResult UpdateVisitTime(string time, [FromBody] int visitorCount)
        {
            var result = visitTimeBL.UpdateVisitTime(time, visitorCount);
            if (result == null)
                return NotFound();
            return Ok(result);
            
        }
      



        //[HttpPost]
        //public void ReservePlace()
        //{
        //    string time = Request.Form["time"];
        //    int visitorCount = int.Parse(Request.Form["visitorCount"]);

        //    museumReservationBL.ReservePlace(time, visitorCount);
        //}


    }
}

   