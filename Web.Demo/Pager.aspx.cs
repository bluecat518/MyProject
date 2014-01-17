using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

namespace Web.Demo
{
    public partial class Pager : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //Response.Write(Paging(0,11,"http://localhost/index.aspx"));

            Response.Write(Paging(1, 11));  //只有5页
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
            int next = 0;  //下一页
            int pre = 0;   //上一页
            int startCount = 0;  //起始序号
            int endCount = 0;  //终止序号
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

            startCount = (pageIndex + 5) > pageCount ? pageCount - 9 : pageIndex - 4;//中间页起始序号      为什么页码+5？为什么页码+5 和 总页数进行比较
            //中间页终止序号
            endCount = pageIndex < 5 ? 5 : pageIndex + 5;
            if (startCount < 1)
            {
                startCount = 1;
            } //为了避免输出的时候产生负数，设置如果小于就从序号开始

            if (pageCount < endCount)
            {
                endCount = pageCount;
            }//页码+5的可能性就会产生最终输出序号大于总页码，那么就要将其控制在页码数之内
            //currentpagestr = "共" + pagecount + "页      ";

            retStr += pageIndex > 1 ? "<a href=\"\" mce_href=\"" + url + "Page=1 \">首页</a> <a href=\"\" mce_href=\"" + url + "Page=" + pre + "\">上一页</a> " : "";
            //中间页处理，这个增加时间复杂度，减小空间复杂度
            for (int i = startCount; i <= endCount; i++)
            {
                retStr += pageIndex == i ? "<strong><" + i + "> </strong>" : "<a href=\"" + url + "Page=" + i + "\" mce_href=\"" + url + "Page=" + i + "\">" + i + "</a> ";
            }
            retStr += pageIndex != pageCount ? "<a href=\"" + url + "Page=" + next + "\" mce_href=\"" + url + "Page=" + next + "\">下一页</a> <a href=\"\" mce_href=\"" + url + "Page=" + pageCount + "\">末页</a>" : "";
            return retStr;

        }

        protected static string Paging(int pageIndex, int pageCount)
        {
            string url = HttpContext.Current.Request.RawUrl;            
            if (url.IndexOf("?") != -1)
            {
                if (url.LastIndexOf("?page") != -1)
                {
                    url = url.Substring(0, url.LastIndexOf('?'));
                    url += "?";
                }
                else
                    url += "&";
            }
            else
            {
                url += "?";
            }

            pageIndex = TypeConverter.StrToInt(HttpContext.Current.Request.QueryString["page"].ToString());
                        
            int start = 1;
            int end = 5;
            int prev = 0;
            int next = 0;
            StringBuilder html = new StringBuilder();

            if (pageIndex < 1) //页码
            {
                pageIndex = 1;
            }
            if (pageIndex > pageCount) //总页数
            {
                pageIndex = pageCount;
            }

            next = pageIndex + 1;
            prev = pageIndex - 1;

            if (pageIndex > 3)
            {
                start = pageIndex - 2;
                end = pageIndex + 2;
            }

            if (start < 1)
            {
                start = 1;
            } //为了避免输出的时候产生负数，设置如果小于就从序号开始

            if (pageCount < end)
            {
                end = pageCount;
            }

            if (pageIndex > 1)
            {
                html.AppendLine("<a href=\"" + url + "page=1\">首页</a>");
                html.AppendLine("<a href=\"" + url + "page=" + prev + "\">上一页</a>");
            }

            for (int i = start; i <= end; i++)
            {
                if (pageIndex == i)
                    html.AppendLine("<span><a href=\"" + url + "page=" + i.ToString() + "\">" + i.ToString() + "</a></span>");
                else
                    html.AppendLine("<a href=\"" + url + "page=" + i.ToString() + "\">" + i.ToString() + "</a>");
            }

            if (pageIndex != pageCount)
            {
                html.AppendLine("<a href=\"" + url + "page=" + next + "\">下一页</a>");
                html.AppendLine("<a href=\"" + url + "page=" + pageCount + "\">尾页</a>");
            }

            return html.ToString();
        }
    }

    public class TypeConverter
    {
        public static int StrToInt(string value)
        {
            //return Convert.ToInt32(value);
            int ret = 0;
            bool b = int.TryParse(value, out ret);
            if (b)
                return ret;
            else
                return 0;
        }
    }
}