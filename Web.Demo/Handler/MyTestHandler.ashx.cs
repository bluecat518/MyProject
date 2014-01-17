using System;
using System.Web;
using Web.Demo.BaseClasses;

namespace Web.Demo
{
    /// <summary>
    /// MyTestHandler 的摘要说明
    /// </summary>
    public class MyTestHandler : IHttpHandler
    {
        private Counter counter = new Counter();

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";

            counter.ShowCountAndRequestInfo(context);
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