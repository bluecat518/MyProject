using System;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;

namespace Web.Demo
{
    public partial class TestTryCatchPage : System.Web.UI.Page
    {
        private readonly string SqlServer = ConfigurationManager.AppSettings["ConnString"];

        protected void Page_Load(object sender, EventArgs e)
        {
            IsConnect();
        }

        protected bool IsConnect()
        {
            SqlConnection conn = new SqlConnection(SqlServer);

            try
            {
                if (conn.State != ConnectionState.Open)
                    conn.Open();

                return true;
            }
            catch (Exception err)
            {
                Response.Write("------------------------------------------<br>");
                Response.Write("异常信息：" + err.Message + "<br>");
                return false;
            }
            finally
            {
                Response.Write("------------------------------------------<br>");
                Response.Write("执行finally");
            }
        }
    }
}