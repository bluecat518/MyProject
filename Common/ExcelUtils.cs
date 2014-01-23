using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Utils
{
    public class Excel
    {
        /*
         *  在导出控件页面加上这句
         */        
        //public override void VerifyRenderingInServerForm(Control control)
        //{
            //base.VerifyRenderingInServerForm(control);
        //}


        //导出Excel（自定义编码）
        //</summary>
        //<param name="GridView1"></param>
        //<param name="title"></param>
        public static void ExportExcel(System.Web.UI.WebControls.GridView GridView1, string title, string encoding)
        {
            //标题
            byte[] bTitle = System.Text.Encoding.GetEncoding(encoding).GetBytes(title + "<br><br>");
            StringBuilder sb = new StringBuilder();
            sb.Append(System.Text.Encoding.GetEncoding(encoding).GetString(bTitle));

            //报表内容
            System.IO.StringWriter oStringWriter = new System.IO.StringWriter();
            System.Web.UI.HtmlTextWriter oHtmlTextWriter = new System.Web.UI.HtmlTextWriter(oStringWriter);
            GridView1.RenderControl(oHtmlTextWriter);
            byte[] bContent = System.Text.Encoding.GetEncoding(encoding).GetBytes(oStringWriter.ToString());
            sb.Append(System.Text.Encoding.GetEncoding(encoding).GetString(bContent));

            //输出
            System.Web.HttpContext.Current.Response.Clear();
            System.Web.HttpContext.Current.Response.Buffer = true;
            System.Web.HttpContext.Current.Response.Charset = encoding;
            System.Web.HttpContext.Current.Response.AppendHeader("Content-Disposition", "online;filename=" + DateTime.UtcNow.ToString("yyyyMMddhhmmssffff") + ".xls");
            System.Web.HttpContext.Current.Response.ContentEncoding = System.Text.Encoding.GetEncoding(encoding);
            System.Web.HttpContext.Current.Response.HeaderEncoding = System.Text.Encoding.GetEncoding(encoding);
            System.Web.HttpContext.Current.Response.ContentType = "application/ms-excel";    //设置输出文件类型为excel文件。 
            System.Web.HttpContext.Current.Response.Write("<meta http-equiv=Content-Type content=\"text/html; charset=" + encoding + "\" >");

            System.Web.HttpContext.Current.Response.Write(sb.ToString());
            System.Web.HttpContext.Current.Response.End();
        }
    }
}
