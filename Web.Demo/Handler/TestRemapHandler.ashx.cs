using System;
using System.Web;

namespace Web.Demo
{
    /// <summary>
    /// TestRemapHandler 的摘要说明
    /// </summary>
    public class TestRemapHandler : IHttpHandler
    {

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            context.Response.Write("Hello TestRemapHandler");
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}