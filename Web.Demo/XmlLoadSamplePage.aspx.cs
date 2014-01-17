using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Text;

namespace Web.Demo
{
    public partial class XmlLoadSamplePage : System.Web.UI.Page
    {
        List<Dictionary<string, string>> list = new List<Dictionary<string, string>>();

        Dictionary<string, string> dic = new Dictionary<string, string>();        

        StringBuilder sb = new StringBuilder();

        string strText = string.Empty;

        System.Xml.XmlDocument xmlDoc = new System.Xml.XmlDocument();

        protected void Page_Load(object sender, EventArgs e)
        {
            LoadXml("私营股份有限公司");

            Response.Write(strText);
            Response.Write("<br>");

            foreach (string key in dic.Keys)
            {
                Response.Write("Key ：" + key + "  Value :" + dic[key] + "<br>");
            }
        }

        private void LoadXml(string employerType)
        {            

            string filePath = Server.MapPath("~/EmployerTypeConfig.xml");

            xmlDoc.Load(filePath);

            System.Xml.XmlNode rootNode = xmlDoc.SelectSingleNode("root");

            System.Xml.XmlNodeList nodes = rootNode.SelectNodes("node");

            foreach (System.Xml.XmlNode node in nodes)
            {
                //sb.AppendLine(node.ChildNodes[1].InnerText);

                string key = node.ChildNodes[1].InnerText;

                if(!dic.Keys.Contains(key))
                    dic.Add(node.ChildNodes[1].InnerText, node.ChildNodes[2].InnerText);                
            }

            if(dic.Keys.Contains(employerType))
                strText = dic[employerType];
        }
    }
}