<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="TestJavaScriptPage.aspx.cs" Inherits="Web.Demo.TestJavaScriptPage" %>

<!DOCTYPE html >
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
    <script src="Scripts/jquery/jquery-1.8.3.js" type="text/javascript"></script>
</head>
<body>
    <form id="form1" runat="server">
    <div id="pages" class="pages">
        <div id="content">
            <a href="#cancel" id="cancel" title="取消">Cancel</a>
            <a href="javascript:;" id="open" title="打开">Open</a>
        </div>
    </div>
    </form>
    <script type="text/javascript">
        function closeWindow(b) {
            window.opener = null;
            if (b) {
                window.onbeforeunload = null;

                window.close();
            } else {
                alert("shit");
            }
        }
        
        window.onbeforeunload = closeWindow(false);

        $("#open").click(function () {
            window.open("TestJavaScriptPage.aspx", '', 'height=460,width=660,location=no,scrollbars=no');
        });
    </script>
</body>
</html>