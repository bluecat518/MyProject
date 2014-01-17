using System;
using System.Web;
using System.Collections.Specialized;

namespace DotNet.BaseClasses
{
    public class WebContext
    {
        private int page = 1;
        private int labid = -1;
        private int id = -1;

        private string labspell = "";
        private string labchannel = "";
        private string parent = "0";
        private string returnUrl = "";
        private string action = "";

        private string keyword = "";

        private HttpContext context;

        public WebContext()
        {
            context = HttpContext.Current;

            if (context == null)
                return;

            id = GetIntFromQueryString(context, "Id");
            page = GetIntFromQueryString(context, "page");
            page = page <= 0 ? 1 : page;
            labid = GetIntFromQueryString(context, "labid");
            labspell = GetStringFromQueryString(context, "spell");
            labchannel = GetStringFromQueryString(context, "channel");

            keyword = GetStringFromQueryString(context, "keyword");//图片查询关键字

            parent = GetStringFromQueryString(context, "Parent");
            parent = parent == null ? "0" : parent;
           
            returnUrl = context.Request.QueryString["returnUrl"];
            action = GetStringFromQueryString(context, "action");
        }


        public static WebContext Current
        {
            get
            {
                return new WebContext();
            }
        }

        #region GetIntFromQueryString

        private int GetIntFromQueryString(HttpContext context, string key)
        {
            int returnValue = -1;
            string queryStringValue;

            // Attempt to get the value from the query string
            //
            queryStringValue = context.Request.QueryString[key];

            // If we didn't find anything, just return
            //
            if (queryStringValue == null)
                return returnValue;

            // Found a value, attempt to conver to integer
            //
            try
            {

                // Special case if we find a # in the value
                //
                if (queryStringValue.IndexOf("#") > 0)
                    queryStringValue = queryStringValue.Substring(0, queryStringValue.IndexOf("#"));

                //if value's length
                if (queryStringValue.Length > 8)
                    queryStringValue = queryStringValue.Substring(0, 8);

                returnValue = Convert.ToInt32(queryStringValue);
            }
            catch { }

            return returnValue;
        }
        public int GetIntFromQueryString(string key)
        {
            return GetIntFromQueryString(context, key);
        }

        #endregion

        #region GetShortFromQueryString

        private short GetShortFromQueryString(HttpContext context, string key)
        {
            short returnValue = 0;
            string queryStringValue;

            // Attempt to get the value from the query string
            //
            queryStringValue = context.Request.QueryString[key];

            // If we didn't find anything, just return
            //
            if (queryStringValue == null)
                return returnValue;

            // Found a value, attempt to conver to integer
            //
            try
            {

                // Special case if we find a # in the value
                //
                if (queryStringValue.IndexOf("#") > 0)
                    queryStringValue = queryStringValue.Substring(0, queryStringValue.IndexOf("#"));

                //if value's length
                if (queryStringValue.Length > 8)
                    queryStringValue = queryStringValue.Substring(0, 8);

                returnValue = Convert.ToInt16(queryStringValue);
            }
            catch { }

            return returnValue;
        }
        public short GetShortFromQueryString(string key)
        {
            return GetShortFromQueryString(context, key);
        }

        #endregion

        #region GetByteFromQueryString

        private byte GetByteFromQueryString(HttpContext context, string key)
        {
            byte returnValue = 0;
            string queryStringValue;

            // Attempt to get the value from the query string
            //
            queryStringValue = context.Request.QueryString[key];

            // If we didn't find anything, just return
            //
            if (queryStringValue == null)
                return returnValue;

            // Found a value, attempt to conver to integer
            //
            try
            {

                // Special case if we find a # in the value
                //
                if (queryStringValue.IndexOf("#") > 0)
                    queryStringValue = queryStringValue.Substring(0, queryStringValue.IndexOf("#"));

                //if value's length
                if (queryStringValue.Length > 8)
                    queryStringValue = queryStringValue.Substring(0, 8);

                returnValue = Convert.ToByte(queryStringValue);
            }
            catch { }

            return returnValue;
        }
        public byte GetByteFromQueryString(string key)
        {
            return GetByteFromQueryString(context, key);
        }

        #endregion

        #region GetInt64FromQueryString

