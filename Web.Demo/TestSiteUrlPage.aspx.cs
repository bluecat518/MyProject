using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text.RegularExpressions;

namespace Web.Demo
{
    public partial class TestSiteUrlPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string siteUrl = @"http://detail.china.alibaba.com/offer/1247778864.html";

            string siteSource = string.Empty;

            //根据来源网址判断来源站点
            if (string.IsNullOrEmpty(siteUrl) || siteUrl.Length == 0)
                throw new Exception("资料来源网址为空");

            Regex regex = new Regex(@"(?<=://)([\w-]+\.)+[\w-]+(?<=/?)");
            siteSource = regex.Match(siteUrl, 0).Value.Replace("/", string.Empty);

            Response.Write(siteUrl + "<br>");
            Response.Write(siteSource + "<br>");
        }
    }
}