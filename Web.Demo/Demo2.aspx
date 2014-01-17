<%@ Page Language="C#" %>

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title></title>
<link rel="stylesheet" type="text/css" href="Scripts/bootstrap/css/bootstrap.min.css" />

</head>
<body>
    <a href="#" data-toggle="tooltip" data-placement="top" data-original-title="柴静始终站在离新闻最近的地方，她以她的犀利和敏锐、坚定与坚持，最终历练成为一名优秀的新闻工作者。 " title="">hover over me</a>
    <span id="selector" data-toggle="tooptip" data-original-title="选择正确分类">XXXXXXXXXXXXXXXXXX</span>
<script src="Scripts/jquery/jquery-1.8.0.min.js" type="text/javascript"></script>
<script src="Scripts/bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
<script type="text/javascript">
    $(function () {
        $("body #selector").tooltip({
            placement:'bottom'
        })
    });
</script>
</body>
</html>