        private Int64 GetInt64FromQueryString(HttpContext context, string key)
        {
            Int64 returnValue = -1;
            string queryStringValue;

            // Attempt to get the value from the query string
            //
            queryStringValue = context.Request.QueryString[key];

            // If we didn't find anything, just return
            //
            if (queryStringValue == null)
                return returnValue;

            // Found a value, attempt to conver to integer
            //
            try
            {

                // Special case if we find a # in the value
                //
                if (queryStringValue.IndexOf("#") > 0)
                    queryStringValue = queryStringValue.Substring(0, queryStringValue.IndexOf("#"));

                //if value's length
                if (queryStringValue.Length > 8)
                    queryStringValue = queryStringValue.Substring(0, 8);

                returnValue = Convert.ToInt64(queryStringValue);
            }
            catch { }

            return returnValue;
        }
        public Int64 GetInt64FromQueryString(string key)
        {
            return GetInt64FromQueryString(context, key);
        }

        #endregion

        #region GetStringFromQueryString

        private string GetStringFromQueryString(HttpContext context, string key)
        {
            string returnValue = null;
            string queryStringValue;

            // Attempt to get the value from the query string
            //
            queryStringValue = context.Request.QueryString[key];

            // If we didn't find anything, just return
            //
            if (queryStringValue == null)
                return returnValue;

            // Found a value, attempt to conver to integer
            //
            try
            {

                // Special case if we find a # in the value
                //
                if (queryStringValue.IndexOf("#") > 0)
                    queryStringValue = queryStringValue.Substring(0, queryStringValue.IndexOf("#"));

                returnValue = Convert.ToString(queryStringValue);
            }
            catch { }

            return returnValue;
        }
        public string GetStringFromQueryString(string key)
        {
            return GetStringFromQueryString(context, key);
        }

        #endregion	

        /// <summary>
        /// 组装URL QueryString
        /// </summary>
        /// <param name="parameter"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public static string PopulateQueryString(string parameter, string value)
        {
            return PopulateQueryString(HttpContext.Current.Request.Path, parameter, value);
        }

        /// <summary>
        /// 组装URL QueryString
        /// </summary>
        /// <param name="parameter"></param>
        /// <param name="value"></param>
        /// <returns></returns>
        public static string PopulateQueryString(string url, string parameter, string value)
        {
            NameValueCollection queryString = HttpContext.Current.Request.QueryString;
            if (queryString.Count <= 0)
            {
                if (url.Contains("?"))
                    return url + "&" + parameter + "=" + value;
                else
                    return url + "?" + parameter + "=" + value;
            }

            bool isFind = false;
            string query = "";
            for (int i = 0; i < queryString.Count; i++)
            {
                query += i == 0 ? "?" : "&";
                if (queryString.GetKey(i) == parameter)
                {
                    query += parameter + "=" + value;
                    isFind = true;
                }
                else
                    query += queryString.GetKey(i) + "=" + queryString[i].ToString();
            }

            if (isFind)
                url += query;
            else
                url += query + "&" + parameter + "=" + value;

            return url;
        }


        #region Public Method

        /// <summary>
        /// 模块路径
        /// </summary>
        public string SkinPath
        {
            get
            {
                return ApplicationPath + "/Themes/Default/";
            }
        }

        /// <summary>
        /// 站点物理路径
        /// </summary>
        public string ApplicationPath
        {
            get
            {
                string path = HttpContext.Current.Request.ApplicationPath;
                if (path == "/")
                    return string.Empty;
                else
                    return path;
            }
        }

        public static string GetApplicationName()
        {
            return GetApplicationName(HttpContext.Current);
        }

        public static string GetApplicationName(HttpContext context)
        {
            if (context == null)
                return "";

            string hostName = context.Request.Url.Host;
            string applicationPath = context.Request.ApplicationPath;

            return hostName + applicationPath;
        }

        /// <summary>
        /// 判断用户是否是某种身份
        /// </summary>
        /// <param name="role">需判别的身份</param>
        /// <returns></returns>
        public static bool IsInRoles(string role)
        {
            if (System.Web.HttpContext.Current.User != null)
            {
                if (System.Web.HttpContext.Current.User.Identity.IsAuthenticated)
                {
                    return System.Web.HttpContext.Current.User.IsInRole(role);
                }
            }

            return false;
        }

        public static bool IsHasRole(string role, string roles)
        {
            if (roles.IndexOf(role) != -1)
                return true;

            return false;
        }

        public static string GetCurrentUrl()
        {
            return HttpContext.Current.Request.RawUrl;
        }

        public static string GetCurrentUrlType()
        {
            string url = GetCurrentUrl();
            if (url.IndexOf("?") != -1)
                url = url.Substring(0, url.IndexOf("?"));

            if (url.IndexOf("manage") != -1)
            {
                return "Admin";
            }
            else
            {
                return "";
            }
        }
        
