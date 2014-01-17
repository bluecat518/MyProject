using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Drawing;

namespace Web.BaseClasses
{
    public class Thumbnail
    {
        #region##对给定的一个图片（Image对象）生成一个指定大小的缩略图
        ///<summary>
        /// 对给定的一个图片（Image对象）生成一个指定大小的缩略图。
        ///</summary>
        ///<param name="originalImage">原始图片</param>
        ///<param name="thumMaxWidth">缩略图的宽度</param>
        ///<param name="thumMaxHeight">缩略图的高度</param>
        ///<returns>返回缩略图的Image对象</returns>
        /// 2012-12-4 若参数 “A”则生成按照指定大小的画布，图像等比缩放 By CC
        public static System.Drawing.Image GetThumbNailImage(System.Drawing.Image originalImage, int thumMaxWidth, int thumMaxHeight, string mode)
        {
            System.Drawing.Size thumRealSize = System.Drawing.Size.Empty;
            System.Drawing.Image newImage = originalImage;
            System.Drawing.Graphics graphics = null;
            try
            {
                thumRealSize = GetNewSize(thumMaxWidth, thumMaxHeight, originalImage.Width, originalImage.Height, mode);
                newImage = new System.Drawing.Bitmap(thumMaxWidth, thumMaxHeight);              
                graphics = System.Drawing.Graphics.FromImage(newImage);
                graphics.CompositingQuality = System.Drawing.Drawing2D.CompositingQuality.HighQuality;
                graphics.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.HighQualityBicubic;
                graphics.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.HighQuality;
                graphics.Clear(System.Drawing.Color.White);
                graphics.DrawImage(originalImage,
                    new System.Drawing.Rectangle((thumMaxWidth - thumRealSize.Width) / 2, (thumMaxHeight - thumRealSize.Height) / 2,
                        thumRealSize.Width, thumRealSize.Height),
                    new System.Drawing.Rectangle(0, 0,
                        originalImage.Width, originalImage.Height),
                        System.Drawing.GraphicsUnit.Pixel);
            }
            catch { }
            finally
            {
                if (graphics != null)
                {
                    graphics.Dispose();
                    graphics = null;
                }
            }
            return newImage;
        }
        #endregion

        ///<summary>
        /// 获取一个图片按等比例缩小后的大小。
        ///</summary>
        ///<param name="maxWidth">需要缩小到的宽度</param>
        ///<param name="maxHeight">需要缩小到的高度</param>
        ///<param name="imageOriginalWidth">图片的原始宽度</param>
        ///<param name="imageOriginalHeight">图片的原始高度</param>
        ///<returns>返回图片按等比例缩小后的实际大小</returns>
        public static System.Drawing.Size GetNewSize(int maxWidth, int maxHeight, int imageOriginalWidth, int imageOriginalHeight, string mode)
        {
            int towidth = maxWidth;
            int toheight = maxHeight;

            int x = 0;
            int y = 0;  //x,y先放着 后期可能用到
            int ow = imageOriginalWidth;
            int oh = imageOriginalHeight;

            switch (mode)
            {
                case "HW"://指定高宽缩放（可能变形）
                    break;
                case "W"://指定宽，高按比例
                    toheight = imageOriginalHeight * maxWidth / imageOriginalWidth;
                    break;
                case "H"://指定高，宽按比例
                    towidth = imageOriginalWidth * maxHeight / imageOriginalHeight;
                    break;
                case "A"://等比例缩放
                    if (imageOriginalHeight <= toheight && imageOriginalWidth <= towidth)
                    {
                        towidth = imageOriginalWidth;
                        toheight = imageOriginalHeight;
                    }
                    if ((double)imageOriginalWidth / (double)imageOriginalHeight > (double)towidth / (double)toheight)
                    {
                        towidth = maxWidth;
                        toheight = (towidth * imageOriginalHeight) / imageOriginalWidth;
                    }
                    else
                    {
                        toheight = maxHeight;
                        towidth = (toheight * imageOriginalWidth) / imageOriginalHeight;
                    }
                    break;
                case "Cut"://按指定缩小后裁切（不变形）
                    if ((double)imageOriginalWidth / (double)imageOriginalHeight > (double)towidth / (double)toheight)
                    {
                        oh = imageOriginalHeight;
                        ow = imageOriginalHeight * towidth / toheight;
                      }
                    else
                    {
                        ow = imageOriginalWidth;
                        oh = imageOriginalWidth * toheight / towidth;
                    }
                    break;
                default:
                    break;
            } 

            return new System.Drawing.Size(Convert.ToInt32(towidth), Convert.ToInt32(toheight));
        }


