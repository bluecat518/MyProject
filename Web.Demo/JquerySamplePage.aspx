<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="JquerySamplePage.aspx.cs" Inherits="Web.Demo.JquerySamplePage" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>    
    <script src="Scripts/jquery/jquery-1.4.1-vsdoc.js" type="text/javascript"></script>
    <script src="Scripts/jquery/jquery-1.4.1.min.js" type="text/javascript"></script>
    <style type="text/css">
        body{font-size:12px;}
        .custom-table td{padding:5px;}
    </style>
</head>
<body>
    <form id="form1" runat="server">
    <div id="page">
        
    </div>
    </form>
    <script type="text/javascript">
        var data = "{\"total\":\"4\", \"rows\": ["
            + "{\"ID\":\"1\", \"Content\":\"<div>22222222222\"bitch\"222222222<br/><br/>333333333333333333333<p>eeeeeeeeeeeeeee</p></div>\", \"UserName\":\"god1\"},"
            + "{\"ID\":\"2\", \"Content\":\"<br>aaaaaaaaaaa     aaaa\"<挪威的森林>\"bbbbbb<div>bbbbbbbbbbb</div>\", \"UserName\":\"god2\"},"
            + "{\"ID\":\"3\", \"Content\":\"<p>cccccccc<br/>ccccccc  ccccccccc</p> \"《不告诉你》\"\", \"UserName\":\"god3\"}"
        + "]}";

        var vJson = eval("(" + data + ")");
//        alert(vJson);
//        alert(vJson.total);

        var html = "";
        html += "<table class=\"custom-table\" width=\"100%\" cellpadding=\"0\" cellspacing=\"0\">";
        $(vJson.rows).each(function (i) {
            html += "<tr>";
            html += "<td>" + vJson.rows[i].ID + "</td>";
            html += "<td>" + vJson.rows[i].UserName + "</td>";
            html += "<td>" + vJson.rows[i].Content.replace(/"([\"])"/g), "\\\"") + "</td>";
            html += "<td><a href=\"#\">审核</a></td>";
            html += "</tr>";
        });
        html += "</table>";

        $("#page").html(html);

        var json = $.parseJSON(data);
        //alert(json);
    </script>
</body>
</html>