        /// <summary>
        /// 弹出消息对话框
        /// </summary>
        /// <param name="message">消息字符串</param>
        /// <param name="end">是否结束本页</param>
        /// <param name="url">重定向URL</param>
        public static void AlertMessage(string message, bool end, string url)
        {
            HttpContext.Current.Response.Write("<script>");
            HttpContext.Current.Response.Write("alert(\"" + message + "\");");


            if (url != null)
            {
                HttpContext.Current.Response.Write("document.location.href=\"" + url + "\";");
                //HttpContext.Current.Response.Redirect(url,end);
            }
            HttpContext.Current.Response.Write("</script>");

            //			else
            //			{
            if (end)
                HttpContext.Current.Response.End();
            //			}
        }
        public static void AlertMessage(string message, string url)
        {
            AlertMessage(message, true, url);
        }
        public static void AlertMessage(string message, bool end)
        {
            AlertMessage(message, end, null);
        }
        public static void AlertMessage(string message)
        {
            AlertMessage(message, false, null);
        }
        public static void AlertMessage(string message, bool end, bool back)
        {
            HttpContext.Current.Response.Write("<script>");
            HttpContext.Current.Response.Write("alert(\"" + message + "\");");


            if (back)
            {
                HttpContext.Current.Response.Write("history.back();");
                //HttpContext.Current.Response.Redirect(url,end);
            }
            HttpContext.Current.Response.Write("</script>");

            //			else
            //			{
            if (end)
                HttpContext.Current.Response.End();
            //			}
        }
        /// <summary>
        /// 弹出消息框，结束当前HTTP请求，后退并刷新后退页
        /// </summary>
        /// <param name="message"></param>
        /// <param name="end"></param>
        /// <param name="back"></param>
        public static void AlertMessage(string message, bool end, bool back, bool isRefresh)
        {
            HttpContext.Current.Response.Write("<script>");
            HttpContext.Current.Response.Write("alert(\"" + message + "\");");


            if (back)
            {
                HttpContext.Current.Response.Write("history.back();");
                //HttpContext.Current.Response.Redirect(url,end);
            }
            if (isRefresh)
            {
                HttpContext.Current.Response.Write("window.parent.parent.frames.item(1).location.reload(); ");
            }
            HttpContext.Current.Response.Write("</script>");

            //			else
            //			{
            if (end)
                HttpContext.Current.Response.End();
            //			}
        }

        /// <summary>
        /// 获取Session信息
        /// </summary>
        /// <param name="name"></param>
        /// <returns></returns>
        public string GetSessionValue(string name)
        {
            if (HttpContext.Current.Session[name] == null)
                return "";

            return HttpContext.Current.Session[name].ToString().Trim();
        }

        public string GetCookieValue(string name)
        {
            //CookieTools cookieTools = new CookieTools();
            //return cookieTools[name];
            return "";
        }

        /// <summary>
        /// 判断是否内部提交表单
        /// </summary>
        /// <returns></returns>
        public void SelfPostForm()
        {
            string RefererURL = HttpContext.Current.Request.ServerVariables["HTTP_REFERER"];
            string DomainName = HttpContext.Current.Request.ServerVariables["SERVER_NAME"];

            if (RefererURL == string.Empty || RefererURL == null)
            {
                // 输出非法请求提示
                HttpContext.Current.Response.Write("您不能从外部提交数据！");
                HttpContext.Current.Response.End();
            }

            if (RefererURL.LastIndexOf(DomainName) <= 0)
            {
                // 将非法用户的相关数据写入数据库中
                HttpContext.Current.Response.Write("您不能从外部提交数据！");
                HttpContext.Current.Response.End();
            }
        }

        /// <summary>
        /// 跳转到相应的URL ，并结束当前程序执行
        /// </summary>
        /// <param name="url">需跳转到的URL</param>
        public void UrlRedirect(string url)
        {
            HttpContext.Current.Response.Redirect(url);
            HttpContext.Current.Response.End();
        }

        #endregion

        #region 属性 property

        public HttpContext Context
        {
            get
            {
                if (context == null)
                    return new HttpContext(null);
                return this.context;
            }
        }
        
        public string Action
        {
            get { return this.action; }
        }
        
        /// <summary>
        /// 标签Id
        /// </summary>
        public int LabId
        {
            get { return this.labid; }
        }

        /// <summary>
        /// 标签拼音
        /// </summary>
        public string LabSpell
        {
            get
            {
                if (this.labspell == null) return "";

                return this.labspell;
            }
        }

        /// <summary>
        /// 频道拼音
        /// </summary>
        public string LabChannel
        {
            get
            {
                if (this.labchannel == null) return "";

                return this.labchannel;
            }
        }

        public string KeyWord
        {
            get 
            {
                if (this.keyword == null) return "";
                return this.keyword;
            }
        }

        /// <summary>
        /// 获取Id
        /// </summary>
        public int Id
        {
            get { return this.id; }
        }
        