        ///<summary>
        /// 生成缩略图
        /// </summary>
        /// <param name="originalImagePath">源图路径（物理路径）</param>
        /// <param name="thumbnailPath">缩略图路径（物理路径）</param>
        /// <param name="width">缩略图宽度</param>
        /// <param name="height">缩略图高度</param>
        /// <param name="mode">生成缩略图的方式</param>
        public static void MakeThumbnail(string originalImagePath, string thumbnailPath, int width, int height, string mode)
        {
            System.Drawing.Image originalImage = System.Drawing.Image.FromFile(originalImagePath);

            int towidth = width;
            int toheight = height;

            int x = 0;
            int y = 0;
            int ow = originalImage.Width;
            int oh = originalImage.Height;

            switch (mode)
            {
                case "HW"://指定高宽缩放（可能变形）
                    break;
                case "W"://指定宽，高按比例
                    toheight = originalImage.Height * width / originalImage.Width;
                    break;
                case "H"://指定高，宽按比例
                    towidth = originalImage.Width * height / originalImage.Height;
                    break;
                case "A":
                    if (originalImage.Width / originalImage.Height >= width / height)
                    {
                        if (originalImage.Width > width)
                        {
                            towidth = width;
                            toheight = (originalImage.Height * width) / originalImage.Width;
                        }
                        else
                        {
                            towidth = originalImage.Width;
                            toheight = originalImage.Height;
                        }
                    }
                    else
                    {
                        if (originalImage.Height > height)
                        {
                            toheight = height;
                            towidth = (originalImage.Width * height) / originalImage.Height;
                        }
                        else
                        {
                            towidth = originalImage.Width;
                            toheight = originalImage.Height;
                        }
                    }
                    break;
                case "Cut"://指定高宽裁减（不变形）                
                    if ((double)originalImage.Width / (double)originalImage.Height > (double)towidth / (double)toheight)
                    {
                        oh = originalImage.Height;
                        ow = originalImage.Height * towidth / toheight;
                        y = 0;
                        x = (originalImage.Width - ow) / 2;
                    }
                    else
                    {
                        ow = originalImage.Width;
                        oh = originalImage.Width * height / towidth;
                        x = 0;
                        y = (originalImage.Height - oh) / 2;
                    }
                    break;
                default:
                    break;
            }

            //新建一个bmp图片
            System.Drawing.Image bitmap = new System.Drawing.Bitmap(towidth, toheight);

            //新建一个画板
            Graphics g = System.Drawing.Graphics.FromImage(bitmap);

            //设置高质量插值法
            g.PixelOffsetMode = System.Drawing.Drawing2D.PixelOffsetMode.Half;
            g.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.High;

            //设置高质量,低速度呈现平滑程度
            g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.AntiAlias;

            //清空画布并以透明背景色填充
            g.Clear(Color.Transparent);

            //在指定位置并且按指定大小绘制原图片的指定部分
            g.DrawImage(originalImage, new Rectangle(0, 0, towidth, toheight),
             new Rectangle(x, y, ow, oh),
             GraphicsUnit.Pixel);

            try
            {
                //以jpg格式保存缩略图
                bitmap.Save(thumbnailPath, System.Drawing.Imaging.ImageFormat.Jpeg);
                //outthumbnailPath=thumbnailPath;
            }
            catch (System.Exception e)
            {
                throw e;
            }
            finally
            {
                originalImage.Dispose();
                bitmap.Dispose();
                g.Dispose();
            }
        }

        public static void MakeThumbnail(System.IO.Stream imgStream, string fileSavePath, System.Double templateWidth, System.Double templateHeight)
        {
            //从文件取得图片对象，并使用流中嵌入的颜色管理信息 
            System.Drawing.Image myImage = System.Drawing.Image.FromStream(imgStream, true);
            //缩略图宽、高 
            System.Double newWidth = myImage.Width, newHeight = myImage.Height;
            //宽大于模版的横图 
            if (myImage.Width > myImage.Height || myImage.Width == myImage.Height)
            {
                if (myImage.Width > templateWidth)
                {
                    //宽按模版，高按比例缩放 
                    newWidth = templateWidth;
                    newHeight = myImage.Height * (newWidth / myImage.Width);
                }
            }
            //高大于模版的竖图 
            else
            {
                if (myImage.Height > templateHeight)
                {
                    //高按模版，宽按比例缩放 
                    newHeight = templateHeight;
                    newWidth = myImage.Width * (newHeight / myImage.Height);
                }
            }
            //取得图片大小 
            System.Drawing.Size mySize = new Size((int)newWidth, (int)newHeight);
            //新建一个bmp图片 
            System.Drawing.Image bitmap = new System.Drawing.Bitmap(mySize.Width, mySize.Height);
            //新建一个画板 
            System.Drawing.Graphics g = System.Drawing.Graphics.FromImage(bitmap);
            //设置高质量插值法 
            g.InterpolationMode = System.Drawing.Drawing2D.InterpolationMode.High;
            //设置高质量,低速度呈现平滑程度 
            g.SmoothingMode = System.Drawing.Drawing2D.SmoothingMode.HighQuality;
            //清空一下画布 
            g.Clear(Color.White);
            //在指定位置画图 
            g.DrawImage(myImage, new System.Drawing.Rectangle(0, 0, bitmap.Width, bitmap.Height),
            new System.Drawing.Rectangle(0, 0, myImage.Width, myImage.Height),
            System.Drawing.GraphicsUnit.Pixel);
            ///文字水印 
            //System.Drawing.Graphics G=System.Drawing.Graphics.FromImage(bitmap); 
            //System.Drawing.Font f=new Font("宋体",10); 
            //System.Drawing.Brush b=new SolidBrush(Color.Black); 
            //G.DrawString("myohmine",f,b,10,10);
            //G.Dispose();
            ///图片水印
            //System.Drawing.Image copyImage = System.Drawing.Image.FromFile(System.Web.HttpContext.Current.Server.MapPath("pic/1.gif")); 
            //Graphics a = Graphics.FromImage(bitmap); 
            //a.DrawImage(copyImage, new Rectangle(bitmap.Width-copyImage.Width,bitmap.Height-copyImage.Height,copyImage.Width, copyImage.Height),0,0, copyImage.Width, copyImage.Height, GraphicsUnit.Pixel); 
            //copyImage.Dispose(); 
            //a.Dispose(); 
            //copyImage.Dispose();
            //保存缩略图 
            bitmap.Save(fileSavePath, System.Drawing.Imaging.ImageFormat.Jpeg);
            g.Dispose();
            myImage.Dispose();
            bitmap.Dispose();
        }
    }
}
