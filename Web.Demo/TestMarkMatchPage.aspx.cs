using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;
using System.Data.OleDb;

namespace Web.Demo
{
    public partial class TestMarkMatchPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            string splitString = "服装;服饰;皮具;首饰";

            string[] strArray = splitString.Split(';');
            foreach (string item in strArray)
            {
                string matchMark = "";
                try
                {
                    //匹配对照表
                    matchMark = RetuCompareRes(item);
                }
                catch(Exception ex)
                { throw new Exception(ex.Message); }

                if (matchMark.Length == 0 || string.IsNullOrEmpty(matchMark))
                {
                    Response.Write("未匹配成功    匹配内容：" + splitString + "  匹配的标签：" + matchMark + "<br>");
                }

                if (!string.IsNullOrEmpty(matchMark))
                {
                    Response.Write("匹配成功    匹配内容：" + splitString + "  匹配的标签：" + matchMark + "<br>");
                }
            }
        }

        private static string RetuCompareRes(string tag)
        {
            string mark = "";
            string connString1 = System.Configuration.ConfigurationManager.AppSettings["xls"];
            //string connString2 = ConfigurationManager.ConnectionStrings["xlsx"].ConnectionString;
            string path = System.Configuration.ConfigurationManager.AppSettings["ExcelPath_Comp"];
            string conn = connString1.Replace("@@", path);
            DataTable dt = ReadExcel(conn, "阿里巴巴$");
            //return connString1 + "  数据行：" + dt.Rows.Count;

            for (int j = 0; j < dt.Rows.Count; j++)  //ganji导航组合类别与对照表匹配
            {
                string alibabaCategory = dt.Rows[j]["alibaba"].ToString();

                if (tag.Trim() == alibabaCategory.Trim())
                {
                    mark = dt.Rows[j]["yellowpage"].ToString().Trim();
                    break;
                }
            }
            return mark;
        }

        private static DataTable ReadExcel(string conn, string sheetname)
        {
            using (OleDbConnection con = new OleDbConnection(conn))
            {
                OleDbDataAdapter oada = new OleDbDataAdapter("select * from [" + sheetname + "]", conn);
                DataSet ds = new DataSet();
                oada.Fill(ds);
                return ds.Tables[0];
            }
        }
    }
}