using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Web.Demo
{
    public partial class SearchCounterPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Uri referer = HttpContext.Current.Request.UrlReferrer;
            if (referer != null)
                Response.Write("主机名 " + referer.Host + " " + referer.OriginalString);
        }
    }
}