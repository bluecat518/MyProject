<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Demo4.aspx.cs" Inherits="Web.Demo.Demo4" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div class="main">
        <%=LinqSample()%>
        <div class="container">
            <div class="msgContainer">
                <%=DateTimeComapre()%>
            </div>
        </div>
    </div>
    </form>
</body>
</html>
