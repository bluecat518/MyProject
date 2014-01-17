using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text.RegularExpressions;

namespace Web.Demo
{
    public partial class WebForm3 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //string input = "<p>111111111111111111111</p><p>2222222222222222222222222222222222222<br />333333333333333333333";
            //Response.Write("-----------------------输出前的input");
            //Response.Write(input + "<br/>");

            //Regex regex = new Regex("<[^>]*?>",RegexOptions.IgnoreCase);
            //input = regex.Replace(input, "");
            
            //Response.Write("-----------------------输出后的input<br/>");
            //Response.Write(input);

            //Response.Write("分页<br/>");
            //Response.Write(Paging(1,15,"http://localhost/"));
        }

        /// <summary>
        /// 分页算法
        /// </summary>
        protected static string Paging(int pageIndex, int pageCount, string url)
        {
            if (url.IndexOf("?") >= 0)
            {
　　　　　　　　　url += "&";
　　　　　　　}
            else
　　　　　　　{
                url += "?";
　　　　　　　}
            int next = 0;  //下一步
            int pre = 0;   //上一步
            int startCount = 0;  //起始位置
            int endCount = 0;  //终止位置
            string retStr = "";

            if (pageIndex < 1)
            {
                pageIndex = 1;
            }

            if (pageIndex > pageCount)
            {
                pageIndex = pageCount;
            }

            next = pageIndex + 1;
            pre = pageIndex - 1;

            startCount = (pageIndex + 5) > pageCount ? pageCount - 9 : pageIndex - 4;//中间页起始序号
            //中间页终止序号
            endCount = pageIndex < 5 ? 10 : pageIndex + 5;
            if (startCount < 1)
            {
                startCount = 1;
            } //为了避免输出的时候产生负数，设置如果小于就从序号开始

            if (pageCount < endCount)
            {
                endCount = pageCount;
            }//页码+5的可能性就会产生最终输出序号大于总页码，那么就要将其控制在页码数之内
            //currentpagestr = "共" + pagecount + "页      ";

            retStr += pageIndex > 1 ? "<a href=\""+url+"\" mce_href=\"" + url + "Page=1 \">首页</a> <a href=\"\" mce_href=\"" + url + "Page=" + pre + "\">上一页</a> " : "";
            //中间页处理，这个增加时间复杂度，减小空间复杂度
            for (int i = startCount; i <= endCount; i++)
            {
                retStr += pageIndex == i ? "<strong><" + i + "> </strong>" : "<a href=\"\" mce_href=\"" + url + "Page=" + i + "\">" + i + "</a> ";
            }
            retStr += pageIndex != pageCount ? "<a href=\"\" mce_href=\"" + url + "Page=" + next + "\">下一页</a> <a href=\"\" mce_href=\"" + url + "Page=" + pageCount + "\">末页</a>" : "";
            return retStr;

        }

    }
}