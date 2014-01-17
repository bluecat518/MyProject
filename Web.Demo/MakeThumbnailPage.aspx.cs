using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Drawing;
using System.IO;
using Web.BaseClasses;

namespace Web.Demo
{
    public partial class MakeThumbnailPage : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }

        /// <summary>
        /// 上传文件
        /// </summary>        
        protected void Button1_Click(object sender, EventArgs e)
        {
            HttpPostedFile file = this.FileUpload1.PostedFile;
            if (file != null && file.ContentLength > 0)
            {
                string result = UploadPic(ReadFileToBuffer(file), DateTime.Now.ToShortDateString(), file.FileName, 0);
                Label1.Text = result;
            }
        }

        public static string UploadPic(byte[] fileBuffer, string date, string fileName, int fileType)
        {
            string strMsg = "";  //返回信息
            string fileExt = Path.GetExtension(fileName);
            string fileSavePath = @"D:\TempUploadPic\";
            string root = @"D:\TempUploadPic\";

            string folder = "Prod";
            if (fileType == 10) folder = "Comp";
            if (fileType == 20) folder = "Prod";
            //if (fileType == 11) folder = "CompSmall";
            //if (fileType == 21) folder = "ProdSmall";

            using (MemoryStream ms = new MemoryStream(fileBuffer))
            {
                fileSavePath += folder + "\\" + date;
                if (!Directory.Exists(fileSavePath))
                {
                    Directory.CreateDirectory(fileSavePath);
                }

                fileSavePath += "\\" + DateTime.Now.ToString("yyyyMMddhhmmssffffff") + fileExt;

                Thumbnail.MakeThumbnail(ms, fileSavePath, 600.00, 600.00);

                try
                {
                    //FileStream fs = new FileStream(fileSavePath, FileMode.OpenOrCreate);
                    //ms.WriteTo(fs);
                    //fs.Close();
                    //ms.Close();
                    //fs.Dispose();
                    //ms.Dispose();
                    
                    //缩略图
                    if(folder != "" && folder != string.Empty)
                    {
                        if (folder == "Prod") folder = "ProdSmall";
                        if (folder == "Comp") folder = "CompSmall";
                    }
                    string thumbnailPath = root + folder + "\\" + date;
                    if (!Directory.Exists(thumbnailPath))
                    {
                        Directory.CreateDirectory(thumbnailPath);
                    }
                    thumbnailPath = root + folder + "\\" + date + "\\" + DateTime.Now.ToString("yyyyMMddhhmmssffffff") + ".summ" + fileExt;
                    Thumbnail.MakeThumbnail(fileSavePath, thumbnailPath, 100, 100, "A");

                    if (thumbnailPath.IndexOf("ProdSmall") > 0)
                        strMsg = thumbnailPath.Substring(thumbnailPath.IndexOf(@"\ProdSmall") + 11);
                    if (thumbnailPath.IndexOf("CompSmall") > 0)
                        strMsg = thumbnailPath.Substring(thumbnailPath.IndexOf(@"\CompSmall") + 11);
                }
                catch (Exception err)
                {
                    strMsg = err.ToString();
                }
            }

            return strMsg;            
        }

        public static byte[] ReadFileToBuffer(HttpPostedFile postedfile)
        {
            Stream stream = postedfile.InputStream;
            byte[] buffer = new byte[postedfile.ContentLength];
            stream.Read(buffer, 0, postedfile.ContentLength);
            stream.Close();
            return buffer;
        }
    }
}