using System;
using System.Collections.Generic;
using System.Collections;
using System.Collections.Specialized;
using System.Web;
using System.Data;
using System.Web.Caching;
using System.Text;


namespace AngDing.BaseClasses
{

    public class Globals
    {
        /// <summary>
        /// 获取根目录
        /// </summary>
        public static string ApplicationPath
        {
            get { return "~/"; }
        }
    }
}
