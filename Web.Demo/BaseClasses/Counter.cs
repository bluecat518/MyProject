using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace Web.Demo.BaseClasses
{
    public class Counter
    {
        private int _count;

        public void ShowCountAndRequestInfo(HttpContext context)
        {
            _count++;
            context.Response.ContentType = "text/plain";
            context.Response.Write("count: " + _count.ToString());
            context.Response.Write("\r\n");
            context.Response.Write(context.Request.RawUrl);
        }
    }
}