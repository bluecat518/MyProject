<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="MakeThumbnailPage.aspx.cs" Inherits="Web.Demo.MakeThumbnailPage" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div id="content">
        <fieldset id="upfile-field">
            <legend>上传文件</legend>
            <div class="upload-cont">
                <asp:FileUpload ID="FileUpload1" runat="server" />
                <asp:Button ID="Button1" runat="server" Text="上传文件" onclick="Button1_Click" />
                <br />
                <asp:Label ID="Label1" runat="server" Text="Label"></asp:Label>
            </div>
        </fieldset>        
    </div>
    </form>
</body>
</html>
