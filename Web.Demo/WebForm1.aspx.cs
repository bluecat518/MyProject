using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Web.Demo
{
    public partial class WebForm1 : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            //List<Comment> list = new List<Comment>(){
            //                        new Comment(){InfoId=1, Title="", Score=1},
            //                        new Comment(){InfoId=2, Title="", Score=4},
            //                        new Comment(){InfoId=3, Title="", Score=5},
            //                        new Comment(){InfoId=3, Title="", Score=5},
            //                        new Comment(){InfoId=3, Title="", Score=2}
            //                     };

            //int sumrate = 0;
            //list.ForEach((c) => { sumrate += c.Score; });
            //Response.Write("---------------------------------------<br/>");
            //Response.Write(sumrate);
            //Response.Write("<br/>---------------------------------------<br/>");
            //Response.Write(sumrate / list.Count);
        }
    }

    public class Comment
    {
        public int InfoId { get; set; }

        public string Title { get; set; }

        public int Score { get; set; }
    }
}