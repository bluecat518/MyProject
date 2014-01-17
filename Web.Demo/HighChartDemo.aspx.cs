using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

namespace Web.Demo
{
    public partial class HighChartDemo : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            
        }

        protected string OutputString()
        {
            StringBuilder html = new StringBuilder();
            string str = "我人有的和{##}主产不为这{##}工要在地一";
            string[] strArr = new string[] { "{", "[", "]", "}" };
            List<string> list = str.Split(new string[] { "{##}" }, StringSplitOptions.RemoveEmptyEntries).ToList();
            foreach (var i in list)
            {
                html.AppendLine(i);
            }
            return html.ToString();
        }
    }
}