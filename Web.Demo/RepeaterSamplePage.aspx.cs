using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Data;

namespace Web.Demo
{
    public partial class RepeaterSamplePage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            Repeater1.DataSource = CreateTable().DefaultView;
            Repeater1.DataBind();
        }

        private DataTable CreateTable()
        {
            DataTable dt = new DataTable();
            DataColumn colId = new DataColumn("ID", Type.GetType("System.Int32"));
            colId.AutoIncrement = true;
            colId.AutoIncrementStep = 1;
            colId.ColumnName = "编号";
            dt.Columns.Add(colId);

            DataColumn colName = new DataColumn("UserName", Type.GetType("System.String"));            
            colName.ColumnName = "用户名称";
            dt.Columns.Add(colName);

            DataColumn colPwd = new DataColumn("UserPwd", Type.GetType("System.String"));
            colPwd.ColumnName = "密码";
            dt.Columns.Add(colPwd);

            DataRow row = dt.NewRow();
            row["UserName"] = "admin";
            row["UserPwd"] = "admin888";

            dt.Rows.Add(row);

            return dt;
        }
    }
}