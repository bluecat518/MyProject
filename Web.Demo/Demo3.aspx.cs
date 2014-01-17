using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

namespace Web.Demo
{
    public partial class Demo3 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        protected string OutputHtml()
        {
            StringBuilder html = new StringBuilder();
            //string currDate = DateTime.Now.ToString("yyyy-MM-dd");
            //for (DateTime dt = new DateTime(2013, 12, 4); dt < new DateTime(2014, 1, 7); dt = dt.AddDays(1)) 
            //{
            //    html.AppendLine(dt.ToShortDateString() + "<br/>");
            //}
            html.AppendLine("----------------------------------------------");            

            DateTime currDate = new DateTime(2013, 1, 21);
            html.AppendLine("当天日期:" + currDate.ToString("yyyy-MM-dd"));
            DateTime lastDate = currDate.AddMonths(-1);

            List<DateTime> list = new List<DateTime>();
            for (DateTime firstDate = lastDate; firstDate < currDate; firstDate = firstDate.AddDays(1))
            {
                list.Add(firstDate);
                //html.AppendLine(firstDate.ToShortDateString() + "<br/>");
            }

            List<DateTime> list2 = new List<DateTime>();
            list2.Add(new DateTime(2013, 1, 17));
            list2.Add(new DateTime(2013, 1, 10));

            List<DateTime> list3 = new List<DateTime>();
            foreach (var item in list)
            {
                foreach (var item2 in list2)
                {
                    if (item2 == item)
                    {
                        list3.Add(item);
                    }
                }
            }

            html.AppendLine("==============================================");
            foreach (var item3 in list3)
            {
                html.AppendLine(item3.ToString("yyyy-MM-dd"));
            }

            html.AppendLine("上一个月:" + lastDate.ToString("yyyy-MM-dd"));

            DateTime dt1 = new DateTime(2013, 1, 12, 8, 30, 10);
            DateTime dt2 = new DateTime(2013, 1, 12, 8, 40, 10);
            DateTime dt3 = new DateTime(2013, 1, 12);
            DateTime dt4 = new DateTime(2013, 1, 12);
            if (DateTime.Compare(dt3, dt4) == 0)
            {
                html.AppendLine("dt1 与 dt2 一样大");
            }
            else if (DateTime.Compare(dt4, dt4) > 0)
            {
                html.AppendLine("dt1 比 dt2 大");
            }
            else
            {
                html.AppendLine("dt1 比 dt2 小");
            }
            return html.ToString();
        }
    }
}