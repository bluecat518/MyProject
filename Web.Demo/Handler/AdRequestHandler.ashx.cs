using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;
using System.Text;

namespace Web
{
    using AngDing.AdCommon;

    /// <summary>
    /// AdRequestHandler 的摘要说明
    /// </summary>
    public class AdRequestHandler : IHttpHandler
    {
        string result = "";
        string url = "";
        string checkFilterDomain = "bing.com|qiku.com";

        public void ProcessRequest(HttpContext context)
        {
            context.Response.ContentType = "text/plain";
            
            //webcontext.SelfPostForm();
            //RunMethod(webcontext.GetStringFromQueryString("method"));
            //context.Response.Write(result);
            //context.Response.End();
            context.Response.Write("------------------------------------BEGIN");
        }

        private void RunMethod(string methodName)
        {
            switch (methodName.ToUpper())
            {
                case "GETWOSOADFORLISTRIGHT":
                    GetWosoAdForListRight();
                    break;
                case "ISCONTAINSDOMAIN":
                    isContainsDomain(url);
                    break;
                default:
                    break;
            }
        }

        /// <summary>
        /// 获取 woso 列表页 右侧 广告，
        /// </summary>
        private void GetWosoAdForListRight()
        {
            string _GoogleAdKey = HttpUtility.UrlDecode(WebContext.GetString("k"), Encoding.UTF8);
            int cid = WebContext.GetInt("u", 0);
            int num = WebContext.GetInt("n", 5);

            //判断 关键词 是否有 值
            if (string.IsNullOrEmpty(_GoogleAdKey) || _GoogleAdKey.Trim().Length == 0)
            {
                result = string.Empty;
                return;
            }
            //判断 woso 上的 用户 ID 是否 有值
            if (cid == 0)
            {
                result = string.Empty;
                return;
            }
            if (num == 0)
                num = 5;

            string key = HttpUtility.UrlEncode(_GoogleAdKey, Encoding.GetEncoding("GB2312"));
            int order = 11;
            string ip = WebContext.GetIP();

            string title = string.Empty;
            string summary = string.Empty;
            string url = string.Empty;
            string shortUrl = string.Empty;
            //string html = string.Empty;
            StringBuilder wosoStr = new StringBuilder();

            XmlDocument doc = new XmlDocument();
            try
            {
                doc.Load(" http://api.woso.cn/xmlapi/aApi.aspx?cid=" + cid + "&num=" + num + "&wd=" + key + "&order=" + order + "&ip=" + ip);
            }
            catch { }

            XmlNode topNode = doc.SelectSingleNode("WosoAdResult");
            if (topNode == null || topNode.ChildNodes.Count == 0)
            {
                result = string.Empty;
                return;
            }

            XmlNode urlsNode = topNode.SelectSingleNode("Adlist");
            XmlNodeList urls = urlsNode.ChildNodes;
            if (urls == null || urls.Count == 0)
            {
                result = string.Empty;
                return;
            }
            //生成 SOGOU 的计费代码，如不加，SOGOU 广告将无法计费
            XmlNode pNode = topNode.SelectSingleNode("pingback");
            if (pNode != null && !string.IsNullOrEmpty(pNode.InnerText))
            {
                wosoStr.AppendLine(string.Format("<img src=\"${{0}}\" width=0 height=0 />", pNode.InnerText));
            }
            //wosoStr.AppendLine("<div class=baiduad>");
            int index = 0;
            foreach (XmlNode n in urls)
            {
                if (n.NodeType != XmlNodeType.Comment && n.Name.ToLower() == "adresult")
                {
                    foreach (XmlNode inner in n.ChildNodes)
                    {
                        if (inner.NodeType != XmlNodeType.Comment)
                        {
                            if (inner.Name.ToLower() == "title")
                                title = inner.InnerText.Replace("", "").Replace("", "");
                            if (inner.Name.ToLower() == "summary")
                                summary = inner.InnerText.Replace("", "").Replace("", "");
                            if (inner.Name.ToLower() == "url")
                                url = inner.InnerText;
                            if (inner.Name.ToLower() == "shortUrl")
                                shortUrl = inner.InnerText;
                        }
                    }

                    if (isContainsDomain(url))
                        continue;

                    index++;
                    if (index == 1)
                    {
                        wosoStr.AppendLine("<dl>");
                        wosoStr.AppendLine("<dt>");
                        wosoStr.AppendLine("<li class=\"zuo\"><a href='" + url + "' target=\"_blank\"><strong>" + title + "</strong></a></li>");
                        wosoStr.AppendLine("<li class=\"you\"><a href=\"#\">赞助商连接</a></li>");
                        wosoStr.AppendLine("</dt>");
                        wosoStr.AppendLine("<dd><a href='" + url + "' target=\"_blank\">" + summary + "</dd>");
                        wosoStr.AppendLine("</dl>");

                    }
                    else
                    {
                        wosoStr.AppendLine("<dl><dt><span><a href='" + url + "' target=\"_blank\"><strong>" + title + "</strong></a></span></dt>");
                        wosoStr.AppendLine("<dd><a href='" + url + "' target=\"_blank\">" + shortUrl + "</a><a href='" + url + "' target=\"_blank\">" + summary + "</a></dd>");
                        wosoStr.AppendLine("</dl>");

                    }
                }
            }
            //wosoStr.AppendLine("</div>");
            result = wosoStr.ToString();
        }

        /// <summary>
        /// 检测  网址是否 包含  指定的 域名
        /// </summary>
        /// <param name="url">需检测的网址</param>
        /// <returns></returns>
        private bool isContainsDomain(string url)
        {
            if (string.IsNullOrEmpty(url) || url.Trim().Length == 0)
            {
                return false;
            }
            if (string.IsNullOrEmpty(checkFilterDomain) || checkFilterDomain.Trim().Length == 0)
            {
                return false;
            }
            if (url.IndexOf('?') == -1)
                return false;

            url = url.Substring(url.IndexOf('?'));

            string[] arr = checkFilterDomain.Split('|');
            foreach (string s in arr)
            {
                if (string.IsNullOrEmpty(s) || s.Trim().Length == 0)
                    continue;

                if (url.IndexOf(s, StringComparison.OrdinalIgnoreCase) != -1)
                    return true;
            }

            return false;
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