using DAL.models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Text.Json;
using System.Threading.Tasks;
using static DAL.VisitTimeDAL;
using Newtonsoft.Json;
using JsonSerializer = Newtonsoft.Json.JsonSerializer;
using System.IO;

namespace DAL
{
    public class VisitTimeDAL : IVisitTimeDAL
    {
        //     public async Task GetVisitsTime()
        //    {
        //        VisitTime visitTime = await JsonFileReader.ReadAsync<VisitTime>(@"C:\Users\USER\Desktop\YadVashem\jsonYadVashem.json");
        //    }
        //}

        //public static class JsonFileReader
        //{
        //    public static async Task<T> ReadAsync<T>(string filePath)
        //    {
        //        using FileStream stream = File.OpenRead(filePath);
        //        return await JsonSerializer.DeserializeAsync<T>(stream);
        //    }


        private readonly string jsonFilePath = @"C:\Users\USER\Desktop\YadVashem\jsonYadVashem.json"; // Replace with the actual path

        public List<VisitTime> GetVisitsTime()
        {
            using (var fileStream = new FileStream(jsonFilePath, FileMode.Open, FileAccess.Read))
            using (var streamReader = new StreamReader(fileStream))
            using (var jsonReader = new JsonTextReader(streamReader))
            {
                //  var serializer = new JsonSerializer();
                var serializer = new Newtonsoft.Json.JsonSerializer();

                var data = serializer.Deserialize<List<VisitTime>>(jsonReader);
                return data;


            }
        }
        //עדכון
        //// Save the updated data to the JSON file
        //public void UpdateVisitTime(string time, int availablePlaces)
        //{
        //    try
        //    {
        //        using (var fileStream = new FileStream(jsonFilePath, FileMode.Append, FileAccess.Write))
        //        using (var streamWriter = new StreamWriter(fileStream))
        //        using (var jsonWriter = new JsonTextWriter(streamWriter))
        //        {
        //            var serializer = new Newtonsoft.Json.JsonSerializer();
        //            serializer.Serialize(jsonWriter, visitTimes);
        //        }
        //    }
        //    catch (Exception ex)

        //    {
        //        throw ex;
        //    }


        //}
        public void SavevisitTime(List<VisitTime> visitTims)
        {
            try
            {
                var json = JsonConvert.SerializeObject(visitTims, Formatting.Indented);
                File.WriteAllText(jsonFilePath, json);
            }
            catch (Exception ex)

            {
                throw ex;
            }
        }

            //public void UpdateVisitTime(VisitTime visitingTime, int visitorCount)
            //{
            //    try
            //    {
            //            var data = GetVisitsTime();

            //            // Find the VisitTime object for the specified time
            //            var visitTime = data.FirstOrDefault(vt => vt.VisitDate == visitingTime.startTime && vt.VisitTime == time.TimeOfDay);

            //            // Update the available places if the VisitTime object exists
            //            if (visitTime != null)
            //            {
            //                visitTime.AvailablePlaces -= visitorCount;

            //                // Save the updated data to the JSON file
            //                using (var fileStream = new FileStream(jsonFilePath, FileMode.Truncate, FileAccess.Write))
            //                using (var streamWriter = new StreamWriter(fileStream))
            //                using (var jsonWriter = new JsonTextWriter(streamWriter))
            //                {
            //                    var serializer = new Newtonsoft.Json.JsonSerializer();
            //                    serializer.Serialize(jsonWriter, data);
            //                }
            //            }
            //        }
            //    catch (Exception ex)
            //    {
            //        throw ex;
            //    }
            //}
        }
}

    


