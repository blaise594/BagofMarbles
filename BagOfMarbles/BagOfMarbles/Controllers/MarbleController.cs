using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using BagOfMarbles.Models;

namespace BagOfMarbles.Controllers
{
    public class MarbleController : ApiController
    {
        public static List<Marble> listofmarbles = new List<Models.Marble>
        {
            new Marble{Id = 1, Color = "Blue"},

            new Marble{Id = 2, Color = "Red"},

            new Marble{Id = 3, Color = "Yellow"},
        };

        public IHttpActionResult Get()
        {
            return Ok(listofmarbles);
        }

        public IHttpActionResult GetRandomMarble(int count)
        {

        }
    }
}
