<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="RepeaterSamplePage.aspx.cs" Inherits="Web.Demo.RepeaterSamplePage" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html lang="en">
<head runat="server">
    <title></title>
    <style type="text/css">
    .content table tr,.content table td{border:1px solid #fefefe;}
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div class="pages" id="pages">
        <div class="content">
            <table cellpadding="0" cellspacing="0" border="0">
                <tr>
                    <th>1</th>
                    <th>2</th>
                    <th>3</th>
                </tr>
                <tr>
                    <asp:Repeater runat="server" ID="Repeater1">
                        <ItemTemplate>
                            <td><%# Eval("ID") %></td>
                            <td><%# Eval("UserName") %></td>
                            <td><%# Eval("UserPwd")%></td>
                        </ItemTemplate>
                    </asp:Repeater>
                </tr>
            </table>
        </div>
    </div>
    </form>
</body>
</html>
