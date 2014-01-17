using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text.RegularExpressions;
using AngDing.Citys;

namespace Web.Demo
{
    public partial class SelectCityPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            btnQuery.Click += new EventHandler(btnQuery_Click);
        }

        void btnQuery_Click(object sender, EventArgs e)
        {
            //string url = TextBox1.Text.Trim();
            //string ret = GetDomainName(url);
            //Label1.Text = ret.ToString();
            if(string.IsNullOrEmpty(TextBox1.Text.Trim()))
                return;

            this.Label1.Text = "<label style=\"color:#f9f9f9;\">正在查询...</label>";

            string result = GetAreaInfo(TextBox1.Text.Trim());
            this.Label1.Text = string.Empty;
            this.Label1.Text = result;
        }

        public static string GetAreaInfo(string areaname)
        {
            AngDing.Citys.cCityInfo city = new AngDing.Citys.cCityInfo();

            string areaName = areaname;
            string result = string.Empty;

            AngDing.Citys.cCityInfo cityInfo = null;
            if (!string.IsNullOrEmpty(areaName))
            {
                if (areaName.Contains(' '))
                    areaName = areaName.Replace(' ', '-');

                if (areaName.IndexOf('市') > -1)
                {
                    areaName = areaName.Substring(0, areaName.IndexOf('市'));
                }
                if (areaName.IndexOf('县') > -1)
                {
                    areaName = areaName.Substring(0, areaName.IndexOf('-'));
                }

                cityInfo = cCity.GetCityInfoFromOutString(areaName, 2);

                int AreaID = 0;
                string AreaName = string.Empty;
                string AreaSpell = string.Empty;
                string AreaUrl = string.Empty;
                int AreaLevel = 0;
                if (cityInfo != null && cityInfo.CityId > 0)
                {
                    AreaID = cityInfo.CityId;
                    AreaName = cityInfo.CityName;
                    AreaSpell = cityInfo.CityCode ?? string.Empty;
                    AreaUrl = cityInfo.ParentPath ?? "0.";
                    AreaLevel = cityInfo.CityLevel;
                }

                result = "地区ID：" + AreaID + "\r\n"
                    + "地区名：" + AreaName + "\r\n"
                    + "地区拼音：" + AreaSpell + "\r\n"
                    + "地区路径：" + AreaUrl + "\r\n"
                    + "地区等级：" + AreaLevel + "\r\n";
            }
            return result ?? "";
        }

        public static string GetDomainName(string url)
        {
            if (url == null)
            {
                throw new Exception("输入的url为空");
            }

            Regex reg = new Regex(@"(?<=://)([\w-]+\.)+[\w-]+(?<=/?)");
            return reg.Match(url, 0).Value.Replace("/", string.Empty);
        }
    }
}