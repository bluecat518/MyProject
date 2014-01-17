<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="JsonType.aspx.cs" Inherits="Web.Demo.JsonType" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
    
    </div>
    </form>
    <script type="text/javascript">
        var data = "{\"lv\": \"1\", \"data\":[ {\"labId\":\"1\", \"labName\":\"时尚\"},{\"labId\":\"2\",\"labName\":\"服装\"}]}";
        var json = eval("(" + data + ")");
        alert(typeof (json));
        //alert(json.lv);

        var arr = ["1", "a", 3, "b", 5, "c"];
        var arr2 = ["a", "b", "c", "d"];
        alert(typeof (arr));
        alert(typeof (arr2));

        for (i = 0; i < arr2.length; i++) {
            document.writeln(arr2[i]);
        }
        //alert(instanceOf (arr2));
    </script>
</body>
</html>