        /// <summary>
        /// 获取父路径
        /// </summary>
        public string Parent
        {
            get { return parent; }
        }
        
        /// <summary>
        /// 获取页名称
        /// </summary>
        public string PageName
        {
            get
            {
                string url = this.context.Request.Url.ToString();

                string realUrl = "";
                if (url.IndexOf("?") != -1)
                {
                    realUrl = url.Substring(0, url.IndexOf("?"));
                }
                else
                {
                    realUrl = url;
                }
                if (realUrl.IndexOf("/") != -1)
                {
                    realUrl = realUrl.Substring(realUrl.LastIndexOf("/") + 1);
                }
                return realUrl.Substring(0, realUrl.LastIndexOf("."));
            }
        }

        /// <summary>
        /// 获取页整个名称
        /// </summary>
        public string FullPageName
        {
            get
            {
                string url = this.context.Request.Url.ToString();

                string realUrl = "";
                if (url.IndexOf("?") != -1)
                {
                    realUrl = url.Substring(0, url.IndexOf("?"));
                }
                else
                {
                    realUrl = url;
                }
                if (realUrl.IndexOf("//") != -1)
                {
                    realUrl = realUrl.Substring(realUrl.IndexOf("//") + 2);
                }
                if (realUrl.IndexOf("/") != -1)
                {
                    realUrl = realUrl.Substring(realUrl.IndexOf("/") + 1);
                }

                realUrl = realUrl.Substring(0, realUrl.LastIndexOf("."));

                return realUrl.Replace("/", "-").ToLower();
            }
        }

        public string PageType
        {
            get
            {
                string pageName = FullPageName.ToLower();
                if (pageName.IndexOf("-") != -1)
                    pageName = pageName.Substring(0, pageName.IndexOf("-"));
                
                return pageName;

            }
        }

        public int Page
        {
            get
            {
                if (this.page == -1)
                    return 1;
                return this.page;
            }
        }

        /// <summary>
        /// 返回路径
        /// </summary>
        public string ReturnUrl
        {
            get { return returnUrl; }
        }

        /// <summary>
        /// 当前页面URL
        /// </summary>
        public string CurrentUrl
        {
            get { return HttpContext.Current.Request.Url.ToString(); }
        }

        #region Current User
        /// <summary>
        /// 当前用户的用户名
        /// </summary>
        public string UserName
        {
            get
            {
                if (HttpContext.Current.User != null)
                {
                    if (System.Web.HttpContext.Current.User.Identity.IsAuthenticated)
                    {
                        string str = System.Web.HttpContext.Current.User.Identity.Name;
                        if (str.IndexOf("|") == -1)
                        {
                            return "";
                        }
                        else
                        {
                            return str.Substring(str.IndexOf("|") + 1, str.LastIndexOf("|") - str.IndexOf("|") - 1);
                        }
                    }
                }

                return "";
            }
        }

        /// <summary>
        /// 当前用户的用户ID
        /// </summary>
        public int UserId
        {
            get
            {
                if (HttpContext.Current.User != null)
                {
                    if (System.Web.HttpContext.Current.User.Identity.IsAuthenticated)
                    {
                        string str = System.Web.HttpContext.Current.User.Identity.Name;
                        if (str.IndexOf("|") == -1)
                        {
                            return 0;
                        }
                        else
                        {
                            return Convert.ToInt32(str.Substring(0, str.IndexOf("|")));
                        }

                    }
                }
                return 0;
            }
        }

        /// <summary>
        /// 当前用户的用户类型
        /// </summary>
        public short UserType
        {
            get
            {
                if (HttpContext.Current.User != null)
                {
                    if (System.Web.HttpContext.Current.User.Identity.IsAuthenticated)
                    {
                        string str = System.Web.HttpContext.Current.User.Identity.Name;
                        if (str.IndexOf("|") == -1)
                        {
                            return 0;
                        }
                        else
                        {
                            return Convert.ToInt16(str.Substring(str.LastIndexOf("|") + 1));
                        }
                    }
                }
                return 0;
            }
        }

        /// <summary>
        /// 获取IP地址
        /// </summary>
        public string IPAddress
        {
            get
            {
                string userIP;
                HttpRequest Request = HttpContext.Current.Request;

                // 如果使用代理，获取真实IP
                if (Request.ServerVariables["HTTP_X_FORWARDED_FOR"] != "")
                    userIP = Request.ServerVariables["REMOTE_ADDR"];
                else
                    userIP = Request.ServerVariables["HTTP_X_FORWARDED_FOR"];

                if (userIP == null || userIP == string.Empty)
                    userIP = Request.UserHostAddress;

                return userIP;
            }
        }
        #endregion

        #endregion
    }
}
