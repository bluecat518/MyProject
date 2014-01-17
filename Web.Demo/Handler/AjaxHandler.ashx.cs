using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Text;
using System.Web.Script.Serialization;

namespace Web.Demo.Handler
{
    public class AjaxHandler : IHttpHandler
    {
        string action = null;

        HttpContext ctx = HttpContext.Current;
        StringBuilder sb = new StringBuilder();

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            //context.Response.Write("Hello World");

            action = ctx.Request["action"].ToString();
            RunMethod(action);
        }

        private void RunMethod(string action)
        { 
            switch(action)
            {
                case "REQUESTDATATOCHART":
                    RequestDataToChart();
                    break;
                default:
                    break;
            }
        }

        private void RequestDataToChart()
        {
            List<Price> list = new List<Price>() {
                new Price(){SalePrice=48.9M, CreateTime=new DateTime(2013, 11, 11)},
                new Price(){SalePrice=78.9M, CreateTime=new DateTime(2013,11,18)},
                new Price(){SalePrice=88.9M, CreateTime=new DateTime(2013,11,20)},
                new Price(){SalePrice=88.9M, CreateTime=new DateTime(2013,11,25)},
            };

            JavaScriptSerializer serializer = new JavaScriptSerializer();
            string createTime = null;

            sb.AppendLine("[");
            sb.AppendLine("{\"data\": \"[");
            foreach (var item in list)
            {
                createTime = serializer.Serialize(item.CreateTime);
                sb.AppendLine("[ " + item.SalePrice + "," + createTime + " ]");
            }
            sb.AppendLine("]\"}");
            sb.AppendLine("]");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }

    public partial class Price
    {
        public decimal SalePrice { get; set; }
        public DateTime CreateTime { get; set; }
    }
}